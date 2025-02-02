import React from "react"
import footer_abstract from "../assets/footer_abstract.jpg"
import ieee_cs from "../assets/ieee_cs.png"
import jeffrin from "../assets/1.png"
import sai from "../assets/5.png"
import prasanth from "../assets/7.png"

export const Footer = () => {
    return (
        <footer id="contact" className="w-full px-4 sm:px-8 md:px-16">
            <div className="relative font-bazingaItalic text-white">
                <div className="absolute -inset-1 border border-white/20 rounded-[52px]"></div>
                <div
                    className="relative bg-center bg-cover h-[300px] my-10 rounded-[50px] overflow-hidden"
                    style={{ backgroundImage: `url(${footer_abstract})` }}
                >
                    <div className="absolute inset-0 bg-black/80 rounded-[50px]"></div>
                    <div className="pl-10 w-full pt-6 text-white flex flex-col gap-2 absolute">
                        <div>Our Sponsor</div>
                        <div className=" rounded-lg p-2 w-40 bg-white">
                            <img
                                src={ieee_cs}
                                alt="ieee_cs_logo"
                                className=" w-32 scale- object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-xl mb-2">Contact Us</p>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="white" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <a href="mailto:intellexa@rajalakshmi.edu.in" className="hover:underline">
                                    intellexa@rajalakshmi.edu.in
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-8 h-[30%] overflow-hidden">
                        <div
                            className="md:text-[100px] text-[60px] leading-none tracking-wide whitespace-nowrap "
                        // style={{ transform: "translateY(10%)" }}
                        >
                            Intellexa
                        </div>
                    </div>
                    <div className="absolute top-1 right-8 flex flex-col space-x-2 ">
                        <div className="flex flex-col items-start justify-start space-y-3 ">
                            <p className="text-xl">Social</p>
                            <div className="flex justify-center items-center space-x-1 cursor-pointer hover:underline hover:underline-offset-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" stroke="white" fill="white">
                                        <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 33 C 4 39.063407 8.9365932 44 15 44 L 33 44 C 39.063407 44 44 39.063407 44 33 L 44 15 C 44 8.9365932 39.063407 4 33 4 L 15 4 z M 15 6 L 33 6 C 37.982593 6 42 10.017407 42 15 L 42 33 C 42 37.982593 37.982593 42 33 42 L 15 42 C 10.017407 42 6 37.982593 6 33 L 6 15 C 6 10.017407 10.017407 6 15 6 z M 35 11 C 33.895 11 33 11.895 33 13 C 33 14.105 33.895 15 35 15 C 36.105 15 37 14.105 37 13 C 37 11.895 36.105 11 35 11 z M 24 14 C 18.488666 14 14 18.488666 14 24 C 14 29.511334 18.488666 34 24 34 C 29.511334 34 34 29.511334 34 24 C 34 18.488666 29.511334 14 24 14 z M 24 16 C 28.430666 16 32 19.569334 32 24 C 32 28.430666 28.430666 32 24 32 C 19.569334 32 16 28.430666 16 24 C 16 19.569334 19.569334 16 24 16 z"></path>
                                    </svg>
                                </span>
                                <a href="https://www.instagram.com/intellexa.rec/#" className="text-xl">Instagram</a>
                            </div>
                            <div className="flex justify-center items-center space-x-1 cursor-pointer hover:underline hover:underline-offset-4">
                                <span>
                                    <svg fill="#ffffff" width="25" height="17" className="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> </g> </g></svg>
                                </span>
                                <a href="https://www.linkedin.com/company/intellexa-rec/" className="text-xl">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t py-5 border-white/20 text-white md:flex items-center justify-center font-satoshi flex-col text-center space-y-2">
                <div>
                    Design and Developed by
                </div>
                <div className="flex justify-center items-center">
                    <span className="px-1">
                        <img src={jeffrin} alt="jeffrin" width={20} height={17} />
                    </span>
                    <a href="https://www.linkedin.com/in/jeffrin-p-06064a253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="font-semibold">Jeffrin, </a>
                    <span className="px-1">
                        <img src={sai} alt="sai" width={20} height={25} />
                    </span>
                    <a href="https://www.linkedin.com/in/saivishwaram-ramkumar-a74123260/" className="font-semibold"> Saivishwa and</a>
                    <span className="px-1">
                        <img src={prasanth} alt="prasanth" width={20} height={17} />
                    </span>
                    <a href="https://github.com/Prasanth-S7/" className="font-semibold"> Prasanth</a>
                </div>
            </div>
        </footer>
    )
}