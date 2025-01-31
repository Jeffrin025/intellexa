"use client"

import { useState } from "react"
import { MoveUpRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { API_URL } from "@/lib/config"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="flex justify-between items-center w-full overflow-x-hidden py-10 lg:px-16 px-10 font-bazingaItalic absolute top-0 left-0 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-white">Logo</div>
        <div className="flex space-x-2 items-center">
          <button
            className="rounded-lg text-white border px-5 py-3 font-extralight flex space-x-3 items-center group"
            onClick={() => window.location.href = `${API_URL}/auth/google/`}
          >
            Sign in
          </button>
          <button
            className="rounded-lg text-white border px-5 py-3 font-extralight flex space-x-3 items-center group"
            onClick={toggleMenu}
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            <span className={`transition-transform duration-200 ${isMenuOpen ? "rotate-45" : "group-hover:rotate-45"}`}>
              {isMenuOpen ? <X size={20} color="white" /> : <MoveUpRight size={20} color="white" />}
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>{isMenuOpen && <FullScreenMenu setIsMenuOpen = {setIsMenuOpen} />}</AnimatePresence>
    </>
  )
}

function FullScreenMenu({ setIsMenuOpen }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <nav className="text-4xl space-y-8 font-bazingaItalic text-center">
        <motion.a
          href="#home"
          className="block hover:text-gray-300 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          className="block hover:text-gray-300 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </motion.a>
        <motion.a
          href="#events"
          className="block hover:text-gray-300 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => setIsMenuOpen(false)}
        >
          Events
        </motion.a>
        <motion.a
          href="#contact"
          className="block hover:text-gray-300 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </motion.a>
      </nav>
    </motion.div>
  )
}

