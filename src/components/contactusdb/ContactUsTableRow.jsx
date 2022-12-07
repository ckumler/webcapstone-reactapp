import React, { useState } from 'react';

const ContactUsTableRow = ({ conTableData, setConTableData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(conTableData.name);
  const [email, setEmail] = useState(conTableData.email);
  const [message, setMessage] = useState(conTableData.message);


  const handleUpdateClick = (id) => {
    // Update the row in the table data using the REST API
    let reqdata = {
      "name": name,
      "email": email,
      "message": message,
    }

    fetch(`https://webcapstone-api.onrender.com/contactUs/${id}`, {
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
      setConTableData(prevConTableData => {
        const updatedConTableData = prevConTableData.map(item => {
          if (item._id === resdata._id) {
            return resdata;
          } else {
            return item;
          }
        });
        return updatedConTableData;
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
  fetch(`https://webcapstone-api.onrender.com/contactUs/${id}`, {
    method: 'DELETE',
    mode: 'cors',
  }).then(response => {
    return response.json()
  })
    .then(data => {
      // Handle res data
      console.log(data);
      // Update the table data by deleting the row
      setConTableData(prevConTableData => {
        const updatedConTableData = prevConTableData.filter(item => item._id !== id);
        return updatedConTableData;
      });
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};


  const handleCancelClick = () => {
    setIsEditing(false);
    setName(conTableData.name);
    setEmail(conTableData.email);
    setMessage(conTableData.message);
  };

  if (isEditing) {
    return (
      <tr className="bg-sky-200">
        <td className="border px-4 py-2">{conTableData._id}</td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">{conTableData.createdAt}</td>
        <td className="border px-4 py-2">{conTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleUpdateClick(conTableData._id)}>Update</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="bg-white hover:bg-gray-100">
        <td className="border px-4 py-2">{conTableData._id}</td>
        <td className="border px-4 py-2">{conTableData.name}</td>
        <td className="border px-4 py-2">{conTableData.email}</td>
        <td className="border px-4 py-2">{conTableData.message}</td>
        <td className="border px-4 py-2">{conTableData.createdAt}</td>
        <td className="border px-4 py-2">{conTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleDeleteClick(conTableData._id)}>Delete</button>
        </td>
      </tr>
    );
  }
};

export default ContactUsTableRow;