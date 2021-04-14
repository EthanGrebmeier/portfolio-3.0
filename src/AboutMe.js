import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background: var(--primaryTwo);
    color: white;
    border-radius: 12px;
    padding: 20px;
    box-sizing: border-box;
`

const Intro = styled.h2`
    font-weight: 400;
    font-size: 24px;
    width: 100%;
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 18px;
    margin: 20px 0 20px 0;
`

const SkillColumn = styled.div`
    width: 350px; 
`

const AboutMe = () => {
    return (
        <Wrapper>
            <Intro>
            Hi there! <br/> <br/>

            My name is Ethan Grebmeier, and I am a recent Cal Poly Grad 
            and web developer based in Seattle, Washington. 
            I work primarily with the following:
            </Intro>
            <Skills>
                <SkillColumn>
                    Front End
                    <ul>
                        <li>
                            React - 1.5 Years
                        </li>
                        <li>
                            Next.JS - 4 Months
                        </li>
                        <li>
                            HTML5 - 2 Years
                        </li>
                        <li>
                            Styled Components - 4 Months
                        </li>
                        <li>
                            SASS - 1.5 Years
                        </li>
                        <li>
                            CSS - 2 Years
                        </li>  
                    </ul>
                </SkillColumn>
                <SkillColumn>
                    Back End
                    <ul>
                        <li>
                            Node.js - 1.5 Years
                        </li>
                        <li>
                            Express - 1.5 Months
                        </li>
                        <li>
                            PostgreSQL - 2 Years
                        </li>
                        <li>
                            MongoDB - 1 Year
                        </li>
                    </ul>
                </SkillColumn>
                <SkillColumn>
                    Other
                    <ul>
                        <li>
                            Python - 3 Years
                        </li>
                        <li>
                            Git - 1.5 Years
                        </li>
                        <li>
                            Figma - 1 Year
                        </li>
                        <li>
                            Agile - 1 Year
                        </li>
                    </ul>
                </SkillColumn>
            </Skills>
        </Wrapper>
    )
}

export default AboutMe