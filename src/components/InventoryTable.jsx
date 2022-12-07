import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import Table from './Table';

const InventoryTable = () => {

  const [invTableData, setInvTableData] = useState([]);


  useEffect(() => {
    // Make a request to your API to fetch the array of inventory items
    fetch('https://webcapstone-api.onrender.com/inventory')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response to the console
        setInvTableData(data);
      });
  }, []);

  return (
    <div
      name="inventorytable"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
          Inventory Table
        </h1>
        {/* Container */}
        <div >

          <p>This is text from the inventory table</p>
          <AddButton />
          <Table data={invTableData} />


        </div>
      </div>
    </div>
  );
};




const AddButton = () => {


  const [isAdding, setIsAdding] = useState(false);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);



  const handleAddClick = (e) => {
    setIsAdding(true);
  };

  const handleSubmitAddClick = (e) => {

    // Add a new row to the table data using the REST API
    console.log({ text: text, description: description, price: price, image: image, quantity: quantity });
    console.log("test stringify")

    fetch('https://webcapstone-api.onrender.com/inventory', {
      method: 'PUT',
      mode: 'cors',
      body: {
        text: text,
        description: description,
        price: price,
        image: image,
        quantity: quantity
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        // do something with the response data
        console.log(data);
      })
      .catch(error => {
        // handle any errors
        console.error(error);
      });

    // Clear values
    setIsAdding(false);
    setText("");
    setDescription("");
    setPrice("");
    setImage("");
    setQuantity(0);
  };

  const handleCancelAddClick = () => {
    setIsAdding(false);
    setText("");
    setDescription("");
    setPrice("");
    setImage("");
    setQuantity(0);
  };

  if (isAdding) {
    return (
      <>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">
              Text
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="text"
              type="text"
              value={text}
              onChange={event => setText(event.target.value)}
              placeholder="Text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="description"
              type="text"
              value={description}
              onChange={event => setDescription(event.target.value)}
              placeholder="Description"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="price"
              type="text"
              value={price}
              onChange={event => setPrice(event.target.value)}
              placeholder="Price"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image-url">
              Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="image-url"
              type="url"
              value={image}
              onChange={event => setImage(event.target.value)}
              placeholder="Image URL"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="quantity"
              type="number"
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
              placeholder="Quantity"
            />

          </div>
        </div>
        <div className="mb-4 flex items-center justify-end">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmitAddClick}
          >
            Update
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleCancelAddClick}
          >
            Cancel
          </button>
        </div>
      </>
    );
  } else {
    return <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4" onClick={handleAddClick}>Add A New Row</button>
  }
}




export default InventoryTable;
