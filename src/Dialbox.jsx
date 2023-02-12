import React from 'react';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Dialbox = () => {
  const [current, setCurrent] = React.useState('');
  const append = function (number) {
    setCurrent(`${current}` + number);
  }
  const del = function () {
    setCurrent(`${current.slice(0, -1)}`);
  }
  const dial = function () {
    setCurrent(`....calling`);
  }

  return (
    <div className="container-sub">
      <div className="dial">
        <div className="display">
          <div className="dialnumber">{current}</div>
        </div>
        <div onClick={() => append('1')}>1</div>
        <div onClick={() => append('2')}>2</div>
        <div onClick={() => append('3')}>3</div>
        <div onClick={() => append('4')}>4</div>
        <div onClick={() => append('5')}>5</div>
        <div onClick={() => append('6')}>6</div>
        <div onClick={() => append('7')}>7</div>
        <div onClick={() => append('8')}>8</div>
        <div onClick={() => append('9')}>9</div>
        <div>✳</div>
        <div onClick={() => append('0')}>0</div>
        <div>#</div>
        <div></div>
        <div className="calling" onClick={() => dial()}>
          <LocalPhoneSharpIcon sx={{ fontSize: 50, "color": "white", "background-color": "green", "border-radius": "50%", "padding": "7px 7px" }}></LocalPhoneSharpIcon>
        </div>
        <div onClick={() => del()}><BackspaceIcon></BackspaceIcon></div>
      </div>
    </div>
  )
}

export default Dialbox