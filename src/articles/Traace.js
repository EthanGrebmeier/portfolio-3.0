import Title from './Title'
import Article from './Article'
import Paragraph from './Paragraph'
import Heading from './Heading'
import Emphasis from './Emphasis'
import Aside from './Aside'
import Image from './Image'

import DBDiagram from '../static/images/DB-Diagram.PNG'
import TraaceUI from '../static/images/Traace-UI.png'

const Traace = () => {
    return (
    <Article>
        <Title> Traace Retrospective</Title>
        <Paragraph>
            Traace.io was worked on as my senior project at California Polytechnic State University. 
            The project was my very first large scale, full stack project that I had ever worked on, 
            so I wanted to ensure that I put my best foot forward to plan and execute to the best of my abilities. 
            I began by researching the few contact tracing systems that had been created by smaller scale teams in order to get a better idea of what kinds of new concepts 
            I may need to get more familiar with before starting the proper work on the project. 
            Eventually, I determined that I would build the project with <Emphasis>React, Express, Node.js, and PostgreSQL</Emphasis>.
            I had prior experience with each part of this tech stack, but this would be the first time that I had used each of them together on a project. 
        </Paragraph>
        <Heading>
            The Database
        </Heading>
        <Image
            src={DBDiagram}
            subtext='My Final Database Diagram'
            alt='Database Diagram'
        />
        <Paragraph>
            Following the initial ideation, I moved on to laying out the plans for the majority of the project. 
            I started out with determining the exact requirements for the project, 
            listing out each and every little thing that a user may want to do and then splitting those requirements into their own categories. 
            I took each of those requirements and categorized them as best as possible into a Trello board. 
            The initial requirements were also used to create a plan for my PostgreSQL database. Being eager to start, 
            I then went right into actually building the database. 
            <Aside> 
                One of the biggest lessons that I learned over the course of this project was that it is equally as, 
                if not more, important to figure out exactly how you’re going to handle the specific features of your project in addition to just deciding what those features are. 
            </Aside>
            By not nailing down these specifics early on, I ended up having to make a ton of changes to my database over time. This led to way more headache than necessary.
        </Paragraph>
        <Heading>
            The User Interface
        </Heading>
        <Image
            src={TraaceUI}
            subtext='My Final UI Mockup'
            alt='Final UI Mockup'
        />
        <Paragraph>
            The next major step for me was to mockup the UI for the project. 
            I had some experience with UI mockups before, but this was a great way for me to get really invested in my design and learn a thing or two! 
            I decided early on that I wanted Traace to appear more like an application than a webpage. 
            This led me to choose a dashboard appearance for my UI. 
            Additionally, I wanted to make sure that my UI had a colorful appearance in order to offset some of the 
            negative opinions that people may hold when it comes to something unpleasant like contact tracing. 
            I used Figma for the mockup process to build both desktop and mobile views of the application. 
            After some iteration, I was able to settle on a design that remained consistent throughout the project. 
        </Paragraph>
        <Heading>
            Front-End Development
        </Heading>
        <Paragraph>
            After finishing the initial planning process, all that was left to do was actually write the code! 
            I wanted to focus primarily on the frontend initially so that I could later tailor the backend to fit the exact needs of the frontend components. 
            The entirety of the frontend was built with Create-React-App and React Router, 
            so I luckily didn’t have to write too much boilerplate code. 
            The nature of this project meant that not too many of the individual components would be reusable, 
            but I was able to make a few optimizations here and there such as reusing basic form and section components. 
            Overall, the process was a fairly straightforward one. 
            I would take a look at my Trello board each day and slowly chip away at each of the UI components 
            from my Figma mockups until I had something that I was proud of. 
            The biggest challenge that I faced on the frontend was implementing the mobile UI as it had a completely different layout than the desktop version. 
            I had created responsive designs before, but this was a lot more to handle. 
            I ended up using 26 media queries in order to optimize the design for all screen sizes which was a ton to manage! 
            The result was absolutely worth it though, I was able to nail down an experience that consistently worked at every screen size.  
        </Paragraph>
        <Heading>
            Back-End Development
        </Heading>
        <Paragraph>
            Ultimately, I was able to get the frontend in a nearly completed state and I moved on to the server. 
            I was able to easily set up the majority of the functionality including the functions that would determine which users had been in contact with a 
            user with a positive test. The only factor of the application that gave me a particularly tough time was user authentication. 
            I spent a solid week trying to learn the ins and outs of using Passport and integrating Google OAuth. 
            I was thankfully able to get a working product out there in the end, but it was nowhere near as elegant as what I was hoping for. 
            More on that later! The next task was getting everything on the frontend hooked up to the server. 
            This was a mostly simple process with the only road-bump that I ran into being Google Maps integration. 
            I hadn’t used any of the Google Cloud APIs, so this was a new experience for me. 
            Working with the Maps API on a react application required a little bit of extra research, 
            but in the end, it wasn’t too big of a hassle and I was able to get everything up and running!
        </Paragraph>
        <Heading>
            Lessons Learned
        </Heading>
        <Paragraph>
            Now that each of the pieces had fallen into place, the project was complete! 
            I was definitely proud of the project, 
            but that isn’t to say that I would probably do it a completely different way if I were to start fresh with everything that I know now. 
            With regards to the database, I think that using MongoDB for a project like this just makes so much more sense. 
            I spent way more time than necessary writing complex queries that would have been simplified heavily with the use of MongoDB and the Mongoose 
            package on the backend. It was definitely fun to try something a little different though! 
            I’ve been primarily using Styled Components for my recent frontend work, 
            I think I could have reduced a lot of the overall styling complexity with this package. 
            The most necessary change that I would implement though has to do with the way that I set up authentication. 
            The way that it works now has needless redundancies and unnecessarily exposed aspects that came simply as a side-effect of it 
            being my first time implementing a system. I think that if I were to revisit this aspect of the project, 
            I could write a simple access/refresh token system that would simplify and clean up a lot of my authentication process. 
            Overall, I’m super proud of the project and I learned a ton about web-development that I brought along with me to projects that I worked on after.
        </Paragraph>
    </Article>
    )
}

export default Traace