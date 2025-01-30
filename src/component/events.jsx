import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { EventCard } from "./eventCard"
import card_abstract from "../assets/card_abstract.jpeg"
import card_abstract_two from "../assets/card_abstract_two.jpg"

export const Events = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const cardsContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6,
            },
        },
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 150,
            },
        },
    }

    const eventCards = [
        { img: card_abstract, title: "Event name", short_desc: "short description or some tagline" },
        { img: card_abstract_two, title: "Event name", short_desc: "short description or some tagline" },
        { img: card_abstract, title: "Event name", short_desc: "short description or some tagline" },
        { img: card_abstract_two, title: "Event name", short_desc: "short description or some tagline" },
    ]

    return (
        <div className="w-full text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60 font-bazingaItalic">
            <div className="text-white w-full text-center my-10 lg:text-[100px] md:text-[80px] text-[50px]">Events</div>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardsContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24"
            >
                {eventCards.map((card, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <EventCard img={card.img} title={card.title} short_desc={card.short_desc} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Events
