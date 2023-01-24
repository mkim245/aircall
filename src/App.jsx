import ReactDOM from 'react-dom';
import React from 'react';
import { useState, useEffect } from 'react';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Topbox from './Topbox.jsx';
import Bottom from './Bottom.jsx';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get(`https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities`)
      .then((res) => {
        console.log("****", res.data)
        setContacts(res.data);
      })
      .catch((error) => console.log("error---", error));
  }, []);

  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Topbox />
      <div className="container-view">
        {contacts.map((contact) => (
                <h1>{contact.id}</h1>
              ))}
      </div>
      <Bottom />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
