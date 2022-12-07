import React, { useState, useEffect } from 'react';
import InventoryItem from './InventoryItem';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    // Make a request to your API to fetch the array of inventory items
    fetch('https://webcapstone-api.onrender.com/inventory')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response to the console
        setInventoryItems(data);
      });
  }, []);

  return (
    <div
      name="inventory"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <div className=" max-w-[1200px] mx-auto px-[30px] h-full sm:h-screen">
          <div className="sm:text-center pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
              Inventory
            </h1>
            {/* Container */}
            <div className="m-w-[1200px] m-auto flex flex-col justify-center w-full h-full">
              <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 bg-[#FAEBAD]">
                {/* Map over the array of inventory items and render an InventoryItem component for each item using the JSX syntax */}
                {inventoryItems.map((item) => (
                  <InventoryItem
                    key={item._id}
                    image={item.image}
                    text={item.text}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
