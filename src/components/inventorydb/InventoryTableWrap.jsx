import React, { useState, useEffect } from 'react';
import InventoryTable from './InventoryTable';
import InventoryAddButton from './InventoryAddButton';

const InventoryTableWrap = () => {

  const [invTableData, setInvTableData] = useState([]);


  useEffect(() => {
    // Make a request to your API to fetch the array of inventory items
    fetch('https://webcapstone-api.onrender.com/inventory')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data); // Log the response to the console
        setInvTableData(data);
      });
  }, []);

  return (
    <div
      name="inventorytablewrap"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
          Inventory Table
        </h1>
        {/* Container */}
        <div >

          <p>This is text from the inventory table</p>
          <InventoryAddButton invTableData={invTableData} setInvTableData={setInvTableData} />
          <InventoryTable invTableData={invTableData} setInvTableData={setInvTableData} />


        </div>
      </div>
    </div>
  );
};









export default InventoryTableWrap;
