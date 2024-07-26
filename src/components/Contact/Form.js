
import React from "react";

const Form = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Send Us a Message</h3>
        <form className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-3 rounded-lg font-semibold hover:bg-violet-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
