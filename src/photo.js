import React from "react";
import "assets/js/script.js";
//import image2 from "./assets/images/nicholas-kwok-VBWWscZtszY-unsplash.jpg"



const Photo = () => (
    <section class="p-10 md-p-l10">
        <div class="md-w-75pc">
            <h2 class="white fs-l3 fw-900 lh-1">Lorem ipsum dolor sit amet, consectetur</h2>
            <p class="indigo-lightest fw-600 fs-m1 opacity-50 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor </p>
        </div>
        <div class="relative w-100pc h-75vh bg-cover bg-b"
            style="background-image: url(assets/images/nicholas-kwok-VBWWscZtszY-unsplash.jpg);">
            <a href="#"
                class="bg-white black px-5 py-3 absolute right-0 bottom-0 hover-bg-black hover-white ease-500 flex justify-center items-center after-arrow-right no-underline fs-m1"></a>
        </div>

    </section>
);

export default Photo;