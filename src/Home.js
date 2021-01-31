import React from 'react'
import './Home.css'
import banner from "./Images/amazon-banner.jpg"
import product1 from "./Images/pro1.jpg"
import product2 from "./Images/pro2.jpg"
import product3 from "./Images/pro3.jpg"
import product4 from "./Images/pro4.jpg"
import product5 from "./Images/pro5.jpg"
import product6 from "./Images/pro6.jpg"
import product7 from "./Images/pro7.jpg"
import product8 from "./Images/pro8.jpg"
import product9 from "./Images/pro9.jpg"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src={banner} alt=""/>
            <div className="home__row">
            <Product
            id="12321341"
            title="The Black Matte: Premium Tempered LK Glass Protector"
            price={168.00}
            rating={5}
            image={product1}
            />
            <Product
            id="12321342"
            title="Tripod: AmazonBasics 50-inch LightWeight Tripod With Bag"
            price={11.00}
            rating={4}
            image={product2}
            />
            <Product
            id="12321343"
            title="Apple Watch Series 5 (GPS, 40mm) - Gold Aluminium Case with Pink Sport Band"
            price={780.00}
            rating={5}
            image={product3}
            />
            </div>
            <div className="home__row">
            <Product
            id="12321344"
            title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
            price={300.00}
            rating={5}
            image={product4}
            />
            <Product
            id="12321345"
            title="Haier 570 L Inverter Frost-Free Side-by-Side Refrigerator (HRF-622KS, Black Steel)"
            price={500.00}
            rating={5}
            image={product5}
            />
            <Product
            id="12321346"
            title="Apple iPhone 11 (64GB) - Black"
            price={1008.00}
            rating={5}
            image={product6}
            />
            </div>
            <div className="home__row">
            <Product
            id="12321347"
            title="Mythili Essentials Unisex Alan Walker Printed Cotton Hoodies, Sweatshirt with Kangaroo Pocket"
            price={12.00}
            rating={5}
            image={product7}
            />
            <Product
            id="12321348"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={700.00}
            rating={5}
            image={product8}
            />
            <Product
            id="12321349"
            title="Yashika Fashion Women's Rani Net Semi-Stitched Lehenga Choli With Can Can"
            price={58.00}
            rating={5}
            image={product9}
            />
            </div>

        </div>
    )
}

export default Home
