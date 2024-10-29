import React from 'react';

const ContentWritingImageSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="text-left md:w-1/2 space-y-5">
        <h2 className="ext-blue-500 font-semibold">Professional Content Writing Services | Blogs, Websites, and More</h2>
        <h1 className="text-4xl font-bold text-black">
        Effective Content Writing Tailored to  <span className="text-black">Your Business Needs</span>
        </h1>
        <p className="text-lg text-gray-600">
        At Div enclave we understand the importance of effective communication. Our content writing services are designed to help you connect with your audience through clear, engaging, and well-researched content. Whether you need blog posts, website copy, or marketing materials, we tailor our writing to meet your specific needs. With a focus on quality and SEO best practices, we ensure that your message not only resonates with your readers but also boosts your online visibility. Let us help you tell your story and achieve your business goals through compelling content.

        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="/content-writing/content-creation.jpg"
          alt="Content Creation Services"
        />
      </div>
    </section>
  );
};

export default ContentWritingImageSection;
