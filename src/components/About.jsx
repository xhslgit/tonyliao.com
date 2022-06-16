import React from 'react';
import { Container, Typography, Box, Tooltip} from '@material-ui/core';
import { DiGithubBadge, DiPostgresql, DiHaskell, DiJavascript, DiJava, DiHtml5, DiSqllite, DiPerl, DiPython, DiReact} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiGnubash } from "react-icons/si";
import { GiAustralia } from "react-icons/gi";
import styled, { ThemeProvider } from 'styled-components';
export default function About () {
  const themeHa = {
    main: "#6100a0",
  }
  const themeHTML = {
    main: "#e56027",
  }
  const themeJS = {
    main: "gold",
  }
  const themePost = {
    main: "#30628a"
  }
  const themeSqlite = {
    main: "#013856"
  }
  const themePerl = {
    main: "#3949ab"
  }
  const themeReact = {
    main: "#61dafb"
  }
  const ContStyle = {
    margin: 'auto',
    marginTop: '25px',
    height:'100vh',
  }
  const IconBox = styled(Box)`
    color: ${props => props.theme.main};
    margin: 5px;
    padding: 0px;
    font-size: 100px;
    transition: transform .2s;
    &:hover {
      transform: scale(1.2);
    }
  `;

  const CourseBox = styled(Box)`
    border:2px solid black;
    border-radius: 5px;
    margin: 5px;
    padding: 2px 5px;
    transition: transform .2s;

    &:hover {
      transform: scale(1.02);
    }
  `
  IconBox.defaultProps = {
    theme: {
      main: "black"
    }
  }
  return (
    <Container maxWidth='xl' style={ContStyle}>
      <Typography variant="h5" align="center" style={{fontWeight: '500', paddingTop: '200px'}}>
        I am a full stack developer currently pursuing a<br></br>
        Bachelor of Computer Science (2019-2022)
        @ University of New South Wales<br></br>
        based in Sydney, Australia <br></br>
        <GiAustralia />
        <br></br>


      </Typography>
      <Typography variant="h2" align="center" style={{paddingTop: '100px'}}>Skills</Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" width="800px" style={{margin: 'auto', paddingBottom: '200px'}}>

        <Tooltip title="Python" arrow>
          <IconBox>
              <DiPython />
          </IconBox>
        </Tooltip>

        
          <Tooltip title="C++" arrow>
            <IconBox>
              <CgCPlusPlus />
            </IconBox>
          </Tooltip>
       

        <ThemeProvider theme={themeJS}>
          <Tooltip title="JavaScript" arrow>
            <IconBox>
              <DiJavascript />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <ThemeProvider theme={themeReact}>
          <Tooltip title="React" arrow>
            <IconBox>
              <DiReact />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <ThemeProvider theme={themeHa}>
          <Tooltip title="Haskell" arrow>
            <IconBox >
              <DiHaskell />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <ThemeProvider theme={themeHTML}>
          <Tooltip title="HTML" arrow>
            <IconBox>
              <DiHtml5 />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <ThemeProvider theme={themePost}>
          <Tooltip title="PostgreSQL" arrow>
            <IconBox>
              <DiPostgresql />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <Tooltip title="Java" arrow>
          <IconBox>
              <DiJava />
          </IconBox>
        </Tooltip>

        <Tooltip title="GitHub" arrow>
          <IconBox>
              <DiGithubBadge />
          </IconBox>
        </Tooltip>

        <ThemeProvider theme={themeSqlite}>
          <Tooltip title="SQLite" arrow>
            <IconBox>
              <DiSqllite />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <ThemeProvider theme={themePerl}>
          <Tooltip title="Perl" arrow>
            <IconBox>
              <DiPerl />
            </IconBox>
          </Tooltip>
        </ThemeProvider>

        <Tooltip title="Bash" arrow>
          <IconBox>
              <SiGnubash />
          </IconBox>
        </Tooltip>
      </Box>
      {/* <Typography variant="h2" align="center">Notable Courses taken during University</Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" width="1000px" column="">
        <CourseBox>
          <Typography variant="h5" align="center">COMP6080 - Web Front-End Programming</Typography>
        </CourseBox>
        <CourseBox>
          <Typography variant="h5" align="center">COMP3311 - 	Database Systems</Typography>
        </CourseBox>
        <CourseBox>
          <Typography variant="h5" align="center">COMP2521 - 	Data Structures and Algorithms</Typography>
        </CourseBox>
        <CourseBox>
          <Typography variant="h5" align="center">COMP3121 - 	Algorithms & Programming Tech</Typography>
        </CourseBox>
        <CourseBox>
          <Typography variant="h5" align="center">COMP6771 - 	Advanced C++ Programming</Typography>
        </CourseBox>
      </Box> */}
      {/* <Typography variant="h4" align="center">Languages</Typography>
      <Typography variant="h6" align="center" style={{fontWeight: '400', textAlign: 'center'}}>English Chinese Korean Japanese</Typography> */}
    </Container>
  );
}
