import { GiAchievement } from 'react-icons/gi'
import report from '../../pdf/Complexity_of_Active_Directory_Attack_Graphs.pdf'
import "./reUsable.scss";

export const achivements = [
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    }
]

export const portfolio = [
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    },
    {
        title: 'Handball Nationals',
        about: 'Represented Banglore region in handball',
        link: 'https://arpit-gole.github.io/',
        type: <GiAchievement />
    }
]

var a = "https://arpit-gole.github.io/portfolio/"

/*
Activities to be listed as a part of Qualifications in a form of Pop-up 
TODO: Make the link colour match with the site colour.

Usage to make the inline text.
'<a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer" style={{color: "green"}}>sdfgds</a> is my love',
`<a href=${pdf} target="_blank" rel="noreferrer">ddd</a> is my love`  
*/
export const qualifications = [
    {
        MASTERS: ['I took part in many University run career/personality development programs like Global IQ Connect, '+
        'Talking to Aussie and many more.',
        
        'I got elected as the postgraduate representative for my faculty, i.e. ECMS.',

        'I was a member of the ECMS faculty board meeting to oversee the governance of the University in the '+
        'unprecedented pandemic times from 2021-2022.',

        "I'm a part of the Student Engagement Committee to bring a personal perspective and raise concerns "+
        "faced by the postgrad student cohort with an endeavour to find a solution."
                ],

        BE: ['Graduated summa cum laude with minor in Computer Graphics and Visualization.',
            "Organised annual college fest - 'Saptrang'.",
            "Participated and won in various technical hackathons."
            ],

        HSC: ["Completed NCC 'C' Certificate with 'A' grade.",
            'Leaded Bengaluru region team at 43rd National handball meet.',
            'Participated in various maths and science olympiads.'
            ],

        SSC: ['Participated in various science olympiads.',
            'Represented school at various sports meets.'            
            ],

        MTS: ['Performing SQL DB operations (CRUD, Stored Procedure & Triggers).',
            'Deploying & Integrating APIs (GraphQL and REST API).',
            'Analyzing, discussing upcoming features & working in tandem with clients for on-time delivery.',
            ],

        SDE1: ['Built an Alexa skill for the Human resources department, ' +
        'streamlined various processes. Coded several machine learning algorithms ' +
        'for natural language processing (NLP) and examined them to have a 95% accuracy rate.',

        'Developed an understanding of machine learning techniques and algorithms. Algorithms '+
        '– Regressions, k-NN, Decision Trees, Random Forest, Support Vector Machines (SVM), '+
        'K-Means clustering, Deep Learning and Neural Networks.',

        'Designed and programmed for scalability, performance and reliability with cloud-based '+
        'solutions, especially Amazon Web Services (AWS) S3, Lambda, SNS, SES, EC2, DynamoDB '+
        'and packages NLTK, Scikit-learn and TensorFlow.',

        'Performed various Machine Learning process phases i.e Machine Learning Problem '+
        'Framing, EDA (Exploratory Data Analysis) and Integration, Feature Engineering, '+
        'Model Training, Model Evaluation, and Production Deployment.',
            ],

        SDE2: ['Engineered and spearheaded a multi-tenant cloud-based SaaS application '+
        'designed to automate back-end processes. Attained targeted advertising '+
        '(recommender systems) and maximized supplementary income - secured a 40% increase in revenue.',

        ' Wrote 10+ modules, including critical payment gateways and optimised the '+
        'order processing workflow throughout the ecosystem.',

        'Mentored juniors to build robust applications, set higher goals, '+
        'communicate constructive feedback at regular intervals. ',

        'Gathered business and functional requirements from external and/or internal customers, '+
        'and translate requirements into technical specifications to build robust, scalable, '+
        'supportable solutions that work well between a range of complex systems i.e. LOGI, Console, etc.',
            ],

        SRE1: ['I assisted Professor Andrey Kan in developing a recommender system using '+
        'Knowledge Graph (KG), particularly developing a method to use all available '+
        'information (user-item interaction, User and item attributes and KG), dealing with the cold start problem.',

        'Constructed a recommender system with query-based capabilities having linear time and space complexity.'
            ],

        SRE2: ["Completed research under Professor Hung Nguyen by analysing the complexity of the Active Directory (AD) "+
        "graph as it evolves over time. As the complexity stacks up the task of sniffing attack paths become challenging."+
        "These attack paths pose a security threat to organisational data. Developing ways to identify security loopholes "+
        "in AD architecture and rectify them without the need for manual processes.",

        `Full report can be viewed <a href=${report} target="_blank" rel="noreferrer">click here</a>.`
            ],
        
        ASM: ["•	I'm coordinating with Professor Mark Jenkinson to deliver the COMP SCI 3317 - Using Machine Learning "+
        "Tools course in semester 1, 2022. To perform a wide array of tasks like setting up quizzes, marking and more.",

        `The complete Course Outline for COMP SCI 3317 - Using Machine Learning Tools detailing the academic activities is `+
        `listed on <a href="https://www.adelaide.edu.au/course-outlines/110303/1/sem-1/" target="_blank" rel="noreferrer">COMP SCI 3317</a>.`,
        
        "Operating Gradescope for the COMP SCI 3007 - Artificial Intelligence course in semester 1, 2022, under the "+
        "guidance of Professor Tat-Jun Chin. As a result, drastically reduced the time consumption of resource(s) required "+
        "for marking assignments of 100+ students.",

        `The complete Course Outline for COMP SCI 3007/7059 - Artificial Intelligence detailing the academic activities are `+
        `listed on <a href="https://www.adelaide.edu.au/course-outlines/006378/1/sem-1/" target="_blank" rel="noreferrer">COMP SCI 3007</a> `+
        `and <a href="https://www.adelaide.edu.au/course-outlines/009516/1/sem-1/" target="_blank" rel="noreferrer">COMP SCI 7059</a>.`
            ]
    }
]