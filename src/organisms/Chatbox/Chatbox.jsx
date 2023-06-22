import React, {useEffect, useState} from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Comment } from "react-loader-spinner";
import {chatApiClient} from "../../config/axios.config";
import Images from "../../assets/images"
import "./Chatbox.scss";

function Chat({handleCancel}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(true);

    const isEmail = emailAddress => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return !!emailAddress.match(regex);
    }

    const sendMessage = async () => {
        if (!userEmail && currentMessage) {
            if (isEmail(currentMessage)) {
                setUserEmail(currentMessage);
                setMessageList(prevState => [...prevState, {author: "you", message: currentMessage}]);
                setCurrentMessage("");
                setMessageList(prevState => [...prevState, {
                    author: "bot",
                    message: "Thank you for providing your email address. How can I help you?"
                }]);
            } else {
                setMessageList(prevState => [...prevState, {author: "you", message: currentMessage}]);
                setCurrentMessage("");
                setMessageList(prevState => [...prevState, {author: "bot", message: "Please provide a valid email address."}]);
            }
        } else if (currentMessage) {
            setMessageList(prevState => [...prevState, {author: "you", message: currentMessage}]);
            setCurrentMessage("");

            const messageData = {
                user_id: userEmail,
                user_message: currentMessage,
            };

            try {
                setLoading(true);
                let {data} = await chatApiClient.post("/chats", messageData);
                if (data.success) {
                    setLoading(false);
                    setMessageList(prevState => [...prevState, {author: "bot", message: data.data.ai_response}]);
                } else {
                    setLoading(false);
                    setMessageList(prevState => [...prevState, {author: "bot", message: "Sorry, We are having problem with connecting to the server. Please try again later?"}]);
                }
            } catch (error) {
                console.error("API request failed: ", error);
            }
        }
    }

    useEffect(() => {
        const timer_1 = setTimeout(() => {
            setLoading(false);
            setMessageList(prevState => [...prevState, {
                author: "bot",
                message: "Hello, I am your online assistant for smart home assistant device."
            }]);
        }, 1000);
        const timer_2 = setTimeout(() => {
            setLoading(false);
            setMessageList(prevState => [...prevState, {
                author: "bot",
                message: "Please mention your email address to continue the conversation."
            }]);
        }, 2000);

        return () => {
            clearTimeout(timer_1);
            clearTimeout(timer_2);
        }
    }, []);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p className="chat-header__title">Online AI Assistant</p>
                <img className="chat-header__cancel-icon" src={Images.CancelIcon} alt="cancel icon" onClick={() => handleCancel()} />
            </div>
            <div className="chat-body">
                <ScrollToBottom className="chat-body__message-container">
                    {messageList.map((messageContent, index) => {
                        return (
                            <>
                                <div
                                    className={`chat-body__message ${messageContent.author !== "bot" ? "chat-body__message--you" : "chat-body__message--other"}`}
                                    key={index}
                                >
                                    <div>
                                        <div className="chat-body__message-content">
                                            <p className="chat-body__message-text">{messageContent.message}</p>
                                        </div>
                                        <div className="chat-body__message-meta">
                                            <p className="chat-body__message-author">{messageContent.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    {loading && (
                        <div className="chat-body__message chat-body__message--other">
                            <Comment
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="chat-body__comment-wrapper"
                                color="#fff"
                                backgroundColor= '#20A090'
                            />
                        </div>
                    )}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Ask me ..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                    className="chat-footer__input"
                />
                <button className="chat-footer__send-button" onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default Chat;
