import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = (msg) => toast(msg);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    fetch("https://webcapstone-api.onrender.com/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Show Toast
    notify("Thank you for your feedback!");

    // Clear the form
    const form = event.target;
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#FAEBAD] flex justify-center items-center p-4"
    >
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-[#EB4F31]">
            Contact
          </p>
          <p className="pt-8">
            Submit the form below or send us an email -
            info@katiesplaceatshipp.org
          </p>
        </div>
        <input className=" p-2" type="text" placeholder="Name" name="name" />
        <input
          className="my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="border-2 group border-gray-800 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#EB4F31] hover:border-[#EB4F31]"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Contact;
