import React from 'react'
import Getapi from './Getapi.jsx';

const Navbar = () => {
  const handleClickInbox = function (event) {
    event.preventDefault();
    alert("You clicked inbox");
    Getapi();
  };

  const handleClickAll = function (event) {
    event.preventDefault();
    alert("You clicked all");
    Getapi();
  };

  return (
    <dir className="navbar">
      <span className="activity">📞 Activity </span>
      <span className="submenu">
        <span className="inbox" onClick={handleClickInbox}>Inbox </span>
        <span>:</span>
        <span className="allcalls" onClick={handleClickAll}>All calls</span>
        <span>:</span>
        <span>⚙️</span>
      </span>
    </dir>
  )
}

export default Navbar