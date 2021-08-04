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
  },
}));

export default function NavBar ({onscroll, about, project, contact}) {
  const classes = useStyles();


  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Tony Liao
        </Typography>
        <Button color="inherit" onClick={() => onscroll(about)}>About Me</Button>
        <Button color="inherit" onClick={() => onscroll(project)}>Projects</Button>
        <Button color="inherit" onClick={() => window.open("https://drive.google.com/file/d/1SSmlDhVNRbudPnBpJe_pgn9TcOHcGJCP/view?usp=sharing")}>Resume</Button>
        <Button color="inherit" onClick={() => onscroll(contact)}>Contact</Button>
      </Toolbar>
    </AppBar>
  )
};