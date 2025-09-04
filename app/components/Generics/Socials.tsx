"use client";

import React from "react";
import { FaFacebook, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6';

const Socials = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com/yiaga.org" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} color="#008900" /> 
        </a>
      <a href="https://x.com/yiaga" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter size={24} color="#008900" /> 
      </a>
      <a href="https://www.instagram.com/yiaga" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} color="#008900" /> 
      </a>
    </div>
  );
};

export default Socials;
