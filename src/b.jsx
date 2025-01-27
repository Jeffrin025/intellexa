import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BG from './component/bg/bg';
import './b.css';
import exit from './assets/exit.png'

const B = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const handleCrossClick = () => {
    navigate("/#event"); 
  };

  return (
    <>
      <BG />
      <div className="b-content">
         <img
            src={exit}
             alt="exit"
               className="exit"
               onClick={handleCrossClick} 
                  />
        <h1>Event {id}</h1>
        <div className="outter">
          <div className="inner">
            <div className="navbar">EVENT ANNOUNCMENT</div>
            <div className="contents">
              <div className="left-pane">Left Pane</div>
              <div className="main-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
              
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               
               Here’s a sample of a Lorem Ipsum passage, commonly used as placeholder text in design and development:
               
               Lorem Ipsum Passage
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
               This passage is derived from a scrambled section of "De finibus bonorum et malorum" by Cicero, written in 45 BCE. Let me know if you’d like a custom variation!
               

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default B;
