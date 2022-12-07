import React, { useState, useEffect } from 'react';
import DonationTable from './DonationTable';
import DonationAddButton from './DonationAddButton';

const DonationTableWrap = () => {

  const [donTableData, setDonTableData] = useState([]);


  useEffect(() => {
    // Make a request to your API to fetch the array of donation items
    fetch('https://webcapstone-api.onrender.com/donation')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data); // Log the response to the console
        setDonTableData(data);
      });
  }, []);

  return (
    <div
      name="donationtablewrap"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
          Donation Table
        </h1>
        {/* Container */}
        <div >

          <p>This is text from the donation table</p>
          <DonationAddButton donTableData={donTableData} setDonTableData={setDonTableData} />
          <DonationTable donTableData={donTableData} setDonTableData={setDonTableData} />


        </div>
      </div>
    </div>
  );
};









export default DonationTableWrap;
