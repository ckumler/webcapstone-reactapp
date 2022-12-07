import React, { useState, useEffect } from 'react';
import VolunteerTable from './VolunteerTable';
import VolunteerAddButton from './VolunteerAddButton';

const VolunteerTableWrap = () => {

  const [volTableData, setVolTableData] = useState([]);


  useEffect(() => {
    // Make a request to your API to fetch the array of volunteer items
    fetch('https://webcapstone-api.onrender.com/volunteer')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data); // Log the response to the console
        setVolTableData(data);
      });
  }, []);

  return (
    <div
      name="volunteertablewrap"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
          Volunteer Table
        </h1>
        {/* Container */}
        <div >

          <p>This is text from the volunteer table</p>
          <VolunteerAddButton volTableData={volTableData} setVolTableData={setVolTableData} />
          <VolunteerTable volTableData={volTableData} setVolTableData={setVolTableData} />


        </div>
      </div>
    </div>
  );
};









export default VolunteerTableWrap;
