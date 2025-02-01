import React, { useState } from "react";
import BG from "@/component/bg/bg";
import { eventData } from "@/lib/data";

export const Register = () => {
  const [selectedEvents, setSelectedEvents] = useState({});
  const [showGform, setShowGform] = useState(false);

  const events = Object.entries(eventData).filter(([_, event]) => event.type === "event");
  const workshops = Object.entries(eventData).filter(([_, event]) => event.type === "workshop");
  const ideathons = Object.entries(eventData).filter(([_, event]) => event.type === "ideathon");

  const isSlotSelected = (slot) => {
    return Object.entries(selectedEvents).some(([key, isSelected]) => {
      return isSelected && eventData[key].slot === slot;
    });
  };

  const handleEventSelection = (eventKey) => {
    setSelectedEvents(prev => ({
      ...prev,
      [eventKey]: !prev[eventKey]
    }));
  };

  const renderEventSection = (title, eventsList) => (
    <div className="mb-8 w-screen mx-auto overflow-x-hidden">
      <h2 className="text-3xl tracking-wide mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsList.map(([key, event]) => {
          const isDisabled = event.slot !== -1 && isSlotSelected(event.slot) && !selectedEvents[key];
          
          return (
            <div key={key} className={`p-4 border rounded-lg w-[400px] ${isDisabled ? 'opacity-50' : ''}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl">{event.title}</h3>
                <input
                  type="checkbox"
                  checked={selectedEvents[key] || false}
                  onChange={() => handleEventSelection(key)}
                  disabled={isDisabled}
                  className="w-5 h-5"
                />
              </div>
              <p className="text-sm mt-2">Slot: {event.slot === -1 ? 'Any' : event.slot}</p>
              <p className="text-sm">Team Size: {event.team_size}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const hasSelectedWorkshops = Object.entries(selectedEvents).some(
    ([key, isSelected]) => isSelected && eventData[key].type === "workshop"
  );

  const hasSelectedEvents = Object.entries(selectedEvents).some(
    ([key, isSelected]) => isSelected && eventData[key].type === "event"
  );

  const hasSelectedAadukalam = selectedEvents['aadukalam'];

  if (showGform) {
    return (
      <div className="w-full min-h-screen px-4 py-10 font-bazingaItalic text-white">
        <BG />
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-4">Registration Links</h2>
          
          {hasSelectedAadukalam && (
            <div className="mb-4">
              <h3 className="text-xl mb-2">Aadukalam Registration</h3>
              <a href={eventData['aadukalam'].gform} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-300">
                Register for Aadukalam
              </a>
            </div>
          )}

          {hasSelectedEvents && !hasSelectedAadukalam && (
            <div className="mb-4">
              <h3 className="text-xl mb-2">Events Registration</h3>
              <a href={eventData['cyberquest'].gform} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-300">
                Register for Events
              </a>
            </div>
          )}

          {hasSelectedWorkshops && (
            <div className="mb-4">
              <h3 className="text-xl mb-2">Workshops Registration</h3>
              <a href={eventData['flutter-frenzy'].gform} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-300">
                Register for Workshops
              </a>
            </div>
          )}

          <button
            onClick={() => setShowGform(false)}
            className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen py-10 font-bazingaItalic text-white">
      <BG />
      <div className="w-full mx-auto">
        <div className="text-4xl text-center mb-4">Register</div>
        <div className="text-center mb-8">
          Select the events that you want to participate
        </div>
        
        {renderEventSection("Events", events)}
        {renderEventSection("Workshops", workshops)}
        {renderEventSection("Ideathon", ideathons)}

        <button
          onClick={() => setShowGform(true)}
          className="w-full max-w-xs mx-auto block px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 mt-8"
          disabled={!Object.values(selectedEvents).some(Boolean)}
        >
          Continue to Registration
        </button>
      </div>
    </div>
  );
};