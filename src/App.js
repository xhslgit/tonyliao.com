import NavBar from './components/NavBar';
import Intro from './components/Intro';
import { useRef } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
const App = () => {
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
        <Grid item>
          <Intro 
            onscroll={scrollExecute}
            about={aboutRef}
          />
        </Grid>
        <Grid item ref={aboutRef}>
          <Container maxWidth='xl' style={{height: '100vh'}}>
            <Typography variant="h3" align="center">full stack developer currently studying at UNSW as Software Engineer student</Typography>
          </Container>
        </Grid>
        <Grid item ref={projectRef}>
          <Container m={1000} id="project" style={{height: '100vh'}}>
            <Typography variant="h3" align="center">Projects</Typography>
            <Typography variant="h4">LoLDodgeList</Typography>
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