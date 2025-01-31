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
        { img: card_abstract, title: "CyberQuest", tagline: "Race Against Time, Conquer the Treasure!", team_size:3, slug:"cyberquest"},
        { img: card_abstract_two, title: "Aadukalam", tagline: "DSA Battlefield", team_size: "2 - 3", slug:"aadukalam"},
        { img: card_abstract, title: "Database Design Duel", tagline: "Two Minds, One Database - Will Yours Lead the Way?", team_size:2, slug: "database-duel-design" },
        { img: card_abstract_two, title: "Flutter Frenzy", tagline: "Flutter Your Way to Innovation", team_size: 1, slug: "flutter-frenzy"},
        { img: card_abstract_two, title: "Web Wizard Relay", tagline: "Code. Collaborate. Create.", team_size: 1, slug: "web-wizard-relay" },
        { img: card_abstract_two, title: "Pixel Verse", tagline: "Please provide tagline", team_size: 1, slug:"pixel-verse"},
        { img: card_abstract_two, title: "Chamber of Secrets", tagline: "Time's Not Your Friend—But Your Mind Might Be!", team_size: 2, slug:"chamber-of-secrets" },
        { img: card_abstract_two, title: "Pitch perfect", tagline: "Express Ideas, Inspire Minds", team_size: "3 - 5", slug: "pitch-perfect"},
        { img: card_abstract_two, title: "Beyond the Screen: 3D Web Design Mastery", tagline: "From Concept to Creation: Shaping Brands of Tomorrow.", team_size: 1, slug:"beyond-the-screen" },
    ]

    return (
        <div id="events" className="w-full text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60 font-bazingaItalic">
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
                        <EventCard img={card.img} title={card.title} tagLine={card.tagline} team_size = {card.team_size} slug={card.slug} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Events
