import React from 'react'
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="amazon prime" />

            <div className="home_row">
                <Product
                    id="12341234"
                    title="The LEarn Startup: How to create the Enterprenuership within yourself"
                    price={12.50}
                    rating={5.0}
                    image="https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"
                />
                <Product
                    id="1234123"
                    title="The Learn Startup: How to create the Enterprenuership within yourself"
                    price={20.00}
                    rating={2.0}
                    image="https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"
                />
            </div>
            <div className="home_row">
                <Product
                    id="12341230"
                    title="The LEarn Startup: How to create the Enterprenuership within yourself"
                    price={102.25}
                    rating={1.0}
                    image="https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"
                />
                <Product
                    id="12341231"
                    title="The LEarn Startup: How to create the Enterprenuership within yourself"
                    price={1250.27}
                    rating={3.0}
                    image="https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"
                />
                <Product
                    id="12341239"
                    title="The LEarn Startup: How to create the Enterprenuership within yourself"
                    price={762.35}
                    rating={4.0}
                    image="https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"
                />
            </div>
            <div className="home_row">
                <Product
                    id="12341236"
                    title="The LEarn Startup: How to create the Enterprenuership within yourself"
                    price={12.50}
                    rating={3.0}
                    image="https://i.guim.co.uk/img/media/8be4095b60f796d8b4094876e5e6bb642c22bcc1/0_134_4992_2994/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e1a7f77bebc584ca7f4b4edd18a86de5"
                />
            </div>
        </div>
    )
}

export default Home;