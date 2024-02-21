import React from 'react'
import Ma from './Comp/Ma'
import Header from './Comp/Header'
import Home from './Comp/Home'


function Main() {
  return (
    <div>
      <Header/>
      <Ma title="Model X" dec="From $68,590*"/>
      <Home/>
    </div>
  )
}

export default Main
