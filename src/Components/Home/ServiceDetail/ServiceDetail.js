import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img src={service.img} alt="img"/>
            <h5 className="mt-4 mb-3"> {service.name} </h5>
            <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, in.</p>
        </div>
    );
};

export default ServiceDetail;