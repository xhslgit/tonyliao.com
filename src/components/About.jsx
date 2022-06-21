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

  const SkillsBox = styled(Box)`
    margin: auto;
    padding-bottom: 200px;
    width: 800px;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  `;
  const IconBox = styled(Box)`
    color: ${props => props.theme.main};
    margin: 5px;
    padding: 0px;
    font-size: 100px;
    transition: transform .2s;
    &:hover {
      transform: scale(1.2);
    }
    @media only screen and (max-width: 600px) {
      font-size: 50px;
    }
  `;

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
      <h1 className="title-font" align="center" style={{paddingTop: '100px'}}>Skills</h1>
      <SkillsBox display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around">

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
      </SkillsBox>
    </Container>
  );
}
