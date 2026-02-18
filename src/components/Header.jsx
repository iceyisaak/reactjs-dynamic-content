import React from 'react'

const Header = () => {
    const greeting="Welcome to Fabrio's"
    const date=new Date()
  return (
    <header>
        <h1>{greeting}</h1>
        <h3>{date.toLocaleTimeString()}</h3>
    </header>
  )
}

export default Header