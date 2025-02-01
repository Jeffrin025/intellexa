import { useParams, useNavigate } from "react-router-dom";
import BG from "../../component/bg/bg";
import { eventData } from "@/lib/data";
import { Navbar } from '../../component/navbar';
import footer_abstract from '../../assets/footer_abstract.jpg';
import poster1 from '../../assets/poster1.jpg';

const Event = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();
  const event = eventData[eventName];

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
    );
  }

  const handleExit = () => {
    navigate("/#events");
  };

  return (
    <>
      <BG />
      <div className="book-content relative p-6 sm:p-12 md:p-16 font-bazingaItalic min-h-screen flex flex-col items-center justify-start pb-40">
        <Navbar />

        <div className="w-[87%] border-t-2 border-white mt-32 mb-0"></div>

        <button
          onClick={handleExit}
          className="absolute bg-transparent text-white tracking-wider font-bazingaItalic font-bold py-4 px-6 text-xl border-2 hover:border-red-500 rounded-xl transition-all"
        >
          Exit
        </button>

        <div
          className="w-full max-w-4xl relative bg-cover bg-center rounded-xl border-2 border-white p-8 mt-20 flex flex-col md:flex-row items-center md:items-start"
          style={{ backgroundImage: `url(${footer_abstract})` }}
        >
          <div className="absolute inset-0 bg-black/80 rounded-lg"></div>

          <div className="w-full md:w-1/3 flex justify-center relative z-10">
            <img src={poster1} alt="Event Poster" className="w-25 h-25 rounded-lg shadow-lg object-cover" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:ml-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bazingaItalic text-white">{event.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 mt-2 border-b-2 border-gray-500 pb-2">{event.tagline}</p>



            <div className="mt-6 text-justify">
              <h2 className="text-2xl text-white font-semibold tracking-wider">Team Size ({event.team_size})</h2>
              <h2 className="text-2xl text-white font-semibold tracking-wider">{event.timing}</h2>
              <h2 className="text-2xl text-white font-semibold tracking-wider">{event.venue}</h2>
              <h2 className="text-lg md:text-xl text-gray-300 mt-2 ">Event Head : {event.contact}</h2>
              <h2 className="text-lg md:text-xl text-gray-300 mt-2 ">Contact : {event.num}</h2>
              <div className="flex justify-center space-x-2 mt-4">
                {
                  event?.theme?.length > 0 ? (
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/PitchPerfect.pptx";
                        link.download = "PitchPerfect.pptx";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="text-lg md:text-xl font-bazingaItalic text-white border-2 border-white py-2 px-6 rounded-lg hover:border-red-500 transition-all"
                    >
                      PPT FORMAT
                    </button>

                  ) : (
                    null
                  )
                }
                <button
                  onClick={() => console.log('Register')}
                  className="text-lg md:text-xl font-bazingaItalic text-white border-2 border-white py-2 px-6 rounded-lg hover:border-red-500 transition-all"
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl border border-white rounded-lg p-6 mt-8 bg-black bg-opacity-50">
          <h2 className="text-2xl text-white font-bazingaItalic mb-4">{event?.rules?.length > 0 && "Event Details"}</h2>
          <ul className="list-disc list-inside space-y-2">
            {event.rules.map((rule, index) => (
              <li key={index} className="text-lg text-gray-300 text-justify">{rule}</li>
            ))}
          </ul>
          {event?.theme?.length > 0 ? (
            <>
              <h2 className="text-2xl text-white font-bazingaItalic mb-4 mt-8">Themes</h2>
              <ul className="list-disc list-inside space-y-2">
                {event.theme.map((theme, index) => (
                  <li key={index} className="text-lg text-gray-300 text-justify">{theme}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Event;
