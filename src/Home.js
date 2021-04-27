import AboutMe from './AboutMe'
import Links from './Links'
import ContentCard from './ContentCard'
import ContentSection from './ContentSection'
import Landing from './Landing'
import Contact from './Contact'


function Home({projects, experience}) {

    return (
        <>

            <Landing/>
            
            <ContentSection title='Projects' color='var(--primary)' id='projects'>
                {
                    projects.map( project => {
                        return (
                            <ContentCard 
                            key={project.title} 
                            title={project.title} 
                            content={project.content}
                            subtext={project.subtext}
                            href={project.href}
                            />
                        )
                    })
                }

            </ContentSection>

            <ContentSection title='Experience' color='var(--secondary)' id='experience'>
                {
                    experience.map( job => {
                        return (
                            <ContentCard 
                            color={job.color}
                            title={job.title}
                            position={job.position}
                            length={job.length}
                            content={job.content}
                            subtext={job.subtext}
                            href={job.href}
                            />
                        )
                    })
                }

            </ContentSection>
            <ContentSection title='About me' color='var(--primary)' id='about'>
                <AboutMe/>
            </ContentSection>

            <ContentSection title='Other Links' color='var(--secondary)' id='contact'>
                <Links/>
            </ContentSection>

            <ContentSection title='Contact Me' color='var(--primary)' id='contact'>
                <Contact/>
            </ContentSection>

        </>
    );
}

export default Home;
