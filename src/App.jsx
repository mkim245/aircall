import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Topbox from './Topbox.jsx';
import Bottom from './Bottom.jsx';
import Getapi from './Getapi.jsx';

const App = () => {

  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Topbox />
      <Getapi />
      <Bottom />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
