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

  function dateChange(date) {
    let date_part = date.split("-");
    let month = '';
    let newdate = '';
    if (date_part[1] === '01') month = 'January';
    if (date_part[1] === '02') month = 'Feburary';
    if (date_part[1] === '03') month = 'March';
    if (date_part[1] === '04') month = 'April';
    if (date_part[1] === '05') month = 'May';
    if (date_part[1] === '06') month = 'June';
    if (date_part[1] === '07') month = 'July';
    if (date_part[1] === '08') month = 'August';
    if (date_part[1] === '09') month = 'September';
    if (date_part[1] === '10') month = 'October';
    if (date_part[1] === '11') month = 'November';
    if (date_part[1] === '12') month = ' December';
    return newdate = month + ',' + ' ' + date_part[2] + ' ' + date_part[0];
  }

  function timeTo12HrFormat(time) {   // Take a time in 24 hour format and format it in 12 hour format
    var time_part_array = time.split(":");
    var ampm = 'AM';

    if (time_part_array[0] >= 12) {
      ampm = 'PM';
    }

    if (time_part_array[0] > 12) {
      time_part_array[0] = time_part_array[0] - 12;
    }

    var formatted_time = time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;

    return formatted_time;
  }

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
