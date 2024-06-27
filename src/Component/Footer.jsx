import React from 'react'

function Footer() {
const hour = new Date().getHours();
const openHour = 6;
const closeHour = 22;

if(hour>= openHour && hour<= closeHour){
  alert("We're currently open!");
}
else{
  alert("Sorry We're closed ")
}

  return (
    <div>
     <footer>{new Date().toLocaleDateString()}. We're currently open</footer>
    </div>
  )
}

export default Footer