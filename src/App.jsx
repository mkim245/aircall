import ReactDOM from 'react-dom';
import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Topbox from './Topbox.jsx';
import Bottom from './Bottom.jsx';
import Getapi from './Getapi.jsx';
import Dialbox from './Dialbox.jsx';
import Allcalls from './Allcalls.jsx';
import Inbox from './Inbox.jsx';

const App = () => {
  const [inbox, setInbox] = React.useState(false)
  const [allcalls, setAllcalls] = React.useState(false)

  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Topbox />
      <Dialbox />
      {inbox && !allcalls && <Inbox />}     
      {!inbox && allcalls && <Allcalls />}
      <Bottom />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
