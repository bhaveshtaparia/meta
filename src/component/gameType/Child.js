import React from 'react'
import Card from './Card'
import './gameType.css'
function Child() {
  return (
    <div className='adjust'>
    <Card level={"Chapter-1"} title={"Adventure 3D Game"} description={"Kill the enemy who are spreading the drugs"}/>
    <Card level={"Chapter-2"} title={"Virtual Danger"} description={"In this section, you will learn virtually how drugs are harming you internally."}/>

    </div>
  )
}

export default Child