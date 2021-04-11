import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {

    const infosData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days.',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Sador road, Barishal , Bangladesh.',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Contact Us Now',
            description: '+880 1630704167',
            icon: faPhone,
            background: 'primary'
        }

    ]

    return (
        <section className="d-flex justify-content-center">
            <div className ="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;