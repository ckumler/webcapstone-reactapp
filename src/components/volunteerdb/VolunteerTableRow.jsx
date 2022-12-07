import React, { useState } from 'react';

const VolunteerTableRow = ({ volTableData, setVolTableData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(volTableData.firstName);
  const [lastName, setLastName] = useState(volTableData.lastName);
  const [street, setStreet] = useState(volTableData.street);
  const [city, setCity] = useState(volTableData.city);
  const [state, setState] = useState(volTableData.state);
  const [zip, setZip] = useState(volTableData.zip);
  const [phone, setPhone] = useState(volTableData.phone);

  const handleUpdateClick = (id) => {
    // Update the row in the table data using the REST API
    let reqdata = {
      "firstName": firstName,
      "lastName": lastName,
      "street": street,
      "city": city,      
      "state": state,
      "zip": zip,
      "phone": phone
    }

    fetch(`https://webcapstone-api.onrender.com/volunteer/${id}`, {
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
      setVolTableData(prevVolTableData => {
        const updatedVolTableData = prevVolTableData.map(item => {
          if (item._id === resdata._id) {
            return resdata;
          } else {
            return item;
          }
        });
        return updatedVolTableData;
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
  fetch(`https://webcapstone-api.onrender.com/volunteer/${id}`, {
    method: 'DELETE',
    mode: 'cors',
  }).then(response => {
    return response.json()
  })
    .then(data => {
      // Handle res data
      console.log(data);
      // Update the table data by deleting the row
      setVolTableData(prevVolTableData => {
        const updatedVolTableData = prevVolTableData.filter(item => item._id !== id);
        return updatedVolTableData;
      });
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
};


  const handleCancelClick = () => {
    setIsEditing(false);
    setStreet(volTableData.street);
    setCity(volTableData.city);
    setFirstName(volTableData.firstName);
    setLastName(volTableData.lastName);
    setState(volTableData.state);
    setZip(volTableData.zip);
    setPhone(volTableData.phone);
  };

  if (isEditing) {
    return (
      <tr className="bg-sky-200">
        <td className="border px-4 py-2">{volTableData._id}</td>
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
            value={street}
            onChange={event => setStreet(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={state}
            onChange={event => setState(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={zip}
            onChange={event => setZip(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">
          <input
            type="text"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </td>
        <td className="border px-4 py-2">{volTableData.createdAt}</td>
        <td className="border px-4 py-2">{volTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleUpdateClick(volTableData._id)}>Update</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="bg-white hover:bg-gray-100">
        <td className="border px-4 py-2">{volTableData._id}</td>
        <td className="border px-4 py-2">{volTableData.firstName}</td>
        <td className="border px-4 py-2">{volTableData.lastName}</td>
        <td className="border px-4 py-2">{volTableData.street}</td>
        <td className="border px-4 py-2">{volTableData.city}</td>
        <td className="border px-4 py-2">{volTableData.state}</td>
        <td className="border px-4 py-2">{volTableData.zip}</td>
        <td className="border px-4 py-2">{volTableData.phone}</td>
        <td className="border px-4 py-2">{volTableData.createdAt}</td>
        <td className="border px-4 py-2">{volTableData.updatedAt}</td>
        <td className="border px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleDeleteClick(volTableData._id)}>Delete</button>
        </td>
      </tr>
    );
  }
};

export default VolunteerTableRow;