import React from 'react';
import { Container, Typography, Box, Tooltip} from '@material-ui/core';
import { DiGithubBadge, DiDatabase, DiHaskell, DiJavascript, DiJava, DiHtml5, DiMarkdown, DiPerl, DiPython, DiReact} from "react-icons/di";
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
  IconBox.defaultProps = {
    theme: {
      main: "black"
    }
  }
  return (
    <Container maxWidth='xl' style={ContStyle}>
      <Typography variant="h5" align="center" style={{fontWeight: '500'}}>
        I am a full stack developer<br></br>
        currently pursuing a Bachelor of Engineering (Honours) majoring in Software (2019-2023)<br></br>
        at the University of New South Wales<br></br>
        based in Sydney, Australia <br></br>
        <GiAustralia />
        <br></br>
        I enjoy creating stuff
      </Typography>
      <Typography variant="h2" align="center">Skills</Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" width="800px" style={{margin: 'auto'}}>
        <ThemeProvider theme={themeHa}>
          <Tooltip title="Haskell" arrow>
            <IconBox >
              <DiHaskell />
            </IconBox>
          </Tooltip>
        </ThemeProvider>
        <ThemeProvider theme={themeHTML}>
          <IconBox>
            <DiHtml5 />
          </IconBox>
        </ThemeProvider>

        <IconBox>
          <DiDatabase />
        </IconBox>
        <ThemeProvider theme={themeJS}>
          <IconBox>
            <DiJavascript />
          </IconBox>
        </ThemeProvider>

        <IconBox>
          <DiJava />
        </IconBox>
        <IconBox>
          <DiGithubBadge />
        </IconBox>
        <IconBox>
          <DiMarkdown />
        </IconBox>
        <IconBox>
          <DiPerl />
        </IconBox>
        <IconBox>
          <DiPython />
        </IconBox>
        <IconBox>
          <DiReact />
        </IconBox>
        <IconBox>
          <CgCPlusPlus />
        </IconBox>
        <IconBox>
          <SiGnubash />
        </IconBox>
      </Box>
      <Typography variant="h2" align="center">Notable Courses taken during University</Typography>
      <Typography variant="h3" align="center">Languages</Typography>
      <Typography variant="caption1" align="center" style={{fontWeight: '400'}}>English Chinese Korean Japanese</Typography>
    </Container>
  );
}
