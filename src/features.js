import React from "react";
import "assets/js/script.js";
//import image1 from "./assets/images/logo.png"



const Features = () => (
    <section id="features" class="p-10 md-p-l5">
        <div class="flex flex-column md-flex-row mx-auto">
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="inbox" class="w-l5"></i></div>
                    <h4 class="white fw-600 fs-m3 mb-5">Storage</h4>
                    <div class="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <a href="#"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
                </div>
            </div>
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="cpu" class="w-l5"></i></div>
                    <h4 class="white fw-600 fs-m3 mb-5">Compute</h4>
                    <div class="indigo-lightest fw-600 fs-m1 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <a href="#"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
                </div>
            </div>
            <div class="w-100pc md-w-40pc">
                <div class="br-8 p-5 m-5">
                    <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5"><i
                            data-feather="database" class="w-l5"></i></div>
                    <h4 class="white fw-600 fs-m3 mb-5">Database</h4>
                    <div class="indigo-lightest fw-600 fs-m1 opacity-50">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <a href="#"
                        class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">Read</a>
                </div>
            </div>
        </div>
    </section>
);

export default Features;


    