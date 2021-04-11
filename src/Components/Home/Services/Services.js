import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/teeth-whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'ethTe Whitening',
            img: whitening
        }
    ] 


    return (
      <section>
        <div className="text-center">
            <h4 style={{color: '#1CC7C1'}}>OUR SERVICES</h4>
            <h2 className="mt-3 mb-5">Services We Provide</h2>
        </div>

        <div className="d-flex justify-content-center">
            <div className ="w-75 row mt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} ></ServiceDetail>)
                }
            </div>
        </div>

      </section>
    );
};

export default Services;