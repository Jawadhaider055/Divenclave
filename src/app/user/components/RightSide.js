import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaCalendarAlt, FaShareAlt } from 'react-icons/fa'; // Importing icons

const RightSide = ({ offers }) => {
  const offersArray = Array.isArray(offers) ? offers : [];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [inputValue, setInputValue] = useState('');

  if (offersArray.length === 0) {
    return <div>No offers set by this company.</div>;
  }

  const handleButtonClick = (offer) => {
    setSelectedOffer(offer);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedOffer(null);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleContinueToOffer = () => {
    if (selectedOffer?.offer_link1) {
      const link = selectedOffer.offer_link1.startsWith('http')
        ? selectedOffer.offer_link1
        : `https://${selectedOffer.offer_link1}`;
      window.open(link, '_blank');
    }
  };

  return (
    <div className="w-full md:w-3/3 p-4">
      <h2 className="text-2xl font-bold mb-6">Verified Coupons</h2>
      <div className="space-y-4">
        {offersArray.map((offer, index) => (
          <OfferCard key={index} offer={offer} onButtonClick={handleButtonClick} />
        ))}
      </div>

      {showPopup && selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full h-[90vh] max-w-xl relative flex flex-col justify-between">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <div className="flex items-center justify-center mb-4">
              {selectedOffer.company && selectedOffer.company.comp_logo ? (
                <img
                  src={`https://divenclave.com/uploads/${selectedOffer.company.comp_logo}`}
                  alt={selectedOffer.company.com_title}
                  className="h-16"
                />
              ) : (
                <p>No logo available</p>
              )}
            </div>
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-2">{selectedOffer.offer_title}</h3>
              <p className="text-lg font-bold">
                {selectedOffer.offer_code ? selectedOffer.offer_code : 'No coupon code needed'}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-medium">Offer Description:</p>
              <p className="text-sm text-gray-600">{selectedOffer.offer_description}</p>
            </div>
            <div className="text-center text-sm text-gray-600 mb-4">
              <p>Expiration Date: {new Date(selectedOffer.offer_expiry).toLocaleDateString()}</p>
            </div>
            <div className="w-full bg-[#2F3841] p-4 rounded-lg text-white flex flex-col justify-center items-center text-center">
              <p className="text-sm font-semibold mb-2">
                Get coupon alerts for {selectedOffer.company?.com_title || 'this company'} and never miss another deal!
              </p>
              <input
                id="userInput"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 mb-2 w-full"
                placeholder="Type something..."
              />
              <button
                onClick={handleContinueToOffer}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-2"
              >
                {selectedOffer.offer_code
                  ? 'Continue to this offer'
                  : 'Redeem at ' + (selectedOffer.company?.com_title || 'this company')}
              </button>
              <p className="text-xs mt-2">No spam, just savings. Read our Privacy Policy for more info.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OfferCard = ({ offer, onButtonClick }) => {
  const [showCode, setShowCode] = useState(false);

  const handleButtonClick = () => {
    setShowCode(true);
    onButtonClick(offer);
  };

  return (
    <div className="bg-white pt-6 rounded-lg shadow-md flex flex-col justify-between border-b border-gray-200">
      <div className=' flex flex-row-reverse'>
      <div className="relative mt-4">
        <button
          onClick={handleButtonClick}
          className="right-2 top-16 bottom-2 bg-purple-600 w-32 h-13 text-white text-sm font-semibold px-2 py-2 rounded-full hover:bg-purple-700 border-dashed border-2 border-gray-200 shadow-md transform hover:scale-105 transition-transform"
        >
          {showCode ? offer.offer_code : 'Get This Offer'}
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center justify-center bg-purple-100 text-purple-600 font-bold text-lg p-4 rounded">
          <span className="text-2xl">{offer.offer_title}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{offer.offer_title}</h3>
          <p className="text-gray-600 mb-2">{offer.offer_description}</p>
          {/* <p className="text-sm text-gray-500 flex items-center">
            <span className="mr-1">✔️</span> Verified coupon
          </p> */}
        </div>
      </div>
      {/* <div className="relative mt-4">
        <button
          onClick={handleButtonClick}
          className="right-2 bottom-2 bg-purple-600 w-32 h-13 text-white text-sm font-semibold px-2 py-2 rounded-full hover:bg-purple-700 border-dashed border-2 border-gray-200 shadow-md transform hover:scale-105 transition-transform"
        >
          {showCode ? offer.offer_code : 'Get This Offer'}
        </button>
      </div> */}
      </div>
      <div className="mt-4 bg-gray-100 p-2 text-xs text-gray-500 flex items-center justify-between rounded-b-lg">
        <div className="flex items-center">
          <span className="mr-1">{offer.offer_users} Uses</span>
        </div>
        <div className="flex items-center ">
          <FaCheckCircle className="mr-1" /> Verified coupon
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-1" /> Expires: {new Date(offer.offer_expiry).toLocaleDateString()}
        </div>
        <div className="flex items-center">
          <FaShareAlt className="ml-2 cursor-pointer hover:text-gray-700" />
        </div>
      </div>
    </div>
  );
};


export default RightSide;
