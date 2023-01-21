import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Topbox from './Topbox.jsx';
import Bottom from './Bottom.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Navbar/>
      <Topbox/>
      <div className="container-view">Some activities should be here</div>
      <Bottom/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
