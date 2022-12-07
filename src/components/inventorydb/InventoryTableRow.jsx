import React, { useState } from 'react';

const InventoryTableRow = ({ invTableData, setInvTableData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(invTableData.text);
  const [description, setDescription] = useState(invTableData.description);
  const [price, setPrice] = useState(invTableData.price);
  const [image, setImage] = useState(invTableData.image);
  const [quantity, setQuantity] = useState(invTableData.quantity);

  const handleUpdateClick = (id) => {
    // Update the row in the table data using the REST API
    let reqdata = {
      "text": text,
      "description": description,
      "price": price,
      "image": image,
      "quantity": quantity
    }

    fetch(`https://webcapstone-api.onrender.com/inventory/${id}`, {
      method: 'PATCH',
      mode: 'cors',
      body: JSON.stringify(reqdata),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    })
    .then(resdata => {
      // Handle res data
      console.log(resdata);
      // Update the table data by updating the row
      setInvTableData(prevInvTableData => {
        const updatedInvTableData = prevInvTableData.map(item => {
          if (item._id === resdata._id) {
            return resdata;
          } else {
            return item;
          }
        });
        return updatedInvTableData;
      });
      setIsEditing(false);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};

const handleDeleteClick = (id) => {
  // Delete the row in the table data using the REST API
  fetch(`https://webcapstone-api.onrender.com/inventory/${id}`, {
    method: 'DELETE',
    mode: 'cors',
  }).then(response => {
    return response.json()
  })
    .then(data => {
      // Handle res data
      console.log(data);
      // Update the table data by deleting the row
      setInvTableData(prevInvTableData => {
        const updatedInvTableData = prevInvTableData.filter(item => item._id !== id);
        return updatedInvTableData;
      });
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};


  const handleCancelClick = () => {
    setIsEditing(false);
    setText(invTableData.text);
    setDescription(invTableData.description);
    setPrice(invTableData.price);
    setImage(invTableData.image);
    setQuantity(invTableData.quantity);
  };

  if (isEditing) {
    return (
      <tr className="bg-sky-200">
        <td className="border px-4 py-2">{invTableData._id}</td>
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
        <td className="border px-4 py-2">{invTableData.createdAt}</td>
        <td className="border px-4 py-2">{invTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleUpdateClick(invTableData._id)}>Update</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="bg-white hover:bg-gray-100">
        <td className="border px-4 py-2">{invTableData._id}</td>
        <td className="border px-4 py-2">{invTableData.text}</td>
        <td className="border px-4 py-2">{invTableData.description}</td>
        <td className="border px-4 py-2">{invTableData.price}</td>
        <td className="border px-4 py-2">{invTableData.image}</td>
        <td className="border px-4 py-2">{invTableData.quantity}</td>
        <td className="border px-4 py-2">{invTableData.createdAt}</td>
        <td className="border px-4 py-2">{invTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleDeleteClick(invTableData._id)}>Delete</button>
        </td>
      </tr>
    );
  }
};

export default InventoryTableRow;