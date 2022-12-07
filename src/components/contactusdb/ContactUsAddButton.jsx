import React, { useState } from 'react';

const ContactUsAddButton = ({ conTableData, setConTableData }) => {


    const [isAdding, setIsAdding] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
  
  
    const handleAddClick = (e) => {
      setIsAdding(true);
    };
  
    const handleSubmitAddClick = (e) => {
  
      // Add a new row to the table data using the REST API
      let data = {
        "name": name,
        "email": email,
        "message": message,
      }
  
      fetch('https://webcapstone-api.onrender.com/contactUs', {
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
        setConTableData([...conTableData, data]);
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
      setName("");
      setEmail("");
      setMessage("");
    }
  
    if (isAdding) {
      return (
        <>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="message"
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
                placeholder="Message"
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

  export default ContactUsAddButton;