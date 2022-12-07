import React, { useState } from 'react';

const TableRow = ({ data }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(data.text);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [image, setImage] = useState(data.image);
    const [quantity, setQuantity] = useState(data.quantity);
  
    const handleUpdateClick = () => {
      // Update the row in the table data using the REST API
    };
  
    const handleCancelClick = () => {
      setIsEditing(false);
      setText(data.text);
      setDescription(data.description);
      setPrice(data.price);
      setImage(data.image);
      setQuantity(data.quantity);
    };
  
    if (isEditing) {
      return (
        <tr className="bg-sky-200">
          <td className="border px-4 py-2">{data._id}</td>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={text}
              onChange={event => setText(event.target.value)}
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={price}
              onChange={event => setPrice(event.target.value)}
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={image}
              onChange={event => setImage(event.target.value)}
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="number"
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
            />
          </td>
          <td className="border px-4 py-2">{data.createdAt}</td>
          <td className="border px-4 py-2">{data.updatedAt}</td>
          <td className="border px-4 py-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleUpdateClick}>Update</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancelClick}>Cancel</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr className="bg-white hover:bg-gray-100">
          <td className="border px-4 py-2">{data._id}</td>
          <td className="border px-4 py-2">{data.text}</td>
          <td className="border px-4 py-2">{data.description}</td>
          <td className="border px-4 py-2">{data.price}</td>
          <td className="border px-4 py-2">{data.image}</td>
          <td className="border px-4 py-2">{data.quantity}</td>
          <td className="border px-4 py-2">{data.createdAt}</td>
          <td className="border px-4 py-2">{data.updatedAt}</td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                // Delete the row from the table data using the REST API
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
  };

  export default TableRow;