import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Correct import
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_54fuagp", // Replace with your EmailJS service ID
          "template_jgpi8ao", // Replace with your EmailJS template ID
          formData,
          "TIduvt50NHcV6USQf" // Replace with your EmailJS public key
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        })
        .catch((error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 mx-auto lg:w-3/4" id="contact">
      <ToastContainer /> {/* Use ToastContainer here */}
      <h2 className="my-8 text-4xl font-semibold tracking-tighter text-center">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4 space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="w-full px-3 py-2 mb-8 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-rose-800">{errors.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-3 py-2 mb-8 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-rose-800">{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 mb-8 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-rose-800">{errors.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSending}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
