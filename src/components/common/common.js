import React from 'react';

const common = ({title}) => {
    return (
        <>
           < div className="sideHeading">
               <h1>
               {title} 
               <i class="ri-refresh-line"></i>
               </h1>
             
           </div>
        </>
    );
};

export default common;