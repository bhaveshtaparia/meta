import React from 'react';
import CustomCard from './Card';

const Adult = () => {
  
 

  return (
    <div className='parent'>
    <CustomCard
      title="Chapter-1"
      hoverText="Help the Young"
      backSideTitle="Counsel and Listen"
      backSideText="Talk to the Needy!"
      playLink="/advice"
    />
    <CustomCard
      title="Chapter-2"
      hoverText="A Meta-Verse Thrill"
      backSideTitle="Be a part of the family of the Victim!"
      backSideText="Help Him Out"
      playLink="https://antidrugconsellor.vercel.app/room/abc"
    />
    {/* Add more instances of CustomCard with different props as needed */}
  </div>
    
    
  );
}

export default Adult;
