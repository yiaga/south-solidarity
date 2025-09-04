import React, { PropsWithChildren } from 'react';

interface Props {
  num: string;
  title: string;
  description: string;
}

const ObjectiveCard = ({ num, title, description } : Readonly<PropsWithChildren<Props>>) => {
   return (
    <div className="group min-w-[278px] w-[278px] h-[316px] relative p-6 rounded-lg shadow-md transition-all duration-300 
                    bg-[#F2F2F7] border border-gray-200 
                    hover:bg-[#2EA024] hover:border-[#2EA024]">
      
      <p className="text-4xl font-bold font-display font-medium text-6xl leading-tight tracking-wider transition-all duration-300 
                    text-[#2EA024] 
                    group-hover:text-amber-400">{num}</p>
      
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