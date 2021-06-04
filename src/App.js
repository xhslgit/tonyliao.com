import NavBar from './components/NavBar';
import { Container, Grid } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <NavBar />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Container maxWidth='xl' id='about' style={{ backgroundColor: '#272935' }}>
            <h1>About</h1>
          </Container>
        </Grid>
        <Grid item>
          <Container style={{ backgroundColor: '#23252f' }} m={1000}>
            <h1>Projects</h1>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;