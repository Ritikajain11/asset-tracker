import * as React from 'react';
import { useState } from 'react';
import Inventory from './Inventory';

const Home = () => {
  const [showResults, updateResults] = useState(false);
  const [assetId, setAssetId] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const search = () => {
    updateResults(true);
  };

  const reset = () => {
    setAssetId('');
    setEmployeeId('');
    updateResults(false);
  };

  const onChangeAssetValue = (e) => {
    setAssetId(e.target.value);
  };

  const onChangeEmployeeValue = (e) => {
    setEmployeeId(e.target.value);
  };

  return (
    <div>
      <center>
        <h2 style={{ marginTop: '10px', marginBottom: '50px' }}>
          Client Asset Access
        </h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <b>
                <label htmlFor="assetId">Asset ID</label>
                <input
                  id="assetId"
                  className="form-control"
                  value={assetId}
                  onChange={onChangeAssetValue}
                  placeholder="Enter Asset Id"
                />
              </b>
            </div>
          </div>
          <b className="col-lg-4 text-align-center">OR</b>
          <div className="col-lg-4">
            <div className="form-group">
              <b>
                <label htmlFor="employeeId">Employee ID</label>
                <input
                  id="employeeId"
                  className="form-control"
                  value={employeeId}
                  onChange={onChangeEmployeeValue}
                  type="number"
                  placeholder="Enter Employee Id"
                />
              </b>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '80px' }}>
          <div className="col-sm-5" />
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              id="search"
              className="btn btn-primary"
              onClick={() => search()}
            >
              Search
            </button>
          </div>
          <div className="col-sm-5" />
        </div>
      </center>
      <br />
      {showResults && <Inventory />}
    </div>
  );
};

export default Home;
