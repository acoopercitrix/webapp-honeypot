import React from 'react';
import HoneyPotSlide1 from '../slides/Honeypot/Slide1.jpg';
import HoneyPotSlide2 from '../slides/Honeypot/Slide2.jpg';
import HoneyPotSlide3 from '../slides/Honeypot/Slide3.jpg';
import HoneyPotSlide4 from '../slides/Honeypot/Slide4.jpg';
import HoneyPotSlide5 from '../slides/Honeypot/Slide5.jpg';
import AttackCountries1 from '../slides/AttackCountries/Slide1.jpg';
import AttackCountries2 from '../slides/AttackCountries/Slide2.jpg';
import AttackCountries3 from '../slides/AttackCountries/Slide3.jpg';
import AttackCountries4 from '../slides/AttackCountries/Slide4.jpg';
import AttackCountries5 from '../slides/AttackCountries/Slide5.jpg';
import AttackCountries6 from '../slides/AttackCountries/Slide6.jpg';
import AttackType1 from '../slides/AttackType/Slide01.jpg';
import AttackType2 from '../slides/AttackType/Slide02.jpg';
import AttackType3 from '../slides/AttackType/Slide03.jpg';
import AttackType4 from '../slides/AttackType/Slide04.jpg';
import AttackType5 from '../slides/AttackType/Slide05.jpg';
import AttackType6 from '../slides/AttackType/Slide06.jpg';
import AttackType7 from '../slides/AttackType/Slide07.jpg';
import AttackType8 from '../slides/AttackType/Slide08.jpg';
import AttackType9 from '../slides/AttackType/Slide09.jpg';
import AttackType10 from '../slides/AttackType/Slide10.jpg';
import Slider from 'react-slick';
import '../App.css';

export const HoneyPot = (settings) => (
          <div>
        <Slider className="fullscreen-slide" {...settings}>
            <div><img src={HoneyPotSlide1} /></div>
            <div><img src={HoneyPotSlide2} /></div>
            <div><img src={HoneyPotSlide3} /></div>
            <div><img src={HoneyPotSlide4} /></div>
            <div><img src={HoneyPotSlide5} /></div>
        </Slider>
        </div>
)

export const AttackCountries = (settings) => (
          <div>
        <Slider className="fullscreen-slide" {...settings}>
            <div><img src={AttackCountries1} /></div>
            <div><img src={AttackCountries2} /></div>
            <div><img src={AttackCountries3} /></div>
            <div><img src={AttackCountries4} /></div>
            <div><img src={AttackCountries5} /></div>
            <div><img src={AttackCountries6} /></div>
        </Slider>
        </div>
)

export const AttackType = (settings) => (
          <div>
        <Slider className="fullscreen-slide" {...settings}>
            <div><img src={AttackType1} /></div>
            <div><img src={AttackType2} /></div>
            <div><img src={AttackType3} /></div>
            <div><img src={AttackType4} /></div>
            <div><img src={AttackType5} /></div>
            <div><img src={AttackType6} /></div>
            <div><img src={AttackType7} /></div>
            <div><img src={AttackType8} /></div>
            <div><img src={AttackType9} /></div>
            <div><img src={AttackType10} /></div>
        </Slider>
        </div>
)