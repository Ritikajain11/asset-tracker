import * as React from 'react';
import { useState } from 'react';
import Table from './Table';
import AdvanceSearch from './AdvanceSearch';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const BasicSearch = () => {
  const [showResults, updateResults] = useState(false);
  const [selected, updateSelected] = useState('');
  const [input, setInput] = useState('');
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);

  const submit = () => {
    updateResults(true);
  };

  const toggleSearchOption = () => {
    setShowAdvanceSearch(!showAdvanceSearch);
  };

  const selectDropdown = (e) => {
    updateSelected(e.target.value);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    updateSelected('');
    updateResults(false);
    setInput('');
  };

  return (
    <div>
      {showAdvanceSearch === false ? (
        <center>
          <h2 style={{ marginTop: '10px', marginBottom: '50px' }}>
            Client Asset Tracker
          </h2>

          <div className="row" style={{ textAlign: 'right' }}>
            <a href="javascript:void(0);" onClick={toggleSearchOption}>
              Advance Search
            </a>
          </div>

          <div className="row">
            <div className="col-sm-3" />

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic Search</h4>

                  <br />

                  <div className="row">
                    <div className="col-sm-1" />

                    <div className="col-sm-5">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          value={selected}
                          onChange={selectDropdown}
                        >
                          Select One
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item value="ctsEmployeeId">
                            CTS Employee ID
                          </Dropdown.Item>

                          <Dropdown.Item value="ctsEmailId">
                            CTS Email ID
                          </Dropdown.Item>

                          <Dropdown.Item value="amexEmailId">
                            AMEX Email ID
                          </Dropdown.Item>

                          <Dropdown.Item value="amexContractorId">
                            AMEX Contractor ID
                          </Dropdown.Item>

                          <Dropdown.Item value="serialNumber">
                            Serial Number
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div className="col-sm-3">
                      <input
                        id="input"
                        value={input}
                        onChange={onChangeInput}
                      />
                    </div>

                    <div className="col-sm-3" />
                  </div>

                  <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col-sm-3" />

                    <div className="col-sm-3">
                      <Button variant="secondary" onClick={() => reset()}>
                        Reset
                      </Button>
                    </div>

                    <div className="col-sm-3">
                      <Button variant="primary" onClick={() => submit()}>
                        Submit
                      </Button>
                    </div>

                    <div className="col-sm-3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3" />
          </div>
        </center>
      ) : (
        <AdvanceSearch />
      )}
      <br /> <br />
      {showResults && <Table />}
    </div>
  );
};

export default BasicSearch;
