import React from 'react';

const FeatureItem = ({title,subtitle}) => {
    return (
        <div>
            <p className='text-[#3D4853] pb-0 font-bold text-[22px]'>{title}</p>
            <p className='pb-4 text-[15px] text-[#78909C]'>{subtitle}</p>
        </div>
    );
};

export default FeatureItem;