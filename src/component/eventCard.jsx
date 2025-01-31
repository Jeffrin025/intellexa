import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const EventCard = ({ img, title, tagLine, team_size, slug }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            className="max-w-[500px] w-full aspect-[4/5] rounded-2xl relative bg-cover bg-center cursor-pointer z-50"
            style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-black/80 rounded-2xl" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">{title}</h2>
                <p className="text-xs md:text-sm mt-4 text-white tracking-wider">
                    {tagLine}
                </p>
            </div>

            <motion.div
                animate={{
                    y: isHovered ? 0 : 20,
                    opacity: isHovered ? 1 : 0
                }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-4"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="text-white text-sm md:text-base">
                        Team size: {team_size}
                    </div>
                    <div className="flex space-x-2">
                        <Link to={`/event/${slug}`} className="border px-4 py-2 rounded-2xl border-white/15 hover:bg-white hover:text-black text-white transition-colors text-xs md:text-sm">
                            More info
                        </Link>
                        <button className="border px-4 py-2 rounded-2xl border-white/15 hover:bg-white hover:text-black text-white transition-colors text-xs md:text-sm"
                        onClick={() => navigate(`/register/${slug}`)}>
                            Register
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
