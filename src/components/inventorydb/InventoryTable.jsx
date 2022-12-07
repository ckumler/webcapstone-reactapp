import React from 'react';
import InventoryTableRow from './InventoryTableRow';

const InventoryTable = ({ invTableData, setInvTableData }) => {
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
          {invTableData.map(row => (
            <InventoryTableRow key={row._id} invTableData={row} setInvTableData={setInvTableData} />
          ))}
        </tbody>
      </table>
    </>
  );
};


export default InventoryTable;
