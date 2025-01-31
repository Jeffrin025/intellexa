import React from "react"
import footer_abstract from "../assets/footer_abstract.jpg"

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
                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24" stroke="white">
                                        <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                                    </svg>
                                </span>
                                <a href="https://www.linkedin.com/company/intellexa-rec/" className="text-xl">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}