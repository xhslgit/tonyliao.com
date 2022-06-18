import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
}));

export default function NavBar ({onscroll, intro, about, project, contact}) {
  const classes = useStyles();


  return (
    <AppBar position='fixed' color='transparent' elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} style={{fontWeight: 550}} onClick={() => onscroll(intro)}>
          TONY LIAO
        </Typography>
        <Button color="inherit" onClick={() => onscroll(about)}>About Me</Button>
        <Button color="inherit" onClick={() => onscroll(project)}>Projects</Button>
        <Button color="inherit" onClick={() => window.open("https://drive.google.com/file/d/1bFYfG0HsGX1CewtSMIYI-55kiXcDyjSq/view?usp=sharing")}>Resume</Button>
        <Button color="inherit" onClick={() => window.open("mailto:tonyliao71@gmail.com")}>Email me</Button>
      </Toolbar>
    </AppBar>
  )
};