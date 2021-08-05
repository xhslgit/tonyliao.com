import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
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
          <Container m={1000} id="project" style={{height: '100vh'}}>
            <Typography variant="h3" align="center">Projects</Typography>
            <Typography variant="h4">LoLDodgeList</Typography>
            <Typography variant="h4">BigBrain</Typography>
            <Typography variant="h4">JobHunta</Typography>
            <Typography variant="h4">Gloria Romanus</Typography>
            <Typography variant="h4">BigBrain</Typography>
            
          </Container>
        </Grid>
        <Grid item ref={contactRef} style={{textAlign: 'center'}}>
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