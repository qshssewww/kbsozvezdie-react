import React from 'react';
import './Stars.css'
const Stars = ({children}) => {
    return (
        <>
            <div className={'stars'}></div>
            <div className={'twinkling'}>
                {children}
            </div>
        </>
    );
};

export default Stars;