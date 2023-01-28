import ReactDOM from 'react-dom';
import React from 'react';
import { useState, useEffect } from 'react';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Topbox from './Topbox.jsx';
import Bottom from './Bottom.jsx';
import { timeTo12HrFormat, dateChange } from './Formatechange.jsx'
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
      <div className="container-sub">
        {contacts.map((contact, i
        ) => (
          // fragment is not working<></>
          contact.call_type === "missed"
            ? <div key={i}>
              <span>---------------------------{dateChange((contact.created_at).split('T')[0])}---------------------------</span>
              <div className="container-view">
                {/* <span className="container-call"> */}
                  <span className="container-call">📲
                  <span className="container-contact">
                    <span>{contact.from}</span>
                    <span>tried to call on Xavior</span>
                  </span>
                </span>
                <span className="container-date">
                  <span>|</span>
                  <span>{timeTo12HrFormat(((contact.created_at).split('T')[1]).split('.')[0]).split(' ')[0]}</span>
                  <span>{timeTo12HrFormat(((contact.created_at).split('T')[1]).split('.')[0]).split(' ')[1]}</span>
                </span>
              </div>
            </div>
            : <React.Fragment></React.Fragment>
        ))}
      </div>
      <Bottom />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
