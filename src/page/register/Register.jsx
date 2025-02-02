import React from "react";
import { useNavigate } from "react-router-dom";
import BG from "@/component/bg/bg";
import { Navbar } from "@/component/navbar";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <BG />
      <div className="relative p-6 sm:p-12 md:p-16 font-bazingaItalic min-h-screen w-screen flex flex-col items-center justify-center pb-40 text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen mt-32 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6 sm:px-12 md:px-16 mt-[-64px]">
            <div className="flex flex-col items-center p-8 border border-white/20 rounded-xl backdrop-blur-sm hover:border-white/40 transition-all min-h-[250px] justify-between">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl mb-6">Register for Events</h1>
              </div>
              <a
                className="w-full rounded-lg border border-white/60 px-5 py-3 font-extralight 
                          hover:bg-white/10 transition-all duration-300 text-center"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVoCK3aKgqKMFzqbipV-vqT0NtWeJ5qgL_E9QNi6YEE2MNNw/viewform?usp=dialog"
              >
                Register Now
              </a>
            </div>

            {/* Workshops Card */}
            <div className="flex flex-col items-center p-8 border border-white/20 rounded-xl backdrop-blur-sm hover:border-white/40 transition-all min-h-[250px] justify-between">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl mb-6">Register for Workshops</h1>
                <span className="text-white/80">Only for REC students</span><br />
                <span className="text-white/80">Registration opens from Feb 9</span>
              </div>
              <a
                className="w-full rounded-lg border border-white/60 px-5 py-3 font-extralight 
                          hover:bg-white/10 transition-all duration-300 text-center"
                href="https://forms.gle/DYt8b6eNSpMrxeVq6"
              >
                Register Now
              </a>
            </div>

            <div className="flex flex-col items-center p-8 border border-white/20 rounded-xl backdrop-blur-sm hover:border-white/40 transition-all min-h-[250px] justify-between">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl mb-6">Register for Aadukalam</h1>
                <span className="text-white/80">Round 1</span>
              </div>
              <a
                className="w-full rounded-lg border border-white/60 px-5 py-3 font-extralight 
                          hover:bg-white/10 transition-all duration-300 text-center"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNNTlLXmC22xN2pw9NfpekbSi8Z4NF-siKnyaYxUkpTCb8dQ/viewform?usp=dialog"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};