import React, {FC} from 'react';

const Preloader:FC = () => {
    return (
        <div className="preloader">
            <div className="lds-ripple">
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default Preloader;