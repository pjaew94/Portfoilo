import React, { useEffect, useState } from 'react'

import jpLogo from "../../media/jpLogo.svg";

import './Hamburger.scss';

export const Hamburger = ({ setShowNavigator, navbarState }) => {

    const [scrollDir, setScrollDir] = useState('scrolling up');

    useEffect(() => {
       const threshold = 0;
       let lastScrollY = window.pageYOffset;
       let ticking = false;
       
       const updateScrollDir = () => {
           const scrollY = window.pageYOffset;

           if(Math.abs(scrollY - lastScrollY) < threshold) {
               ticking = false;
               return;
           }
           setScrollDir(scrollY > lastScrollY ? "scrolling down": "scrolling up");
           lastScrollY = scrollY > 0 ? scrollY : 0;
           ticking = false;
       };

       const onScroll = () => {
           if(!ticking) {
               window.requestAnimationFrame(updateScrollDir);
               ticking = true;
           }
       };

       window.addEventListener('scroll', onScroll);

       return () => window.removeEventListener('scroll', onScroll);

    }, [scrollDir])


    return (
        <div className={`hamburger-container ${scrollDir === 'scrolling up' && 'show-hamburger'}`}>
            <img src={jpLogo} alt="logo"/>

            <div onClick={() => setShowNavigator(true)} className={`hamburger`}>
                <span className='line-1' />
                <span className='line-2' />
            </div>
        </div>
    )
}


