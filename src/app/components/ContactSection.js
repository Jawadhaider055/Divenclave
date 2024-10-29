"use client";

import React from "react";

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      email: e.target.email.value,
      phone: e.target.whatsapp.value,
      website: e.target.website.value,
      consultancy: e.target.consultancy.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/free-consultancy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Consultancy request submitted successfully!");
    } else {
      alert("Error submitting consultancy request.");
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4 md:px-8" style={{ gap: "30px" }}>
        {/* Left side: Contact Information */}
        <div className="flex-1 text-left md:pr-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Come <span className="block">Say Hello.!</span>
            </h2>
          </div>

          {/* Dubai Contact */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Dubai, UAE</h3>
            <p className="text-base text-gray-600">
              Office 605, Parklane Tower - Business Bay, Dubai
            </p>
          </div>

          {/* Abbottabad Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Abbottabad, Pakistan</h3>
            <p className="text-base text-gray-600">
              Street #1, Kaghan Colony, Mandian, Abbottabad
            </p>
          </div>
        </div>

        {/* Right side: Consultancy Form */}
        <div className="flex-1 p-6 rounded-lg" style={{ border: "2px dotted white", backgroundColor: "transparent" }}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <input
                  className="w-full p-3 border rounded bg-white text-gray-700"
                  type="text"
                  id="firstName"
                  placeholder="Your Name*"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 border rounded bg-white text-gray-700"
                  type="email"
                  id="email"
                  placeholder="Email*"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <input
                  className="w-full p-3 border rounded bg-white text-gray-700"
                  type="text"
                  id="whatsapp"
                  placeholder="WhatsApp No (optional)"
                />
              </div>
              <div>
                <input
                  className="w-full p-3 border rounded bg-white text-gray-700"
                  type="url"
                  id="website"
                  placeholder="Website URL*"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <select
                className="w-full p-3 border rounded text-gray-700 bg-white"
                id="consultancy"
                required
              >
                <option value="custom-website">Custom Website</option>
                <option value="cms-website">CMS Website</option>
                <option value="ux-ui-design">UX/UI Design</option>
                <option value="local-seo">Local SEO</option>
                <option value="international-seo">International SEO</option>
                <option value="content-writing">Content Writing</option>
                <option value="social-media">Social Media</option>
                <option value="video-creation">WordPress</option>
                <option value="shopify">Shopify</option>
                <option value="wix">Wix</option>
                <option value="squarespace">Square Space</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 border rounded bg-white text-gray-700"
                id="message"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                className="w-full bg-yellow-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-yellow-600"
                type="submit"
              >
                Free Consultancy
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
