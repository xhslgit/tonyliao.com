import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import { useRef } from 'react'
import { Container, Grid} from '@material-ui/core';
const App = () => {
  let introRef = useRef();
  let aboutRef = useRef();
  let contactRef = useRef();
  let projectRef = useRef();
  const scrollExecute = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  }
  const images = [
    { url: "./project_imgs/Screenshot_1.jpg"},
    { url: "./project_imgs/Screenshot_1.jpg"},
  ];

  const JHimages = [
    { url: "./project_imgs/JH_1.jpg"},
    { url: "./project_imgs/JH_2.jpg"},
    { url: "./project_imgs/JH_3.jpg"},
    { url: "./project_imgs/JH_4.jpg"},
  ];

  const LDLimages = [
    { url: "./project_imgs/LDL_1.jpg"},
    { url: "./project_imgs/LDL_2.jpg"},
    { url: "./project_imgs/LDL_3.jpg"},
    { url: "./project_imgs/LDL_4.jpg"},
  ]

  const BBimages = [
    { url: "./project_imgs/BB_5.jpg"},
    { url: "./project_imgs/BB_1.jpg"},
    { url: "./project_imgs/BB_4.jpg"},
    { url: "./project_imgs/BB_3.jpg"},
    { url: "./project_imgs/BB_2.jpg"},
    { url: "./project_imgs/BB_6.jpg"},
  ];

  const PWimages = [
    {url : "./project_imgs/TLPP.jpg"},
  ];

  return (
    <div>
      <NavBar
        onscroll={scrollExecute}
        intro={introRef}
        about={aboutRef}
        project={projectRef}
        contact={contactRef}
      />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item ref={introRef}>
          <Intro 
            onscroll={scrollExecute}
            about={aboutRef}
          />
        </Grid>
        <Grid item ref={aboutRef} style={{backgroundColor: '#f2f2f2', width: '100%'}}>
          <About />
        </Grid>
        
        {/* <Grid item ref={projectRef} style={{paddingBottom: '200px'}}>
          <Container m={1000} id="project" style={{height: '140vh', width: '100vw', paddingTop: '100px'}}>
            <h1 className="title-font" align="center">My Work</h1>
            <Project
              title="BigBrain"
              align="left"
              desc={"BigBrain is a lightweight quiz platform closely modelled off of the popular Kahoot.\nThis web-based app has an admin interface with in-depth features, ability to create games with custom questions, live games and post-game statistics.\nAn individual project created with ReactJS for COMP6080 - Web Front-End Programming"}
              images={BBimages}
              github="https://github.com/xhslgit/BigBrain"
            />
            <Project
              title="LoLDodgeList"
              align="right"
              desc={"LoLDodgeList is a web-based application that trackers League of Legends usernames via the use of private, shared and public lists. Users have the ability to add/remove players to the global and their own private list and create/share shared lists with other users. \nCreated with Python, HTML, CSS along with SQLite databases"}
              images={LDLimages}
              github="https://github.com/AliMickey/dodgeListLoL"
            />
            <Project
              title="JobHunta"
              align="left"
              desc={"Job-Hunta, takes popular job search APIs such as CareerJet, Adzuna, and GitHub Jobs, and combines them into one integrated job hub for our user's convenience, whilst offering a multitude of quality features.\nUniversity group project created for SENG2021"}
              images={JHimages}
              github="https://github.com/gidizim/etchness"
            />
            <Project
              title="Gloria Romanus"
              align="right"
              desc={"Gloria Romanus is a \"Risk\" style video game implemented as a desktop application. Developed through Java with the implementation of many Java OO design practices, Gloria Romanus allows the player to control various factions that existed around 200BC.\nPlayers can train/upgrade troops, build various structures, conquer regions/provinces and take over other factions.\nUniversity group project created for COMP2511"}
              images={images}
              github="https://github.com/gidizim/etchness"
            />
            <Project
              title="Personal Website"
              align="left"
              desc={"What you are looking at right now!\nCreated with ReactJS"}
              images={PWimages}
              github="https://github.com/xhslgit/tonyliao.com"
            />
          </Container>
        </Grid> */}


      </Grid>
    </div>
  );
}
        {/* <Grid item ref={contactRef} style={{textAlign: 'center', height: '30vh'}}>
          <Container m={1000}>
            <Typography variant="h3" inline>Contact Me</Typography>
            <Typography variant="h4" inline>Tonyliao71@gmail.com</Typography>
          </Container>
        </Grid> */}
export default App;