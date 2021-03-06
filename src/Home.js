import React from 'react';
import Fainsta from 'react-icons/lib/fa/instagram';
import Falink from 'react-icons/lib/fa/linkedin-square';
import Fagoog from 'react-icons/lib/fa/google-plus-square';
import Fagithub from 'react-icons/lib/fa/github-square';


class Home extends React.Component {
    constructor(){
        super();

        this.handleGoToProjects = this.handleGoToProjects.bind(this);
    }

    handleGoToProjects(){
        this.props.history.push('/myprojects');
    }

    render(){
        return (
            <div className="headerBackground">
                <div className="pageOverlay">
                    <div className="homePageScroll">
                        <h1>Nate Jensen</h1>
                        <h2>Design / Develop / Program</h2>
                        <div className="bodyDiv">
                            <div className="introLeftSideContainer">
                                <h3>Let me introduce myself...</h3>
                                <img src={require('./resources/me.jpg')} alt="Me"/>
                                <a href="Nate-Jensen-Resume.pdf" download="Nate-Jensen-Resume.pdf"><button>Download Resume</button></a>
                            </div>
                            <div className="introRightSideContainer">
                                <h4>I am a :</h4>
                                <ul>
                                    <li>Developer</li>
                                    <li>Traveler</li>
                                    <li>Learner</li>
                                    <li>Artist</li>
                                    <li>Musician</li>
                                </ul>
                            </div>
                            <div className="aboutMeTitleDiv">
                                <h3>- About Me -</h3>
                            </div>
                            <div className="homeFullContainer">
                                <p>
                                    My driving force is a passion for learning new things. This passion has driven me from a young age to constantly be learning or developing a skill. Music has been a big part of my life, and other subjects or things I have studied are drawing/painting, french, 3D graphic programs, and computer programming.

                                    I have found that computer programming is in the same vein of all those other creative endeavors I love. I am very excited about what my future in the tech industry holds and the impact I have the chance to make.
                                </p>
                            </div>
                            <div className="projectsBtnDiv">
                                <button onClick={this.handleGoToProjects}>Go to Projects</button>
                            </div>
                            <div className="homeSkillsTitle">
                                <h3> - Skills // Tech - </h3>
                            </div>
                            <div className="homeSkillsLeft">
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Node JS</li>
                                    <li>Redux</li>
                                    <li>HTML/CSS</li>
                                    <li>Git</li>
                                    <li>JSON</li>
                                    <li>Lodash</li>
                                </ul>
                            </div>
                            <div className="homeSkillsRight">
                                <ul>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>Mongoose/MongoDB</li>
                                    <li>Jquery</li>
                                    <li>Token Auth</li>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                </ul>
                            </div>
                            <div className="homeContactTitle">
                                <h3> -Contact- </h3>
                            </div>
                            <div className="homeContactInfo">
                                <ul>
                                    <li>Email:  Nathan.Jensen.58@gmail.com</li>
                                    <li>Phone:  (801) 856-9961</li>
                                    <div className="iconsDiv">
                                        <li>
                                            <a
                                                href="https://github.com/njensen58"><i className="gitIcon icons"><Fagithub/></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://linkedin.com/in/natej58"><i className="icons linkIcon"><Falink /></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://google.com/+NathanJensen"><i className="icons googIcon"><Fagoog /></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.instagram.com/nate.sj"><i className="icons instaIcon"><Fainsta /></i>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
