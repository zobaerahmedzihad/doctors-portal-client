import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style = {{height:'600px'}} className="row d-flex align-items-center" >
            <div className="col-md-4 offset-md-1">
                <h2 className="text-color">Your New Smile <br />Starts Here.</h2>
                <p className="text-secondary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam modi architecto dignissimos quae numquam!</p>
                <button className="btn-info"> GET APPOINTMENT </button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;