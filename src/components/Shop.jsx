import React, { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    message: '',
  });

  // Replace this with your actual phone number in international format (no spaces, dashes, or + symbol)
  // Example: 2348012345678 or 14155552671
  const WHATSAPP_NUMBER = '1234567890'; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Constructing the structured message
    const textMessage = `Hello! My name is ${formData.name}.\n\nI heard about your art through: ${formData.source}.\n\nMessage:\n${formData.message}`;

    // URL encode the message to make it safe for a web link
    const encodedMessage = encodeURIComponent(textMessage);

    // Generate the WhatsApp click-to-chat URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Redirect the user to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
        <nav className='bg-black text-white flex justify-around md:p-10 md:gap-20'>
            <div>
                <h1>Joella's Art</h1>
            </div>
            <div>
                <div className='md:hidden'>
                    <CgMenuRight />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-10'>
                        <li>About</li>
                        <li>Art Journey</li>
                        <li>Support me</li>
                        <li>Work with me</li>
                        <li>Social media</li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </div>
        </nav>
    <div className="flex items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-[#cf9fff] p-8 shadow-xl border border-slate-100">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-950">
            Work with me
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Do you want to work with me, we could discuss exactly want you want and hop on call in less than 24 hours
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="relative block w-full bg-white rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Source Select Input */}
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-slate-700 mb-1">
                Where did you hear about the artist?
              </label>
              <select
                id="source"
                name="source"
                required
                value={formData.source}
                onChange={handleChange}
                className="relative block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
              >
                <option value="" disabled>Select an option</option>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
                <option value="Pinterest">Pinterest</option>
                <option value="Word of Mouth">Word of Mouth / Friend</option>
                <option value="Art Exhibition">Art Exhibition</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you want to create..."
                className="relative block w-full bg-white rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors shadow-md"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}