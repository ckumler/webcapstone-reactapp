import React, { useState, useEffect } from 'react';
import ContactUsTable from './ContactUsTable';
import ContactUsAddButton from './ContactUsAddButton';

const ContactUsTableWrap = () => {

  const [conTableData, setConTableData] = useState([]);


  useEffect(() => {
    // Make a request to your API to fetch the array of contactUs items
    fetch('https://webcapstone-api.onrender.com/contactUs')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data); // Log the response to the console
        setConTableData(data);
      });
  }, []);

  return (
    <div
      name="contactUstablewrap"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
          ContactUs Table
        </h1>
        {/* Container */}
        <div >

          <p>This is text from the contactUs table</p>
          <ContactUsAddButton conTableData={conTableData} setConTableData={setConTableData} />
          <ContactUsTable conTableData={conTableData} setConTableData={setConTableData} />


        </div>
      </div>
    </div>
  );
};









export default ContactUsTableWrap;
