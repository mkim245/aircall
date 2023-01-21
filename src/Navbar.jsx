import React from 'react'

const Navbar = () => {
  return (
    <dir className="navbar">
      <span className="activity">📞 Activity </span>
      <span className="submenu">
        <span className="inbox">Inbox </span>
        <span>:</span>
        <span className="allcalls">All calls</span>
        <span>:</span>
        <span>⚙️</span>
      </span>
    </dir>
  )
}

export default Navbar