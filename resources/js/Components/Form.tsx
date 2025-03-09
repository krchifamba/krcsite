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
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    useEffect(() => {
        document.body.style.overflow = popupVisible ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [popupVisible]);

    const validateName = (name: string) => /^[A-Za-z\s,.'-]+$/.test(name);
    const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            name: validateName(name) ? "" : "Name can only contain letters and spaces.",
            email: validateEmail(email) ? "" : "Please enter a valid email address.",
            message: message.trim() ? "" : "Message cannot be empty.",
        };

        setErrors(newErrors);
        if (Object.values(newErrors).some((error) => error)) return;

        const templateParams = { name, email, message };

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userID = import.meta.env.VITE_EMAILJS_USER_ID;        

        if (!serviceID || !templateID || !userID) {
            console.error("Missing environment variables");
            setPopupMessage("Email service is not configured. Please try again later.");
            setPopupVisible(true);
            return;
        }

        emailjs
            .send(serviceID, templateID, templateParams, userID)
            .then(() => {
                setPopupMessage(`Thank you, ${name.split(" ")[0]}! I'll get back to you soon.`);
                setPopupVisible(true);
            })
            .catch(() => {
                setPopupMessage("Failed to send email. Please try again.");
                setPopupVisible(true);
            });
    };

    return (
        <div className="min-h-screen w-screen bg-white text-black flex flex-col justify-center items-center overflow-hidden">
            <div className="max-w-2xl px-4 w-full">
                <h1 className="text-2xl font-bold text-center">Contact Me</h1>
                <p className="text-center">Have any questions or want a website? Reach out below:</p>

                <form onSubmit={handleSubmit} className="p-8 rounded shadow-md w-full">
                    <div className="flex space-x-4 flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border-b p-2 w-full focus:border-blue-500 transition-all"
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
                                className="border-b p-2 w-full focus:border-blue-500 transition-all"
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
                            className="border-b p-2 w-full focus:border-blue-500 transition-all overflow-auto overflow-x-hidden"
                            placeholder="Enter your message here..."
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded w-full active:bg-blue-950">
                        Submit
                    </button>
                </form>
            </div>

            {/* Popup */}
            {popupVisible && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-md w-full flex justify-between items-center space-x-4 border border-gray-300 animate-slide-up">
                    <p className="text-black">{popupMessage}</p>
                    <button
                        onClick={() => setPopupVisible(false)}
                        className="text-gray-600 text-xl font-bold hover:text-gray-900"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
}
