import React from 'react';
import DonationTableRow from './DonationTableRow';

const DonationTable = ({ donTableData, setDonTableData }) => {
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Note</th>
            <th className="px-4 py-2">FirstName</th>
            <th className="px-4 py-2">LastName</th>
            <th className="px-4 py-2">IsVolunteer</th>
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
