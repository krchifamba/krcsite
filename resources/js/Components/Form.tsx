import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility
    const [popupMessage, setPopupMessage] = useState(""); // State for popup message

    useEffect(() => {
        // Disable body scroll when popup is visible
        if (popupVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up the effect when popup visibility changes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [popupVisible]);

    const validateName = (name: string) => {
        const regex = /^[A-Za-z\s,.'-]+$/;
        return regex.test(name);
    };

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            name: validateName(name) ? "" : "Name can only contain letters and spaces.",
            email: validateEmail(email) ? "" : "Please enter a valid email address.",
            message: message.trim() ? "" : "Message cannot be empty.",
        };

        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.message) return;

        const templateParams = { name, email, message };

        emailjs
            .send(
                "service_04mikbi",
                "template_br3e771",
                templateParams,
                "y4hNtx2iivJLO506Y"
            )
            .then((response) => {
                const firstName = name.split(" ")[0]; // Get the first name
                setPopupMessage(`Thank you for your email, ${firstName}! I'll get back to you as soon as possible.`);
                setPopupVisible(true); // Show popup on success
            })
            .catch((error) => {
                setPopupMessage("Failed to send email. Please try again.");
                setPopupVisible(true); // Show popup on failure
            });
    };

    const closePopup = () => {
        setPopupVisible(false); // Close the popup
    };

    return (
        <div className="min-h-screen w-screen bg-white text-black flex flex-col justify-center items-center">
            <div className="max-w-2xl px-4">
                <div>
                    <h1 className="text-2xl font-bold text-center">Contact Me</h1>
                    <p className="text-center">Have any questions about my work or want to commission me for a website?</p>
                    <p className="text-center">Reach out using the form below:</p>
                </div>
                <form onSubmit={handleSubmit} className="p-8 rounded shadow-md">
                    <div className="flex space-x-4 flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="w-full md:w-1/2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="border p-2 w-full"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 mt-4 rounded w-full active:bg-blue-950"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Popup */}
            {popupVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded shadow-lg max-w-md w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-600 text-xl"
                        >
                            &times;
                        </button>
                        <p className="text-center text-lg">{popupMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
