import React, { useState, useEffect } from "react";
// import Search from "../components/Search";
import { motion } from "framer-motion";
// import TopLayout from "../layout/TopLayout";
import RootLayout from "../layout/RootLayout";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";

const Busease = ({}) => {
  return (
    <div className="w-full space-y-12 py-12">
      <RootLayout className="space-y-12 relative">
        <div className="space-y-5 w-full flex py-4 items-center justify-center flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="text-3xl font-semibold text-neutral-700 text-center"
          >
            Find The Best Bus For You!!!
          </motion.h1>

          {/* Search Component */}
          <Search />
        </div>

        {/* Searched Bus Ticket */}
        <div className="w-full h-auto grid grid-cols-1 gap-16 relative">
          {/* Search Ticket */}
          <SearchResult />
        </div>
      </RootLayout>
    </div>
  );
};

export default Busease;
