import React from 'react';
import HoneyPotSlide1 from '../slides/Honeypot/Slide1.PNG';
import HoneyPotSlide2 from '../slides/Honeypot/Slide2.PNG';
import HoneyPotSlide3 from '../slides/Honeypot/Slide3.PNG';
import HoneyPotSlide4 from '../slides/Honeypot/Slide4.PNG';
import HoneyPotSlide5 from '../slides/Honeypot/Slide5.PNG';
import AttackCountries1 from '../slides/AttackCountries/Slide1.PNG';
import AttackCountries2 from '../slides/AttackCountries/Slide2.PNG';
import AttackCountries3 from '../slides/AttackCountries/Slide3.PNG';
import AttackCountries4 from '../slides/AttackCountries/Slide4.PNG';
import AttackType1 from '../slides/AttackType/Slide1.PNG';
import AttackType2 from '../slides/AttackType/Slide2.PNG';
import AttackType3 from '../slides/AttackType/Slide3.PNG';
import AttackType4 from '../slides/AttackType/Slide4.PNG';
import AttackType5 from '../slides/AttackType/Slide5.PNG';
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
        </Slider>
        </div>
)