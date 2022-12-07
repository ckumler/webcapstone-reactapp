import React, { useState } from 'react';

const InventoryAddButton = ({ invTableData, setInvTableData }) => {


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
      let data = {
        "text": text,
        "description": description,
        "price": price,
        "image": image,
        "quantity": quantity
      }
  
      fetch('https://webcapstone-api.onrender.com/inventory', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        return response.json()})
        .then(data => {
          // Handle res data
          console.log(data);
          // Update the table data by adding the new row
        setInvTableData([...invTableData, data]);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
  
      // Clear values
      setIsAdding(false);
      clearAddValues();
    };
  
    const handleCancelAddClick = () => {
      setIsAdding(false);
      clearAddValues();
    };
  
    function clearAddValues(){
      setText("");
      setDescription("");
      setPrice("");
      setImage("");
      setQuantity(0);
    }
  
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
              Add
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

  export default InventoryAddButton;