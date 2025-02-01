import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { EventCard } from "./eventCard"
import { eventCards } from "@/lib/data"

export const Events = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = (index) => ({
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
        damping: 12,
        stiffness: 100,
        delay: index * 0.4, // Add delay based on index
      },
    },
  })

  return (
    <div
      id="events"
      className="w-full text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60 font-bazingaItalic"
    >
      <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={cardsContainer}>
        <motion.h2
          variants={cardVariants(0)}
          className="text-white w-full text-center my-10 lg:text-[100px] md:text-[80px] text-[50px]"
        >
        Tech Events
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {eventCards
            .filter((card) => card.type === "event")
            .map((card, index) => (
              <motion.div key={card.slug} variants={cardVariants(index + 1)}>
                <EventCard
                  img={card.img}
                  title={card.title}
                  tagLine={card.tagline}
                  team_size={card.team_size}
                  slug={card.slug}
                />
              </motion.div>
            ))}
        </div>
        <motion.h2
          variants={cardVariants(eventCards.filter((card) => card.type === "event").length + 1)}
          className="text-white w-full text-center my-5 lg:text-[100px] md:text-[80px] text-[50px]"
        >
          Non-Tech Events
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {eventCards
            .filter((card) => card.type === "non-tech")
            .map((card, index) => (
              <motion.div
                key={card.slug}
                variants={cardVariants(eventCards.filter((card) => card.type === "non-tech").length + index + 3)}
              >
                <EventCard
                  img={card.img}
                  title={card.title}
                  tagLine={card.tagline}
                  team_size={card.team_size}
                  slug={card.slug}
                />
              </motion.div>
            ))}
        </div>
        <motion.h2
          variants={cardVariants(eventCards.filter((card) => card.type === "event").length + 1)}
          className="text-white w-full text-center my-5 lg:text-[100px] md:text-[80px] text-[50px]"
        >
          Workshop
        </motion.h2>
        <motion.h3
          variants={cardVariants(eventCards.filter((card) => card.type === "event").length + 2)}
          className="text-white w-full text-center my-10 lg:text-[40px] md:text-[28px] text-[20px]"
        >
          Only for REC Students
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {eventCards
            .filter((card) => card.type === "workshop")
            .map((card, index) => (
              <motion.div
                key={card.slug}
                variants={cardVariants(eventCards.filter((card) => card.type === "event").length + index + 3)}
              >
                <EventCard
                  img={card.img}
                  title={card.title}
                  tagLine={card.tagline}
                  team_size={card.team_size}
                  slug={card.slug}
                />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Events

