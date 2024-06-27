import React from 'react'

function Footer() {
  return (
    <div>
     <footer>{new Date().toLocaleDateString()}. We're currently open</footer>
    </div>
  )
}

export default Footer