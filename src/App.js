import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import { useRef } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
const App = () => {
  let introRef = useRef();
  let aboutRef = useRef();
  let contactRef = useRef();
  let projectRef = useRef();
  const scrollExecute = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  }
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
        <Grid item ref={aboutRef}>
          <About />
        </Grid>
        <Grid item ref={projectRef}>
          <Container m={1000} id="project" style={{height: '140vh', width: '100vw'}}>
            <Typography variant="h3" align="center">Projects</Typography>
            <Project
              title="LoLDodgeList"
              align="left"
              desc={"LoLDodgeList is a web-based application that trackers League of Legends usernames via the use of private, shared and public lists. Users have the ability to add/remove players to the global and their own private list and create/share shared lists with other users. \nCreated with Python, HTML, CSS along with SQLite databases"}
            />
            <Project
              title="BigBrain"
              align="right"
              desc={"BigBrain is a lightweight quiz platform closely modelled off of the popular Kahoot.\nThis web-based app has an admin interface with in-depth features, ability to create games with custom questions, live games and post-game statistics.\nAn individual project created with ReactJS for COMP6080 - Web Front-End Programming"}
            />
            <Project
              title="JobHunta"
              align="left"
              desc={"Job-Hunta, takes popular job search APIs such as CareerJet, Adzuna, and GitHub Jobs, and combines them into one integrated job hub for our user's convenience, whilst offering a multitude of quality features.\nUniversity group project created for SENG2021"}
            />
            <Project
              title="Gloria Romanus"
              align="right"
              desc={"Gloria Romanus is a \"Risk\" style video game implemented as a desktop application. Developed through Java with the implementation of many Java OO design practices, Gloria Romanus allows the player to control various factions that existed around 200BC.\nPlayers can train/upgrade troops, build various structures, conquer regions/provinces and take over other factions.\nUniversity group project created for COMP2511"}
            />
            <Project
              title="Personal Website"
              align="left"
              desc={"What you are looking at right now!\nCreated with ReactJS"}
            />
          </Container>
        </Grid>

        <Grid item ref={contactRef} style={{textAlign: 'center', height: '30vh'}}>
          <Container m={1000}>
            <Typography variant="h3" inline>Contact Me</Typography>
            <Typography variant="h4" inline>Tonyliao2009@gmail.com</Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;