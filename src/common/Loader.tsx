'use client';
import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";
function Loader() {
  return (
    <>
        <div className="flex justify-center items-center overflow-hidden h-screen">
            <PuffLoader color='#000000' />
        </div>
    </>
  )
}

export default Loader