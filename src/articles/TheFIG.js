import Title from './Title'
import Article from './Article'
import Paragraph from './Paragraph'
import Heading from './Heading'
import Emphasis from './Emphasis'
import Aside from './Aside'
import Image from './Image'

import CNCUI from '../static/images/CNC-UI.png'


const TheFIGArticle = () => {
    return (
    <Article>
        <Title> The Carbon Neutral Challenge </Title>
        <Image
            src={CNCUI}
            alt='Carbon Neutral Challenge Dashboard'
            subtext='Carbon Neutral Challenge Dashboard'
        />
        <Paragraph>
            The largest project that I have worked on during my time at The FIG has most certainly been the Carbon Neutral Challenge.
        </Paragraph>

        <Paragraph>
            These days, a good amount of people <Emphasis> want </Emphasis> to take actions that reduce their impact on the environment.
        </Paragraph>

        <Paragraph>
            The biggest problem is that living an eco-friendly lifestyle often comes off as intimidating to people, myself included!
        </Paragraph>

        <Paragraph>
            The Carbon Neutral Challenge is a web application that aims to remedy that problem. 
        </Paragraph>

        <Paragraph>
            When a user registers, they are asked a series of questions about certain aspects of their day to day life. 
            We then calculate an estimated footprint for the user based on their answers
        </Paragraph>

        <Paragraph>
            Once a user has completed their registration, the Carbon Neutral Challenge proper begins
        </Paragraph>

        <Paragraph>
            Each week for the next four weeks, users will be put into a new module that covers a certain aspect of day to day life.
        </Paragraph>

        <Paragraph>
            Modules begin with a quiz that allows us to compile a set of relevant challenges that we can offer up for users to accept.
            User's can then watch their footprint decrease over the course of the week as they follow along with the challenges that they have taken on.
        </Paragraph>

        <Heading>
            How does it work? 
        </Heading>

        <Paragraph>
            The Carbon Neutral Challenge is comprised of the following: <br/> <br/>
            - A Next.JS frontend <br/>
            - A Node.JS backend <br/>
            - A MongoDB Database <br/>
            - A React admin panel <br/>
        </Paragraph>

        <Paragraph>
            This was my first time using Next.JS for a React project, but the official documentation was super helpful in getting me up to speed!
        </Paragraph>

        <Paragraph>
            I had originally picked Next.JS in order to help establish solid SEO down the road, but its built in support for API routes proved to be my favorite feature. 
            Having the ability to set up all of my JWT Auth routes on their own server, seperate from all other API functions was great. 
        </Paragraph>

        <Paragraph>
            Each of the components are done using Styled Components. This allowed me to easily create a set of reusable components complete with dynamic styling.
        </Paragraph>

        <Paragraph>
            Working on the Carbon Neutral Challenge has been super challenging and a ton of fun. Please be sure to check it out!
        </Paragraph>

        
    </Article>
    )
}

export default TheFIGArticle