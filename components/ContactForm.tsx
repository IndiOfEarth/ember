"use client"; // marks component as a client-side component in next.js app router

import { useState } from "react";

// defining contact form component
export default function ContactForm() {
  /**
   * formData store's user input
   * setFormData is the function to update it
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  /**
   * status tracks form submission state
   * used to show different button labels and messages
   * initial state is idle
   */
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  /**
   * HANDLING INPUT CHANGES
   * Updates the form input as the user types
   * e.target.name dynamically updates name, email, or message fields depending on the input
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * HANDLING FORM SUBMISSION
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white text-black">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Register Your Interest
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-3"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-3"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded p-3"
          ></textarea>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600">Message sent!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
