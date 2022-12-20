import * as React from 'react';
import { useEffect, useState } from 'react';
import Inventory from './Inventory';
import BasicSearch from './BasicSearch';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const AdvanceSearch = () => {
  const [showResults, updateResults] = useState(false);
  const [associateId, setAssociateId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [ctsManager, setCtsManager] = useState('');
  const [eplId, setEplId] = useState('');
  const [status, setStatus] = useState('active');

  useEffect = () => {
    setStatus('');
  };

  const submit = () => {
    updateResults(true);
  };

  const reset = () => {
    updateResults(false);
    setAssociateId('');
    setProjectId('');
    setCtsManager('');
    setEplId('');
    setStatus('active');
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleAssociateId = (e) => {
    setAssociateId(e.target.value);
  };

  const handleProjectId = (e) => {
    setProjectId(e.target.value);
  };

  const handleCtsManager = (e) => {
    setCtsManager(e.target.value);
  };

  const handleEplId = (e) => {
    setEplId(e.target.value);
  };

  return (
    <div>
      <center>
        <h2 style={{ marginTop: '10px' }}>Client Asset Tracker</h2>
        <div className="row" style={{ textAlign: 'right' }}>
          <a href="/BasicSearch" onClick={BasicSearch}>
            Basic Search
          </a>
        </div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Advance Search</h4>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="associateId">Associate ID</label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      id="input"
                      value={associateId}
                      onChange={handleAssociateId}
                    />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="projectId">Project ID</label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      id="input"
                      value={projectId}
                      onChange={handleProjectId}
                    />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="ctsManager">CTS Manager</label>
                  </div>
                  <div className="col-sm-3">
                    <input
                      id="input"
                      value={ctsManager}
                      onChange={handleCtsManager}
                    />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="eplId">EPL ID</label>
                  </div>
                  <div className="col-sm-3">
                    <input id="input" value={eplId} onChange={handleEplId} />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="active">Is Associate Active</label>
                  </div>
                  <div className="col-sm-5">
                    <div onChange={handleStatus}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={status}
                        onChange={handleStatus}
                        checked={status === 'active'}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Active
                      </label>{' '}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value={status}
                        onChange={handleStatus}
                        checked={status === 'unactive'}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Unactive
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-1" />
                </div>
                <br />
                <div className="row" style={{ marginTop: '40px' }}>
                  <div className="col-sm-3" />
                  <div className="col -sm-3">
                    <Button variant="secondary" onClick={() => reset()}>
                      Reset
                    </Button>{' '}
                  </div>
                  <div className="col-sm-3">
                    <Button variant="primary" onClick={() => submit()}>
                      Submit
                    </Button>{' '}
                  </div>
                  <div className="col-sm-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
      </center>
      <br /> <br />
      {showResults && <Inventory />}
    </div>
  );
};

export default AdvanceSearch;
