import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  test: {
    position: 'absolute',
    right: '0'
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    right: 0,
    position: 'relative',
    width: "100%",
  },
  menuBar: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  }
}));

export default function NavBar ({onscroll, intro, about, project, contact}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <AppBar position='fixed' color='transparent' elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} style={{fontWeight: 550}} onClick={() => onscroll(intro)}>
          TONY LIAO
        </Typography>
        <div className={classes.test}>
          <div className={classes.buttonBar}>
            <Button color="inherit" onClick={() => onscroll(about)}>About Me</Button>
            <Button color="inherit" onClick={() => onscroll(project)}>Projects</Button>
            <Button color="inherit" onClick={() => window.open("https://drive.google.com/file/d/1bFYfG0HsGX1CewtSMIYI-55kiXcDyjSq/view?usp=sharing")}>Resume</Button>
            <Button color="inherit" onClick={() => window.open("mailto:tonyliao71@gmail.com")}>Email me</Button>
          </div>

          <div className={classes.menuBar}>
          <Button color="inherit" aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >Menu</Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => onscroll(about)}>About Me</MenuItem>
            <MenuItem onClick={() => onscroll(project)}>Projects</MenuItem>
            <MenuItem onClick={() => window.open("https://drive.google.com/file/d/1bFYfG0HsGX1CewtSMIYI-55kiXcDyjSq/view?usp=sharing")}>Resume</MenuItem>
            <MenuItem onClick={() => window.open("mailto:tonyliao71@gmail.com")}>Email me</MenuItem>
          </Menu>
          </div>
        </div>

      </Toolbar>
    </AppBar>
    </div>
  )
};