import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;