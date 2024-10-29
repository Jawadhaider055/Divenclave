"use client";
export default function HeroSection() {
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
    <section className="bg-[#2D2D6B] text-white">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4 md:px-8"
        style={{ gap: "30px" }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            ELEVATE YOUR DIGITAL PRESENCE WITH OUR EXPERTISE
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Div Enclave is a full-service digital marketing agency that
            specializes in promoting your business listing to the top of the
            Google search engine. We achieve this through website development,
            (SEO) search engine optimization, video editing, social media
            marketing, content writing, and more.
          </p>
        </div>

        <div
          className="md:w-1/2 w-full p-6 md:p-8 rounded-lg"
          style={{ border: "2px dotted white", backgroundColor: "transparent" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                <option value="content-writing">Copyright Content Writing</option>
                <option value="social-media">Social Media</option>
                <option value="video-creation">WordPress</option>
                <option value="video-creation">Shopify</option>
                <option value="video-creation">Wix</option>
                <option value="video-creation">Square Space</option>
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
                className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-200 w-full md:w-auto"
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
}
