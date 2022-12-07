import React from 'react';
import DonationTableRow from './DonationTableRow';

const DonationTable = ({ donTableData, setDonTableData }) => {
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Text</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">CreatedAt</th>
            <th className="px-4 py-2">UpdatedAt</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {donTableData.map(row => (
            <DonationTableRow key={row._id} donTableData={row} setDonTableData={setDonTableData} />
          ))}
        </tbody>
      </table>
    </>
  );
};


export default DonationTable;
