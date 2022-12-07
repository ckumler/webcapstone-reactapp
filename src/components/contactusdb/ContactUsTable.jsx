import React from 'react';
import ContactUsTableRow from './ContactUsTableRow';

const ContactUsTable = ({ conTableData, setConTableData }) => {
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">CreatedAt</th>
            <th className="px-4 py-2">UpdatedAt</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {conTableData.map(row => (
            <ContactUsTableRow key={row._id} conTableData={row} setConTableData={setConTableData} />
          ))}
        </tbody>
      </table>
    </>
  );
};


export default ContactUsTable;
