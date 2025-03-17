"use client";
import React, { useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

function Loader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-70 z-50 pointer-events-none">
      <PuffLoader color="#000000" size={60} />
    </div>
  );
}

export default Loader;