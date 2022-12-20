import * as React from 'react';
import Button from 'react-bootstrap/Button';

const AssetData = [
  {
    Associate_ID: 2016789,
    Associate_Name: 'San',
    Project_Id: 32424,
    Project_Name: 'Amex-OTH',
    Project_Manager_Name: 'Cruise' + ' ' + 2099809,
    EPL_Name: 'EPL1',
    Serial_Number: 9009,
  },
];

const handleEdit = (e, id) => {
  window.open('https://client-access-asset.stackblitz.io/' + id);
};

const Table = () => {
  return (
    <div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Associate ID</th>
            <th scope="col">Associate Name</th>
            <th scope="col">Project Id</th>
            <th scope="col">Project Name</th>
            <th scope="col">Project Manager</th>
            <th scope="col">EPL Name</th>
            <th scope="col">Serial Number</th>
          </tr>
        </thead>
        <tbody>
          {AssetData.map((item) => (
            <tr>
              <td>{item.Associate_ID}</td>
              <td>{item.Associate_Name}</td>
              <td>{item.Project_Id}</td>
              <td>{item.Project_Name}</td>
              <td>{item.Project_Manager_Name}</td>
              <td>{item.EPL_Name}</td>
              <td>{item.Serial_Number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="container text-center">
        <div className="row">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Table;
