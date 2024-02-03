import React from 'react';
import CustomCard from './Card';

const Child = () => {
  
 

  return (
    <div className='parent'>
    <CustomCard
      title="Chapter-1"
      hoverText="Adventure 3d Game!"
      backSideTitle="Collect the Keys"
      backSideText="and Fight the Drug Dealers!"
      playLink="https://youtu.be/PxJ-W39lYdM?si=mN-9s50S_SF1r0oY"
    />
   
    <CustomCard
      title="Chapter-2"
      hoverText="Virtual Danger"
      backSideTitle="The Virtual World"
      backSideText="Engage in Virtual and Augmented Reality World!"
      playLink="/ar"
    />
    {/* Add more instances of CustomCard with different props as needed */}
  </div>
    
    
  );
}

export default Child;
