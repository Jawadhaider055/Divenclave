import React from 'react';

const VideoEditingImageSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="text-left md:w-1/2 space-y-5">
        <h2 className="ext-blue-500 font-semibold">Professional Video Editing Service | Boost Your Visual Story</h2>
        <h1 className="text-4xl font-bold text-black">
        Transform Your Footage into Engaging,  <span className="text-black">High-Quality Videos</span>
        </h1>
        <p className="text-lg text-gray-600">
        Our video editing service is here to help you create polished, engaging, and  High-quality videos. Whether you’re working on a social media campaign, a YouTube channel, business presentations, or personal projects, we’ve got the tools and expertise to bring your vision to life. We handle everything from cutting clips, adding effects, and transitions, to enhancing audio and adjusting colors, ensuring your video flows smoothly and looks its best.

        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="/video-editing/video-editing.jpg"
          alt="Video Editing Services"
        />
      </div>
    </section>
  );
};

export default VideoEditingImageSection;
