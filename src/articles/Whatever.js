import Title from './Title'
import Article from './Article'
import Paragraph from './Paragraph'
import Heading from './Heading'
import Emphasis from './Emphasis'
import Aside from './Aside'
import Image from './Image'

import DBDiagram from '../static/images/DB-Diagram.PNG'
import WhateverUI from '../static/images/Whatever-UI.png'

const Whatever = () => {
    return (
    <Article>
        <Title> Whatever Retrospective </Title>
        <Image
            src={WhateverUI}
            alt='Sample workspace in Whatever'
        />
        <Paragraph>
            Often times, when thinking of projects to work on for my portfolio, my ideas tend to come in the form of small 'Modules'. 
            I absolutely love working on these Modules, but it seems like they just exist for the sake of padding my resume.  
            In order to give these Modules more of a purpose, I created Whatever.
            Whatever allows users to configure their workspace to fit their precise needs, enabling them to do whatever they want.
        </Paragraph>

        <Heading>
            Laying the Groundwork
        </Heading>

        <Paragraph>
            The majority of the initial planning for this project was done entirely with pen and paper. 
            I wanted to make sure that I spent time adequately fleshing out my applet and feature must-haves before writing any code. 
        </Paragraph>

        <Paragraph>
            At the end of it all, the must-haves were as follows:<br/>
            - The application needs to be visually pleasing to users <br/>
            - Users need to be able to place their modules wherever they want in the 2x2 grid <br/>
            - Users should be able to save their layouts for easy swapping between workspaces <br/>
            - Modules need to be able to be expanded to take up any available space <br/>
            - Modules must be aware of each other in order to prevent collision <br/>
        </Paragraph>

        <Heading>
            Developing the Infastructure
        </Heading>

        <Paragraph>
            With these primary considerations in mind, I started developing and working away at a backlog of tickets. 
            I began with creating the workspace, and placeholder modules in order to develop the functionality of adding, moving, and resizing the individual modules.
            Each module is contained by a wrapper controller that handles module resizing, moving, and closing. 
            This allows for each instance of a module to be completely independent of all of this logic. 
        </Paragraph>

        <Paragraph>
            My next priority was creating the user system with a Refresh / Access token model. 
            Luckily, I had just recently finished work on a user system with the exact same specifications for a project we are developing at The FIG.
            Following the creation of their account, users are now able to save and switch between their own custom layouts. 
            Users are also able to set their own default layout to be loaded when they log in to Whatever.
        </Paragraph>

        <Heading>
            A Bump in the Road
        </Heading>

        <Paragraph>
            After finishing up all of the logic for handling modules on the screen, it was time that I actually wrote some modules that did something.
            I decided to start off with a checklist because that seems to be the kind of thing that I use the most in any desktop assistant that I use. 
            Writing the majority of the logic was easy enough, (there's a reason that writing a checklist is often a right of passage when learning a new JS framework) 
            but I ran into an interesting issue when it got time to set up the module to pull a user's saved checklist items from the API. 
            <br/><br/><Emphasis> If a user already has a checklist open, that checklist will already contain the most up to date data. </Emphasis> <br/><br/>
            This means that when opening a second instance of a checklist, any calls to the API to populate a second checklist will be redundant. 
            In order to get around this, I had to maintain state that individual instances of modules could pull from. 
            I could have set up some state management inside my index.js, but that would overcomplicate things. 
            I decided that instead, now would be a great time to try my hand at learning Redux.js
        </Paragraph>

        <Heading>
            Learning Redux
        </Heading>

        <Paragraph>
            I have always heard about how cumbersome it is to get Redux set up in your project, so I was definitely hesitant when I started going through the Redux docs.
            While there definitely was a decent amount of boilerplate work, getting Redux setup was pretty simple with Redux Toolkit. I would definitely reccomend it!
            I had to take a little bit of time to familiarize myself with reducers and actions, but after a little bit of fiddling around I was able to plug in my Redux store 
            to my module components. I'm sure that my Redux logic itself is far from best practices, but hey, this is a learning process!  
            Regardless, I definitely appreciated the fact that I didn't have to thread a bunch of props through my components.
        </Paragraph>

        <Heading>
            Next Steps
        </Heading>

        <Paragraph>
            The whole point of this project was to create a space where I could publish my smaller projects for users to mess around with as they see fit.
            At the time of launch, Whatever comes stock with a Notepad and Checklist module.
            That means that the majority of my work from here on out will be on filling out that list with things like a clock, piano, and other fun ideas.
        </Paragraph>

        <Paragraph>
            Other than that, my priorities are going to be on cleaning up the overall user experience.
            Seeing that my application is a 'Desktop Manager', I never really put much thought to what it may look like on a mobile device.
            The 2x2 grid concept definitely falls apart at the smaller screen sizes which means I'm most likely going to need an alternative. 
            My first idea is to give mobile users the ability to open up a single instance of a module at a time on their device so that the space is most adequately used.
            I'll probably be throwing together an initial mockup sometime this week that I'll put above this paragraph.
        </Paragraph>
    </Article>
    )
}

export default Whatever