"use client";
import { useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { 
  FaUsers, 
  FaSignOutAlt, 
  FaChevronDown, 
  FaCube, 
  FaTags, 
  FaCogs, 
  FaStar,  // <-- Import FaStar for Reviews
} from 'react-icons/fa';

const menuItems = [
  {
    title: "Dev Inclave",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <FaCogs />,
      },
    ],
  },
];

const Sidebar = ({ setActiveComponent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleLogout = () => {
    Cookies.remove('token');
    window.location.href = '/admin';
  };

  return (
    <div className="bg-gray-700 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 text-center">
        <Image
          width={100}
          height={100}
          src="/noavatar.png"
          alt="Profile"
          className="rounded-full mx-auto mb-2"
        />
        <h2 className="text-lg font-semibold">Div Enclave</h2>
        <p className="text-green-400">● Online</p>
      </div>
      <div className="flex-1 p-4 border-t border-gray-700">
        <ul className="mt-4 space-y-2">
          {/* Permanent Links */}
          <li>
            <a href="/admin/Companies">
              <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                <FaCube className="h-5 w-5" />
                <span className="ml-2">Companies</span>
              </button>
            </a>
          </li>
          <li>
            <a href="/admin/Offers">
              <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                <FaTags className="h-5 w-5" />
                <span className="ml-2">Offers</span>
              </button>
            </a>
          </li>
          <li>
            <a href="/admin/Faqs">
              <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                <FaCogs className="h-5 w-5" />
                <span className="ml-2">FAQ's</span>
              </button>
            </a>
          </li>

          {/* New Link for Reviews */}
          <li>
            <a href="/admin/Reviews">
              <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                <FaStar className="h-5 w-5" />
                <span className="ml-2">Reviews</span>
              </button>
            </a>
          </li>

          {/* Dropdown Menu */}
          {menuItems.map((category, index) => (
            <li key={category.title}>
              <button
                className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
                onClick={() => toggleDropdown(index)}
              >
                <span className="ml-2">{category.title}</span>
                <FaChevronDown className="h-5 w-5 ml-auto" />
              </button>
              {isDropdownOpen[index] && (
                <ul className="ml-8 mt-2 space-y-2">
                  {category.list.map((item) => (
                    <li key={item.title}>
                      <a href={item.path}>
                        <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Logout Button */}
          <li className="mt-auto">
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
