// Import React and useState hook for managing component state
import React, { useState } from 'react'

// Import CSS for styling the LoginPopup component
import "./LoginPopup.css"

// Import assets (images/icons) from the assets folder
import { assets } from '../../assets/assets'

// Define the LoginPopup component, accepting setShowLogin as a prop to control visibility
const LoginPopup = ({ setShowLogin }) => {

    // State variable to toggle between "Login" and "Sign Up" forms
    const [currState, setCurrState] = useState("Login")

    return (
        // Main wrapper for the login popup
        <div className='login-popup'>

            {/* Form container */}
            <form className="login-popup-container">

                {/* Title section with form heading and close icon */}
                <div className="login-popup-title">
                    <h2>{currState}</h2> {/* Dynamic title: shows "Login" or "Sign Up" */}
                    {/* Close button (X icon) that hides the popup */}
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>

                {/* Input fields section */}
                <div className="login-popup-inputs">
                    {/* Show "Name" field only when in Sign Up mode */}
                    {currState === "Login" ? <></> : <input type="text" placeholder="Your name" required />}
                    
                    {/* Common input fields for both Login and Sign Up */}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                {/* Button with dynamic text based on the state */}
                <button>
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>

                {/* Checkbox for terms and conditions */}
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I agree to the terms of use & privacy policy</p>
                </div>

                {/* Toggle option to switch between Login and Sign Up */}
                {currState === "Login" 
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }

            </form>
        </div>
    )
}

// Export the component so it can be used in other parts of the app
export default LoginPopup
