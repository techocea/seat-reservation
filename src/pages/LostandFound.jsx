import React, { useState, useEffect } from 'react';
import bus2 from "../assets/bus2.png";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lost from "/lost.png";
import Found from "/found.png";
import LostAFound from "/lAf.jpg";

// function LostandFound({ theme }) {
//   const backgroundImage = '/bus.jpg';

const LostandFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center relative">
      <div className="w-full h-full flex flex-col justify-start items-center py-16 lg:py-24 px-10 sm:p-10">
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
          <div className="max-w-lg w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <img
              src={Lost}
              alt="lostImg"
              width={154}
              height={154}
              className="object-contain"
            />
            <div>
              <h2 className="uppercase font-bold text-orange-500">lost items</h2>
              <p className="text-sm text-justify">
                Our platform helps users report and search for lost items with ease. 
                Quickly post details of lost belongings or browse listings to find missing items. 
                We aim to connect finders with owners to ensure lost items are returned safely.
              </p>
              <Link to="/lost-n-found/lost">
                <button className="rounded-lg font-medium bg-transparent flex items-center gap-1">
                  View
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-lg w-full flex flex-col lg:flex-row-reverse lg:items-center justify-between gap-8">
            <img
              src={Found}
              alt="foundImg"
              width={154}
              height={154}
              className="object-contain"
            />
            <div>
              <h2 className="uppercase font-bold text-green-500">
                found items
              </h2>
              <p className="text-sm text-justify">
                Discover items that have been found and reported by others. 
                If you’ve found something, easily post the details to help reunite it with its owner. 
                Our platform fosters a helpful community to ensure lost items are returned safely.
              </p>
              <Link to="/lost-n-found/found">
                <button className="rounded-lg font-medium bg-transparent flex items-center gap-1">
                  View
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-lg w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <img
              src={LostAFound}
              alt="lostAfoundImg"
              width={154}
              height={154}
              className="object-contain"
            />
            <div>
            <h2 className="uppercase font-bold text-red-500">
              You lost something?
            </h2>
            <p className="text-sm text-justify">
              Misplaced something valuable? Don’t worry—we’ve got your back!  
              Report your lost items in seconds, and let our platform help you reconnect with what’s missing.  
              Every post brings you closer to a happy reunion. Let’s turn your “lost” into “found”!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfo6Ha-x_a71xIae0tTxsvrcPfUl_RIfhPOzIzfTb4f-jqBVg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg font-medium bg-transparent p-0 -ml-1"
            >
              <Button className="rounded-lg font-medium bg-transparent p-0">
                Submit
                <FaArrowRight />
              </Button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostandFound;
