import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>EuroVoyage</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>about</li>
            <li>Partnerships</li>
            <li>Career</li>
            <li>Newsroom</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>about</li>
            <li>Partnerships</li>
            <li>Career</li>
            <li>Newsroom</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
