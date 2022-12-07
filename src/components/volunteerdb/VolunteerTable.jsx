import React from 'react';
import VolunteerTableRow from './VolunteerTableRow';

const VolunteerTable = ({ volTableData, setVolTableData }) => {
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">FirstName</th>
            <th className="px-4 py-2">LastName</th>
            <th className="px-4 py-2">Street</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">Zip</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">CreatedAt</th>
            <th className="px-4 py-2">UpdatedAt</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {volTableData.map(row => (
            <VolunteerTableRow key={row._id} volTableData={row} setVolTableData={setVolTableData} />
          ))}
        </tbody>
      </table>
    </>
  );
};


export default VolunteerTable;
