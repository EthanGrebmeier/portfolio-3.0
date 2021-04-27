import Traace from './articles/Traace'

const projects = [
    {
        title: 'Traace.io',
        content: 'A web-application for Covid-19 Contact Tracing',
        fullContent: 'Traace is a web-application for Covid-19 Contact Tracing. The application allows for users to record the places they have been and the people that they have seen. Traace will automatically inform users if they have come into contact with another user who has recorded a positive Covid-19 test.',
        subtext: 'React, Node, Express, PostgreSQL, Google Cloud',
        href: '/project/traace',
        id: 'traace',
        demo: 'https://www.traace.io',
        github: 'https://github.com/EthanGrebmeier/contact-tracing-server',
        article: Traace
    },
    {
        title: 'Sorter',
        content: 'A sorting algorithm visualizer',
        subtext: 'React',
        href: '/project/sorter',
        id: 'sorter',
        github: 'https://github.com/EthanGrebmeier/react-sorter'
    },
    {
        title: 'Say Hello',
        content: 'A lightweight Twitter clone',
        subtext: 'React, Node, Express, MongoDB',
        href: '/project/say-hello',
        id: 'say-hello',
        github: 'https://github.com/EthanGrebmeier/react-say-hello'
    },
    {
        title: 'Reader',
        content: 'A speed reading assistant',
        subtext: 'React',
        href: '/project/reader',
        id: 'reader',
        github: 'https://github.com/EthanGrebmeier/react-reader'
    },
]

export default projects