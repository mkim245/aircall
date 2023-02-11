import React from 'react'

const Dialbox = () => {
  const [current, setCurrent] = React.useState('');
  const append = function (number) {
    setCurrent (number);
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
          <div>*</div>
          <div onClick={() => append('0')}>0</div>
          <div>#</div>

      </div>
    </div>
  )
}

export default Dialbox