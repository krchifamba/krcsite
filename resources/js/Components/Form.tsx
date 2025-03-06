import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                templateParams,
                "YOUR_USER_ID"
            )
            .then((response) => {
                console.log(
                    "Email sent successfully:",
                    response.status,
                    response.text
                );
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
            });
    };

    return (
        <div className="min-h-screen min-w-screen  bg-white text-black flex flex-col justify-center items-center">
            <div className="mx-auto px-6 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
                <div>
                    <h1 className="text-2xl font-bold">Contact Me</h1>
                    <p>
                        Have any questions about my work or want to commission
                        me for a website?
                    </p>
                    <p> Reach out using the form below:</p>
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
                        </div>
                        <div className="">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
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
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 mt-4 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
