import card_abstract from "../assets/card_abstract.jpeg"
import card_abstract_two from "../assets/card_abstract_two.jpg"
import card_abstract_three from "../assets/card_abstract_three.jpg"
import card_abstract_four from "../assets/card_abstract_four.jpg"
import card_abstract_five from "../assets/card_abstract_five.jpg"
import card_abstract_six from "../assets/card_abstract_six.jpg"
import card_abstract_seven from "../assets/card_abstract_seven.jpg"
import card_abstract_eight from "../assets/card_abstract_eight.jpg"
import poster1 from '../assets/poster/poster1.png'
import poster2 from '../assets/poster/poster2.png'
import poster3 from '../assets/poster/poster3.png'
import poster4 from '../assets/poster/poster4.png'
import poster5 from '../assets/poster/poster5.png'
import poster6 from '../assets/poster/poster6.png'
import poster7 from '../assets/poster/poster7.png'
import poster8 from '../assets/poster/poster8.png'
import poster10 from '../assets/poster/poster10.png'
export const eventCards = [
    { img: card_abstract, title: "CyberQuest", tagline: "Race Against Time, Conquer the Treasure!", team_size: "2 - 3", slug: "cyberquest", type: "event" },
    { img: card_abstract_two, title: "Aadukalam", tagline: "DSA Battlefield", team_size: 1, slug: "aadukalam", type: "event" },
    { img: card_abstract_three, title: "Database Design Duel", tagline: "Two Minds, One Database - Will Yours Lead the Way?", team_size: 2, slug: "database-duel-design", type: "event" },
    { img: card_abstract_four, title: "Flutter Frenzy", tagline: "Flutter Your Way to Innovation", team_size: 1, slug: "flutter-frenzy", type: "workshop" },
    { img: card_abstract_five, title: "Web Wizard Relay", tagline: "Code. Collaborate. Create.", team_size: 2, slug: "web-wizard-relay", type: "event" },
    { img: card_abstract_six, title: "Pixel Verse", tagline: "Frame the Moment, Capture the Future", team_size: 1, slug: "pixel-verse", type: "non-tech" },
    { img: card_abstract_seven, title: "Chamber of Secrets", tagline: "Time's Not Your Friend—But Your Mind Might Be!", team_size: 2, slug: "chamber-of-secrets", type: "non-tech" },
    { img: card_abstract_eight, title: "Pitch perfect", tagline: "Express Ideas, Inspire Minds", team_size: "3 - 5", slug: "pitch-perfect", type: "event" },
    { img: card_abstract, title: "Beyond the Screen: 3D Web Design Mastery", tagline: "From Concept to Creation: Shaping Brands of Tomorrow.", team_size: 1, slug: "beyond-the-screen", type: "workshop" },
]

export const eventData = {
    'cyberquest': {
        img: 'card_abstract',
        title: 'CyberQuest',
        tagline: "Race Against Time, Conquer the Treasure!",
        poster: poster8,
        team_size: "2 - 3",
        contact: "Madhan",
        num: '9655221183',
        description: 'In this exciting treasure hunt, 30 teams race to solve clues, follow hidden paths, and find the final treasure. Teams log into a website, enter clues, and move to the next step. With only a few hints available, quick thinking and smart choices are important. The team that solves the most clues with the fewest hints wins. Get ready for a fun and challenging adventure!',
        rules: [
            'Each team must log in to the treasure hunt website using their team name and login.',
            'Teams will enter a clue, move to the next location, and continue solving until they reach the final treasure.',
            'Teams are given 3 hints to use if they cannot solve a clue.',
            'Teams must complete the treasure hunt in the given time.',
            'The team that solves the most clues with the fewest hints wins.',
            'Teams will be judged based on how many clues they solve and the number of hints used.',
        ],
        venue: '-',
        timing: '11:45 AM - 2:00 PM',
        type: "event",
        slot: 2,
        gform: "gform link here for slot 2"
    },
    'aadukalam': {
        img: 'card_abstract_two',
        title: 'Aadukalam',
        tagline: "DSA Battlefield",
        poster: poster10,
        team_size: '1',
        contact: "SaiVishwa",
        num: '7200231133',
        description: 'the short description is long enough ig',
        rules: [
            'The contest is open to students from all years and departments of the college. Registration is mandatory for participation.',
            'Round 1 (Online):',
            '  Entry is free of charge.',
            '  Participants will have 2 hours to answer 5 questions.',
            '  The contest will be held on the HackerRank platform.',
            '  The top 50 participants from Round 1 will qualify for Round 2.',
            'Round 2 (Offline):',
            '  A 100 INR entry fee is required to participate in Round 2.',
        ],
        venue: 'KS03',
        timing: '9:00 AM - 11:15 AM',
        type: "event",
        slot: 1,
        gform: "separate gform link here for slot aadukalam"
    },
    'database-duel-design': {
        img: 'card_abstract',
        title: 'Database Design Duel',
        tagline: "Two Minds, One Database - Will Yours Lead the Way?",
        team_size: 2,
        poster: poster3,
        contact: "Jagadeshwaran R P",
        num: '8825704232',
        description: 'Join the ultimate 2-hour challenge where teams race against the clock to design the most efficient, scalable, and innovative database schema. With a real-world problem to solve, this event tests your creativity, technical skills, and ability to think on your feet. Collaborate, compete, and see who will be crowned the ultimate DB architect!',
        rules: [
            'Teams of two participants are required for the event.',
            'The event will begin with an MCQ quiz to refresh participants\' knowledge of database concepts.',
            'The problem statement will be assigned through a coin toss, with two options available.',
            'Participants will have 2 hours to design the database schema.',
            'A laptop is required for the event, and Draw.io (an online tool) will be used for designing the schema.',
            'Evaluation will be based on the efficiency, scalability, and creativity of the database design.',
        ],
        venue: 'TLGL 1',
        timing: '9:00 AM - 11:15 AM',
        type: "event",
        slot: 1,
        gform: "gform link here for slot 1"
    },
    'flutter-frenzy': {
        img: 'card_abstract_two',
        title: 'Flutter Frenzy',
        tagline: "Flutter Your Way to Innovation",
        team_size: 1,
        poster: poster6,
        contact: "Daksh",
        num: '6379781318',
        description: 'A workshop covering Flutter fundamentals and building basic apps.',
        rules: [
            'Participants must bring their own laptop to the event.',
            'Participants must complete all necessary installations prior to the event.',
        ],
        venue: 'A105',
        timing: '9:00 AM - 2:00 PM',
        type: "workshop",
        slot: -1,
        gform: "gform link here for workshop"
    },
    'web-wizard-relay': {
        img: 'card_abstract_two',
        title: 'Web Wizard Relay',
        tagline: "Code. Collaborate. Create.",
        team_size: 2,
        poster: poster5,
        contact: "Jeffrin",
        num: '6383381719',
        description: 'The web relay is a dynamic 3-hour coding event where teams of two collaboratively build a website based on a given theme. Each team member alternates coding every 30 minutes, with only 10 minutes allowed for initial discussion. Communication during the competition is strictly through code comments',
        rules: [
            'Teams must consist of 2 members.',
            'The event duration is 2 hours, with 10 minutes allocated for discussion.',
            'Participants will swap coding roles every 30 minutes.',
            'Communication is allowed only through code comments.',
            'The theme will be provided on the event day.',
            'AI tools, such as ChatGPT, can be used during the event.',
            'An bonus quiz will be included to boost final scores.',
            'The event will be judged based on creativity, functionality, and adherence to the theme.',
        ],
        venue: 'KS03',
        timing: '11:45 AM - 2:00 PM',
        type: "event",
        slot: 2,
        gform: "gform link here for slot 2"
    },
    'pixel-verse': {
        img: 'card_abstract_two',
        title: 'Pixel Verse',
        tagline: 'Frame the Moment, Capture the Future',
        team_size: 1,
        poster: poster7,
        contact: "Krithika",
        num: '6369795633',
        description: `This workshop covers essential techniques, from mastering ISO, aperture, and shutter speed to capturing perfect candid and posed shots. Participants will engage in live practice sessions, interactive quizzes, and receive real-time feedback. Whether you’re a beginner or an enthusiast, this event offers expert insights, practical learning, and networking opportunities. Plus, stand a chance to win exciting prizes and get a participation certificate!`,
        rules: [
            'Participants must bring their own cameras or smartphones for hands-on practice.',
            'Respect the time limits for each activity to ensure the smooth flow of the session.',
            'Engage actively in discussions, Q&A, and practical tasks throughout the workshop.',
            'Follow the workshop guidelines and respect fellow participants and mentors.',
        ],
        venue: '-',
        timing: '9:00 AM - 2:00 PM',
        slot: -1,
        gform: "gform link here for workshop"
    },
    'chamber-of-secrets': {
        img: 'card_abstract_two',
        title: 'Chamber of Secrets',
        poster: poster2,
        tagline: "Time's Not Your Friend—But Your Mind Might Be!",
        team_size: 2,
        contact: "Prinkayatthra D",
        num: '7010365176',
        description: 'Participants will navigate a series of puzzles and challenges to "escape" from a simulated scenario. Each stage will test their reading, writing, listening, and speaking, immersing them in a thrilling race against time.',
        rules: [
            'Teams must consist of 2 participants.',
            'The event is time-bound: Teams have 90 minutes to complete all challenges.',
            'Teams must solve challenges in sequence; skipping any stage is not allowed.',
            'Each team can request only one clue, which will incur a 5-minute time penalty.',
        ],
        venue: '-',
        timing: '9:00 AM - 11:15 AM',
        type: "non-tech",
        slot: 1,
        gform: "gform link here for slot 1"
    },
    'pitch-perfect': {
        img: 'card_abstract_two',
        title: 'Pitch perfect',
        tagline: "Express Ideas, Inspire Minds",
        poster: poster4,
        team_size: '3 - 5',
        contact: "Avinash",
        num: '9080538459',
        description: 'Teams of 3 to 5 members will present their research or ideas using a PPT presentation, The event focuses on innovation, presentation skills, and teamwork, with judges evaluating content clarity and impact.',
        rules: [
            'Each team must have 3 to 5 members.',
            'Each team will have a maximum of 10 minutes for the presentation.',
            'An alarm will be given at 8 minutes as a reminder to wrap up.',
            'Presentations must be in PPT format and must be original.',
            'All team members must actively participate in the presentation.',
            'The content must be original and plagiarism-free.',
            'The use of offensive or inappropriate content is strictly prohibited.',
            'The judge\'s decisions will be final and binding.',
        ],
        theme: [
            'Good Health and Well - being - Innovate solutions to enhance healthcare accessibility, efficiency, and patient outcomes.',
            'Quality Education - Develop technologies to improve learning experiences, accessibility, and education equity.',
            'Industry, Innovation, and Infrastructure - Build smart, sustainable, and resilient industrial and infrastructure solutions.',
            'Climate Action - Create tech - driven solutions to combat climate change and promote sustainability.',
            'Affordable and Clean Energy - Innovate for sustainable, accessible, and efficient energy solutions.',
            'Artificial Intelligence - Leverage AI to solve real- world challenges across various domains.',
            'Open Track - Explore and innovate in any impactful area beyond the defined themes.',
        ],
        venue: '-',
        timing: '9:00 AM -1:30 PM',
        type: "ideathon",
        slot: -1,
        gform: "gform link here for workshop"
    },
    'beyond-the-screen': {
        img: 'card_abstract_two',
        title: 'Beyond the Screen: 3D Web Design Mastery',
        tagline: "From Concept to Creation: Shaping Brands of Tomorrow.",
        poster: poster1,
        team_size: 1,
        contact: "Maria Darsha",
        num: '7604899016',
        description: 'Pathway to ideate the marketing path for a product and brand marketing strategies along with entrepreneurship tips and Having an activity which will give the students the creative freedom to create their own logo for the brand or product they are given',
        rules: [
            'Participants must bring their own laptop to the event.',
            'Each team must consist of 3 participants.',
            'The event involves three elements: Eyes, Mouth, and Work. Participants will draw a chit to determine which product they will design a logo for.',
            'One participant will have their eyes blindfolded.',
            'A second participant will have their mouth closed.',
            'The third participant will be responsible for creating the logo.',
            'Roles will rotate in the following order: Eyes → Logo → Mouth.',
            'Each participant will take turns in the designated order for their tasks.',
            'During the event, distractions or hurdles will be introduced at intervals, which the team must overcome while completing their tasks.'
        
        ],
        venue: 'KS01',
        timing: '9:00 AM - 2:00 PM',
        type: "non-tech",
        slot: -1,
        gform: "gform link for workshop"
    },
};
