import React from 'react'

function ViewCounter({count,counterHandller}) {
    console.log('counter component')
  return (
    <div className="viewCounter">
        <div className="increasing-nb">{count}</div>
        <button onClick={counterHandller}>increase</button>
      </div>
  )
}

export default ViewCounter