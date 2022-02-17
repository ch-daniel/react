import React from "react";
import "assets/js/script.js";

//import components
import Nav from './Nav';
import Home from './Home';
import Features from './Features';
import Banner from './Banner';
import Bold from './Bold';
import Flex from './Flex';
import Pricing from './Pricing';
import Swipe from './Swipe';
import Photo from './Photo';


const App = () => (
    <div>
        <Nav />
        <Home />
        <Features />
        <Banner />
        <Bold />
        <Flex />
        <Pricing />
        <Swipe />
        
    </div>
);

export default App;