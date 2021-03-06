import React from "react";
import "assets/js/script.js";
//import image1 from "./assets/images/logo.png"



const Banner = () => (
    <section class="relative bg-indigo-lightest-10">
        <div id="slider-1">
            <div class="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 class="white fs-l3 fw-900">Lorem ipsum dolor sit amet, consectetur</h2>
                <p class="indigo-lightest fw-600 fs-m1 opacity-30 my-5">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor </p>
                <a href="#" class="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">BUY NOW</a>
            </div>
            <div class="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 class="white fs-l3 fw-900">Lorem ipsum dolor sit amet, consectetur</h2>
                <p class="indigo-lightest fw-600 fs-m1 opacity-30 my-5">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor </p>
                <a href="#" class="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">BUY NOW</a>
            </div>
            <div class="p-10 md-p-l10 flex justify-center items-center flex-column text-center">
                <h2 class="white fs-l3 fw-900">Lorem ipsum dolor sit amet, consectetur</h2>
                <p class="indigo-lightest fw-600 fs-m1 opacity-30 my-5">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor </p>
                <a href="#" class="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">BUY NOW</a>
            </div>
        </div>
        <ul class="absolute list-none w-100pc flex justify-between top-50pc">
            <li><button
                    class="prev ml-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2 focus-indigo-lighter outline-none"><i
                        data-feather="chevron-left"></i></button></li>
            <li><button
                    class="next mr-10 br-round border-indigo-lightest indigo-lightest  bg-transparent flex justify-center items-center p-2  focus-indigo-lighter outline-none"><i
                        data-feather="chevron-right"></i></button></li>
        </ul>
    </section>
);

export default Banner;


    