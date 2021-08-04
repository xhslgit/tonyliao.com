import React from 'react';
import { Tooltip, Container, Typography} from '@material-ui/core';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { ImArrowDown2 } from "react-icons/im";
export default function Intro ({onscroll, about}) {
  const themeLi = {
    main: "#0a66c2",
    hover: "#509eec"
  }
  const themeGh = {
    main: "black",
    hover: "#4d4d4d"
  }
  const ContStyle = {
    margin: 'auto',
    marginTop: '200px',
    height:'calc(100vh - 200px)',
  }
  const StyledIcon = styled.a`
    text-decoration: none;
    color: ${props => props.theme.main};
    font-size: 50px;
    &:visited {
      color: ${props => props.theme.main};
    }
    &:hover {
      color: ${props => props.theme.hover};
    }
  `;
  const upDown = keyframes`
  0%, 100% {
    opacity: 75%;
    transform: translateY(0);
  }
  50% {
    opacity: 100%;
    transform: translateY(10px);
  }
`;
  const StyledDown = styled.div`
    align: center;
    font-size: 75px;
    bottom: 1px;
    width:75px;
    margin: 0 auto;
    cursor: pointer;
    animation: ${upDown} 3s linear infinite;

    &:hover {
      color: #4d4d4d;
    }
  `;
  return (
    <Container maxWidth='xl' style={ContStyle}>
      <Typography variant="subtitle" align="left" style={{fontWeight: '600'}}>I am</Typography>
      <Typography letterSpacing={16} variant="h1" align="center" >Tony Liao</Typography>
      <Typography variant="subtitle" align="left" style={{fontWeight: '600'}}>a web & software developer from Sydney, Australia.</Typography><br></br>
        <ThemeProvider theme={themeGh}>
          <Tooltip title="Github" arrow>
            <StyledIcon href="https://github.com/xhslgit"><DiGithubBadge /></StyledIcon>
          </Tooltip>
        </ThemeProvider>

      <ThemeProvider theme={themeLi}>
        <Tooltip title="LinkedIn" arrow>
          <StyledIcon href="https://www.linkedin.com/in/tony-liao-b5136717a/"><AiFillLinkedin /></StyledIcon>
        </Tooltip>
      </ThemeProvider>
      <StyledDown onClick={() => onscroll(about)}>
        <ImArrowDown2 />
      </StyledDown>
    </Container>
  )
}