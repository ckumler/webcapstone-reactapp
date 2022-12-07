import React, { useState, useEffect } from "react";
import InventoryTableWrap from "./inventorydb/InventoryTableWrap";
import ContactUsTableWrap from "./contactusdb/ContactUsTableWrap";
import DonationTableWrap from "./donationdb/DonationTableWrap";
import VolunteerTableWrap from "./volunteerdb/VolunteerTableWrap";

const Dashboard = () => {
  return (
    <div
      name="dashboard"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <div className=" max-w-[1200px] mx-auto px-[30px] h-full bg-[#FAEBAD]">
          <div className="sm:text-center pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]"></h1>
            {/* Container */}
            <div>
              <p>This is text from the dashboard</p>
              <ContactUsTableWrap />
              <InventoryTableWrap />
              <DonationTableWrap />
              <VolunteerTableWrap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
