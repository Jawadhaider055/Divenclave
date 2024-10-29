"use client"; // Required for client-side functionality

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ClientsSlider() {
    const images = [
        '/clients/AB_Logo_New.png',
        '/clients/banner-1.png',
        '/clients/banner-2.png',
        '/clients/banner.png',
        '/clients/Black_logo.png',
        '/clients/DAYGEN.png',
        '/clients/Fiverr-Pro.png',
        '/clients/Logo_.png',
        '/clients/Logo_Logotipo.png',
        '/clients/Logo-.png',
        '/clients/NasalGuard.png',
        '/clients/Nutronic.png',
        '/clients/Original.png',
        '/clients/Packaging.png',
        '/clients/tran.png',
        '/clients/Viwares.png',
        '/clients/Wallery.png',
        '/clients/Waverunner.png'
    ];

    const visibleImagesMobile = 3; // Number of visible images on mobile
    const visibleImagesDesktop = 6; // Number of visible images on desktop

    const [visibleImages, setVisibleImages] = useState(visibleImagesDesktop);

    // Update visible images on screen resize
    useEffect(() => {
        const updateVisibleImages = () => {
            if (window.innerWidth < 768) {
                setVisibleImages(visibleImagesMobile); // Show 3 images on mobile
            } else {
                setVisibleImages(visibleImagesDesktop); // Show 6 images on desktop
            }
        };

        updateVisibleImages();
        window.addEventListener('resize', updateVisibleImages);
        return () => window.removeEventListener('resize', updateVisibleImages);
    }, []);

    // Infinite loop animation for Framer Motion
    const sliderAnimation = {
        animate: {
            x: [0, -100 * images.length], // Move images to the left
            transition: {
                x: {
                    repeat: Infinity, // Infinite looping
                    repeatType: 'loop', // Loop smoothly
                    duration: images.length * 2, // Control speed
                    ease: 'linear', // Continuous motion
                },
            },
        },
    };

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Some of Our Clients</h2>

                {/* Continuous Motion Slider */}
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={sliderAnimation.animate}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        {images.concat(images).map((image, index) => (
                            <div
                                key={index}
                                className={`w-1/${visibleImages} px-2`}
                                style={{ flexShrink: 0, minWidth: '150px', maxWidth: '200px' }} // Ensure consistent width
                            >
                                <img
                                    src={image}
                                    alt={`Client Logo ${index}`}
                                    className="w-full h-auto object-contain" // Maintain aspect ratio
                                    style={{ height: '80px' }} // Set a fixed height to align all logos
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
