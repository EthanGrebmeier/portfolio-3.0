import TraaceArticle from './articles/Traace'
import WhateverArticle from './articles/Whatever'

const projects = [
    {
        title: 'Whatever',
        content: 'An all-in-one desktop assistant',
        fullContent: 'Whatever is an all-in-one desktop assistant. The application allows for users to set up their 2x2 workspace in whatever configuration works best for them ',
        subtext: 'Next.JS, Redux, Node, Express, MongoDB',
        href: '/project/whatever',
        id: 'whatever',
        demo: 'https://whatever-sepia.vercel.app/',
        github: 'https://github.com/EthanGrebmeier/whatever',
        article: WhateverArticle
    },
    {
        title: 'Traace.io',
        content: 'A web-application for Covid-19 Contact Tracing',
        fullContent: 'Traace is a web-application for Covid-19 Contact Tracing. The application allows for users to record the places they have been and the people that they have seen. Traace will automatically inform users if they have come into contact with another user who has recorded a positive Covid-19 test.',
        subtext: 'React, Node, Express, PostgreSQL, Google Cloud',
        href: '/project/traace',
        id: 'traace',
        demo: 'https://traace.io',
        github: 'https://github.com/EthanGrebmeier/contact-tracing-server',
        article: TraaceArticle
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