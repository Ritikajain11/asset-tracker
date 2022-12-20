import { useState } from 'react';
import React = require('react');
import AdvanceSearch from '../Pages/AdvanceSearch';
import BasicSearch from '../Pages/BasicSearch';

const Home = () => {
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);

  return (
    <div>
      {showAdvanceSearch === false ? <BasicSearch /> : <AdvanceSearch />}
    </div>
  );
};

export default Home;
