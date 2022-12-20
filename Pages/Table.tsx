import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function SearchTable({ data }) {
  const [selected, setSelected] = useState(1);

  return (
    <div className="container margin-tb">
      <Table className="table" style={{ border: 'true' }}>
        <thead>
          <tr>
            <th id="employeeId">Employee Id</th>
            <th id="firstName">First Name</th>
            <th id="lastName">Last Name</th>
            <th id="assetId">Asset Id</th>
            <th id="ProjectId">Project Id</th>
            <th id="actions">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
}
