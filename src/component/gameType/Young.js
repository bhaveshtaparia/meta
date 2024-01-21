import React from 'react';
import CustomCard from './Card';

const Young = () => {
  
 

  return (
    <div className='parent'>
    <CustomCard
      title="Chapter-1"
      hoverText="Team Squad"
      backSideTitle="Collaborate"
      backSideText="Divide into Two Team Drugs Defender and Drugs Remover"
      playLink=""
    />
    <CustomCard
      title="Chapter-2"
      hoverText="Communicate with Peers!"
      backSideTitle="Seek Support"
      backSideText="1-on-1 video chatting app to inspire and motivate!"
      playLink="https://antidrugconsellor.vercel.app/room/abc"
    />
    {/* Add more instances of CustomCard with different props as needed */}
  </div>
    
    
  );
}

export default Young;
