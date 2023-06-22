import React from 'react';
import './SmartHomeAssistant.scss';

const SmartHomeAssistant = () => {
    return (
        <div className="smart-home-assistant">
            <h2 className="smart-home-assistant__title">SmartHome Assistant Documentation</h2>

            {/* Introduction section */}
            <div className="smart-home-assistant__section">
                <h3 className="smart-home-assistant__section-title">Introduction</h3>
                <p>Welcome to the SmartHome Assistant documentation! SmartHome Assistant is an AI-powered device that helps you control and automate your smart home devices. With natural language processing capabilities, it understands your commands and provides seamless control over your connected devices.</p>
            </div>

            {/* Getting Started section */}
            <div className="smart-home-assistant__section">
                <h3 className="smart-home-assistant__section-title">Getting Started</h3>
                <p>To set up your SmartHome Assistant, follow these simple steps:</p>
                <ol className="smart-home-assistant__list">
                    <li>Unbox the SmartHome Assistant device and plug it into a power source.</li>
                    <li>Download and install the SmartHome Assistant app from your device's app store.</li>
                    <li>Open the app and follow the on-screen instructions to connect the device to your home Wi-Fi network.</li>
                    <li>Once connected, you're ready to start using your SmartHome Assistant!</li>
                </ol>
            </div>

            {/* Frequently Asked Questions section */}
            <div className="smart-home-assistant__section">
                <h3 className="smart-home-assistant__section-title">Frequently Asked Questions</h3>

                {/* FAQ 1 */}
                <div className="smart-home-assistant__faq">
                    <h4 className="smart-home-assistant__faq-question">Q1: What types of smart home devices are compatible with SmartHome Assistant?</h4>
                    <p className="smart-home-assistant__faq-answer">A: SmartHome Assistant supports a wide range of devices, including smart lights, thermostats, cameras, door locks, and more. It integrates with popular smart home platforms like Philips Hue, Nest, and August.</p>
                </div>

                {/* FAQ 2 */}
                <div className="smart-home-assistant__faq">
                    <h4 className="smart-home-assistant__faq-question">Q2: How do I add a new smart device to my SmartHome Assistant?</h4>
                    <p className="smart-home-assistant__faq-answer">A: To add a new device, open the SmartHome Assistant app and navigate to the "Devices" section. Click on "Add Device" and follow the in-app instructions specific to your device brand and model.</p>
                </div>

                {/* FAQ 3 */}
                <div className="smart-home-assistant__faq">
                    <h4 className="smart-home-assistant__faq-question">Q3: Can I control my devices remotely when I'm not at home?</h4>
                    <p className="smart-home-assistant__faq-answer">A: Absolutely! SmartHome Assistant allows you to control your devices remotely through the mobile app. As long as your device is connected to the internet, you can access and control it from anywhere.</p>
                </div>

                {/* FAQ 4 */}
                <div className="smart-home-assistant__faq">
                    <h4 className="smart-home-assistant__faq-question">Q4: How can I create automation routines with SmartHome Assistant?</h4>
                    <p className="smart-home-assistant__faq-answer">A: With the SmartHome Assistant app, you can easily create automation routines based on triggers and conditions. For example, you can set up a routine to turn on the lights and adjust the thermostat when you arrive home. Simply go to the app's "Automation" section to create your personalized routines.</p>
                </div>
            </div>

            {/* Troubleshooting section */}
            <div className="smart-home-assistant__section">
                <h3 className="smart-home-assistant__section-title">Troubleshooting</h3>

                {/* Troubleshooting issue */}
                <div className="smart-home-assistant__troubleshooting">
                    <h4 className="smart-home-assistant__troubleshooting-issue">Issue: SmartHome Assistant is not responding to my commands..</h4>
                    <p className="smart-home-assistant__troubleshooting-solution">Solution:</p>
                    <ul className="smart-home-assistant__troubleshooting-list">
                        <li>Ensure that the device is properly connected to power and has a stable internet connection..</li>
                        <li>Make sure you're using the correct wake word to activate the device. By default, the wake word is "Hey Assistant," but you can customize it in the app's settings.</li>
                        <li>Check if the device's microphone is working properly. If not, contact our support team for assistance.</li>
                    </ul>
                </div>

                <div className="smart-home-assistant__troubleshooting">
                    <h4 className="smart-home-assistant__troubleshooting-issue">Issue: My smart lights are not turning on/off as expected.</h4>
                    <p className="smart-home-assistant__troubleshooting-solution">Solution:</p>
                    <ul className="smart-home-assistant__troubleshooting-list">
                        <li>Verify that the lights are properly connected to the SmartHome Assistant app and that they are within range of the device.</li>
                        <li>Ensure that the lights are not physically switched off or disconnected.</li>
                        <li>Restart the SmartHome Assistant device and try controlling the lights again.</li>
                    </ul>
                </div>
            </div>

            {/* Sample Commands and Responses section */}
            <div className="smart-home-assistant__section">
                <h3 className="smart-home-assistant__section-title">Sample Commands and Responses</h3>

                <div className="smart-home-assistant__sample">
                    <p className="smart-home-assistant__sample-command"><strong>User Command:</strong> "Hey Assistant, turn on the living room lights."</p>
                    <p className="smart-home-assistant__sample-response"><strong>SmartHome Assistant Response:</strong> "Sure! Turning on the living room lights."</p>
                </div>

                <div className="smart-home-assistant__sample">
                    <p className="smart-home-assistant__sample-command"><strong>User Command:</strong> "Hey Assistant, what's the temperature in the bedroom?"</p>
                    <p className="smart-home-assistant__sample-response"><strong>SmartHome Assistant Response:</strong> "The current temperature in the bedroom is 72 degrees Fahrenheit."</p>
                </div>

                <div className="smart-home-assistant__sample">
                    <p className="smart-home-assistant__sample-command"><strong>User Command:</strong> "Hey Assistant, lock the front door."</p>
                    <p className="smart-home-assistant__sample-response"><strong>SmartHome Assistant Response:</strong> "I'm sorry, but I cannot perform that action as your front door lock does not support remote locking. Please lock it manually."</p>
                </div>
            </div>
        </div>
    );
};

export default SmartHomeAssistant;
