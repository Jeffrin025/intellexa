import { useParams } from "react-router-dom"
import BG from "../../component/bg/bg"
import { eventData } from "../../eventData"

const Event = () => {
  const { eventName } = useParams()
  const event = eventData[eventName]

  if (!event) {
    return (
      <div>
        <BG />
        <div className="flex items-center justify-center h-screen">
          <div className="p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bazingaItalic text-white">Event not found</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <BG />
      <div className="book-content p-6 sm:p-12 md:p-16 font-bazingaItalic min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg shadow-xl p-8">
          <h1 className="text-4xl md:text-5xl text-center font-bazingaItalic text-white mb-4">{event.title}</h1>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-8 font-bazingaItalic">{event.tagline}</p>

          <div className="mb-8 font-bazingaItalic">
            <h2 className="text-2xl text-white font-semibold mb-2 tracking-wider">Team Size</h2>
            <p className="text-lg text-gray-300">{event.team_size}</p>
          </div>

          <div>
            <h2 className="text-2xl text-white font-bazingaItalic mb-4">{event.rules.length > 0 && "Event Rules"}</h2>
            <ul className="list-disc list-inside space-y-2">
              {event.rules.map((rule, index) => (
                <li key={index} className="text-lg text-gray-300 font-bazingaItalic">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event

