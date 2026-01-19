import React from 'react';
import SearchComponent from '../../../component/SearchComponent';
import Instruction from "../../../component/Instruction";
import DonorCard from "../../../component/DonorCard";

export default function FindDonor() {
  // Assuming you want to show 6 donor cards.
  const donors = [1, 2, 3, 4, 5, 6]; // This could be dynamic depending on your data

  return (
    <div>
        <SearchComponent />
        <Instruction 
          title={"Blood Type Compatibility"} 
          description={`Donors marked as "Compatible" can donate to your blood type (A+). Universal donor O- can donate to all blood types.`}
        />
        
        <div className=' flex flex-col space-y-6'>
          <p className=' mt-4'>Showing {donors.length} donor{donors.length > 1 ? 's' : ''}</p>
          <div className='flex flex-wrap gap-4'>
            {donors.map((_, index) => (
              <DonorCard key={index} />
            ))}
          </div>
        </div>
    </div>
  );
}
