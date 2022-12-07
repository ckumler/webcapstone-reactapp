import React, { useState } from 'react';

const DonationAddButton = ({ donTableData, setDonTableData }) => {


    const [isAdding, setIsAdding] = useState(false);
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isVolunteer, setIsVolunteer] = useState("");
  
  
  
    const handleAddClick = (e) => {
      setIsAdding(true);
    };
  
    const handleSubmitAddClick = (e) => {
  
      // Add a new row to the table data using the REST API
      let data = {
        "amount": amount,
        "note": note,
        "firstName": firstName,
        "lastName": lastName,
        "isVolunteer": isVolunteer
      }
  
      fetch('https://webcapstone-api.onrender.com/donation', {
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
        setDonTableData([...donTableData, data]);
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
      setAmount("");
      setNote("");
      setFirstName("");
      setLastName("");
      setIsVolunteer(0);
    }
  
    if (isAdding) {
      return (
        <>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">
                Amount
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="amount"
                type="text"
                value={amount}
                onChange={event => setAmount(event.target.value)}
                placeholder="Amount"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="note">
                Note
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="note"
                type="text"
                value={note}
                onChange={event => setNote(event.target.value)}
                placeholder="Note"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                FirstName
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                type="text"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                placeholder="FirstName"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                LastName
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="lastName"
                type="text"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                placeholder="LastName"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="isVolunteer">
                IsVolunteer
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="isVolunteer"
                type="text"
                value={isVolunteer}
                onChange={event => setIsVolunteer(event.target.value)}
                placeholder="IsVolunteer"
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

  export default DonationAddButton;