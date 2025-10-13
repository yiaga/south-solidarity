import React, { PropsWithChildren } from 'react';

interface Props {
  num: string;
  title: string;
  description: string;
}

const ObjectiveCard = ({ num, title, description } : Readonly<PropsWithChildren<Props>>) => {
   return (
    <div className="group min-w-[250px] w-[250px] h-[317px] relative p-6 rounded-lg shadow-md transition-all duration-300 
                    bg-[#F2F2F7] border border-gray-200 
                    hover:bg-[#2EA024] hover:border-[#2EA024]">
      
      <p className="text-5xl font-bold font-display font-medium leading-tight tracking-wider transition-all duration-300 transform origin-top-left
              text-[#2EA024]
              group-hover:text-amber-400 group-hover:scale-75">{num}</p>
      
      <h3 className="text-2xl font-bold mb-3 transition-all duration-300 
                     text-gray-800 
                     group-hover:text-white">{title}</h3>
      
      <p className="text-base transition-all duration-300 
                    text-gray-600 
                    group-hover:text-white">{description}</p>
    </div>
  );
};

export default ObjectiveCard;