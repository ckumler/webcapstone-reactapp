import React, { useState, useEffect } from 'react';

const Dashboard = () => {

  return (
    <div
      name="dashboard"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <div className=" max-w-[1200px] mx-auto px-[30px] h-full sm:h-screen">
          <div className="sm:text-center pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
              Dashboard
            </h1>
            {/* Container */}
            <div className="m-w-[1200px] m-auto flex flex-col justify-center w-full h-full">
            <p>This is where the tables will be</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
