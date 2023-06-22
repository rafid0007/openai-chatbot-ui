import React, {useState} from 'react';
import SmartHomeAssistant from "../../templates/HomePage/SmartHomeAssistant.jsx";
import Images from "../../assets/images/index.js";
import Chatbox from "../../organisms/Chatbox/Chatbox.jsx";
import "./Home.scss";

const Home = () => {
    const [showChat, setShowChat] = useState(true);

    return (
        <div className="App">
            {showChat ?
                <Chatbox handleCancel={() => setShowChat(false)}/> :
                (
                    <img
                        src={Images.ChatbotImage}
                        className='floating-image'
                        alt="Floating Icon"
                        onClick={() => setShowChat(!showChat)}
                    />
                )
            }
            <SmartHomeAssistant/>
        </div>
    );
};

export default Home;
