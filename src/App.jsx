// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ChooseCategory from './pages/ChooseCategory';
import FindOrange from './pages/FindOrange';
import Submit from './pages/Submit';
import GreatJob from './pages/GreatJob';
import DescribeImage from './pages/DescribeImage';
import Basketball from './pages/Basketball';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-category" element={<ChooseCategory />} />
          <Route path="/find-orange" element={<FindOrange />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/great-job" element={<GreatJob />} />
          <Route path="/describe-image" element={<DescribeImage />} />
          <Route path="/basketball" element={<Basketball/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;