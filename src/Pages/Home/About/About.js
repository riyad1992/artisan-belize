import React from 'react';
import banner from '../../../images/about.jpg'

const About = () => {
    return (
        <div className='container'>
            <h1 className='mb-0'>About Us</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <div className='row'>
                <div className='col-12 col-md-6 p-4'><img src={banner} alt='' style={{width:'100%', borderRadius:'20px'}}/>

                </div>
                <div className='col-12 col-md-6'>
                    <h2>Artisan Belize</h2>
                    <p className='p-3'>Artisan Belize Supply, LLC is one of the nation's oldest and largest suppliers of quality woodworking tools and supplies. You'll find Woodcraft stores in more than 70 major metropolitan areas across the U.S.; and Woodcraft annually distributes 1.5 million catalogs featuring more than 8,000 items to all 50 states and 117 foreign countries. The Woodcraft catalog is a standard among woodworkers as the most complete offering of first rate products for woodworking available anywhere. Woodcraft also publishes six issues of Woodcraft Magazine annually.</p>
                </div>
            </div>
        </div>
    );
};

export default About;