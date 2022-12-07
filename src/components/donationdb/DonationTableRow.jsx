import React, { useState } from 'react';

const DonationTableRow = ({ donTableData, setDonTableData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(donTableData.amount);
  const [note, setNote] = useState(donTableData.note);
  const [firstName, setFirstName] = useState(donTableData.firstName);
  const [lastName, setLastName] = useState(donTableData.lastName);
  const [isVolunteer, setIsVolunteer] = useState(donTableData.isVolunteer);

  const handleUpdateClick = (id) => {
    // Update the row in the table data using the REST API
    let reqdata = {
      "amount": amount,
      "note": note,
      "firstName": firstName,
      "lastName": lastName,
      "isVolunteer": isVolunteer
    }

    fetch(`https://webcapstone-api.onrender.com/donation/${id}`, {
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
      setDonTableData(prevDonTableData => {
        const updatedDonTableData = prevDonTableData.map(item => {
          if (item._id === resdata._id) {
            return resdata;
          } else {
            return item;
          }
        });
        return updatedDonTableData;
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
  fetch(`https://webcapstone-api.onrender.com/donation/${id}`, {
    method: 'DELETE',
    mode: 'cors',
  }).then(response => {
    return response.json()
  })
    .then(data => {
      // Handle res data
      console.log(data);
      // Update the table data by deleting the row
      setDonTableData(prevDonTableData => {
        const updatedDonTableData = prevDonTableData.filter(item => item._id !== id);
        return updatedDonTableData;
      });
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};


  const handleCancelClick = () => {
    setIsEditing(false);
    setAmount(donTableData.amount);
    setNote(donTableData.note);
    setFirstName(donTableData.firstName);
    setLastName(donTableData.lastName);
    setIsVolunteer(donTableData.isVolunteer);
  };

  if (isEditing) {
    return (
      <tr className="bg-sky-200">
        <td className="border px-4 py-2">{donTableData._id}</td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={note}
            onChange={event => setNote(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={isVolunteer}
            onChange={event => setIsVolunteer(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">{donTableData.createdAt}</td>
        <td className="border px-4 py-2">{donTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleUpdateClick(donTableData._id)}>Update</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="bg-white hover:bg-gray-100">
        <td className="border px-4 py-2">{donTableData._id}</td>
        <td className="border px-4 py-2">{donTableData.amount}</td>
        <td className="border px-4 py-2">{donTableData.note}</td>
        <td className="border px-4 py-2">{donTableData.firstName}</td>
        <td className="border px-4 py-2">{donTableData.lastName}</td>
        <td className="border px-4 py-2">{donTableData.isVolunteer}</td>
        <td className="border px-4 py-2">{donTableData.createdAt}</td>
        <td className="border px-4 py-2">{donTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleDeleteClick(donTableData._id)}>Delete</button>
        </td>
      </tr>
    );
  }
};

export default DonationTableRow;