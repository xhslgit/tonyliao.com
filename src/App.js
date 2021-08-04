import NavBar from './components/NavBar';
import { useRef } from 'react'
import { Container, Grid } from '@material-ui/core';
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
        justify="flex-start"
        alignItems="center"
      >
        <Grid item ref={aboutRef}>
          <Container maxWidth='xl' style={{textAlign: 'center'}}>
            <h1>About</h1>
            <p>I'm Tony Liao, a full stack developer currently studying at UNSW as Software engineer student</p>
          </Container>
        </Grid>
        <Grid item ref={projectRef}>
          <Container m={1000} id="project" style={{textAlign: 'center'}}>
            <h1 id="project">Projects</h1>
            <p>blah blah</p>
          </Container>
        </Grid>
        <Grid item ref={contactRef} style={{textAlign: 'center'}}>
          <Container m={1000}>
            <h1>Contact me</h1>
            <p>Email me at Tonyliao2009@gmail.com</p>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;