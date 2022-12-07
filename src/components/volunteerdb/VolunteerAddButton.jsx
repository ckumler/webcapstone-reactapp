import React, { useState } from 'react';

const VolunteerAddButton = ({ volTableData, setVolTableData }) => {


    const [isAdding, setIsAdding] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");    
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
  
  
  
    const handleAddClick = (e) => {
      setIsAdding(true);
    };
  
    const handleSubmitAddClick = (e) => {
  
      // Add a new row to the table data using the REST API
      let data = {
        "firstName": firstName,
        "lastName": lastName,
        "street": street,
        "city": city,
        "state": state,
        "zip": zip,
        "phone": phone
      }
  
      fetch('https://webcapstone-api.onrender.com/volunteer', {
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
        setVolTableData([...volTableData, data]);
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
      setFirstName("");
      setLastName("");
      setStreet("");
      setCity("");      
      setState("");
      setZip("");
      setPhone("");
    }
  
    if (isAdding) {
      return (
        <>
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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">
                Street
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="street"
                type="text"
                value={street}
                onChange={event => setStreet(event.target.value)}
                placeholder="Street"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="city"
                type="text"
                value={city}
                onChange={event => setCity(event.target.value)}
                placeholder="City"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                State
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="state"
                type="text"
                value={state}
                onChange={event => setState(event.target.value)}
                placeholder="State"
              />  
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Zip">
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="zip"
                type="text"
                value={zip}
                onChange={event => setZip(event.target.value)}
                placeholder="Zip"
              />
            <div className="mb-4 flex flex-wrap">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="phone"
                type="text"
                value={phone}
                onChange={event => setPhone(event.target.value)}
                placeholder="Phone"
              />
  
            </div>
          </div>
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

  export default VolunteerAddButton;