import React from 'react'

const Greetings = () => {

  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 16) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <p>
        {greeting}
    </p>
  )
}

export default Greetings