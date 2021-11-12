import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-info p-4'>
                <div className='container text-start'>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                            <h3>CUSTOMER CARE</h3>
                            <ul>
                                <li>Contact Us</li>
                                <li>Customer Care</li>
                                <li>Order Status</li>
                                <li>Articles & Videos</li>
                                <li>Find A Store</li>
                                <li>Accessibility Statement</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h3>ABOUT US</h3>
                            <ul>
                                <li>Careers</li>
                                <li>Company</li>
                                <li>Press Releases</li>
                                <li>Franchise Information</li>
                                <li>CTPAT</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h3>POLICIES</h3>
                            <ul>
                                <li>Shipping & Returns</li>
                                <li>Paint Care</li>
                                <li>Privacy Policy</li>
                                <li>Prop 65</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h3>RESOURSCES</h3>
                            <ul>
                                <li>Sales Flyer</li>
                                <li>Catalog</li>
                                <li>Find A Wishlist</li>
                                <li>Woodcraft Blog</li>
                                <li>Woodworking Classes</li>
                                <li>Woodworking Teachers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 d-flex pt-3'>
                            <h5>Contact with Artisan Belize</h5>
                            <ul className='d-flex justifiy-content-center'>
                                <li><i className="fab fa-facebook-square me-2"></i></li>
                                <li><i className="fab fa-instagram-square me-2"></i></li>
                                <li><i className="fab fa-twitter-square me-2"></i></li>
                                <li><i className="fab fa-linkedin me-2"></i></li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 pt-3'>
                            <h6>ACCESSIBILITY OPTIONS © 2021 BY WOODCRAFT SUPPLY LLC</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;