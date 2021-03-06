import React, {Fragment}  from 'react';
import { Typography, Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';
import { DiGithubBadge } from "react-icons/di";
import { ThemeProvider } from 'styled-components';
export default function Project ({title, align, desc, images, github}) {
  const themeGh = {
    main: "black",
    hover: "#4d4d4d"
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
  const ProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: calc(60% - 50vw);
    width: 90vw;
    padding-bottom: 200px;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      margin: auto;
      padding: auto;
    }
  `
  const TextContainer = styled.div`
    text-align: ${align};
    border-radius: 5px;
    width:70%;
    padding: 0 5px;
    @media only screen and (max-width: 600px) {
      text-align: center;
      width: 100%
    }
  `
  const ImgContainer = styled.div`
    border-radius: 5px;
    width: 800;
    padding: 0 5px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  `

  const newDesc = desc.split('\n').map(str =><p>{str}</p>);
  return (
    <ProjectContainer>
      {align === "right" ?
        <Fragment>
          <ImgContainer>
          <SimpleImageSlider 
            width={800}
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={1.5}
          />
          </ImgContainer>
          <TextContainer>
            <span className="title-font">{title}</span>
            <Typography variant="h6">{newDesc}</Typography>
            <ThemeProvider theme={themeGh}>
              <Tooltip title="Github" arrow>
                <StyledIcon href={github}><DiGithubBadge /></StyledIcon>
              </Tooltip>
            </ThemeProvider>
          </TextContainer>
        </Fragment>
      :
        <Fragment>
          <TextContainer>
          <span className="title-font">{title}</span>
            <Typography variant="h6">{newDesc}</Typography>
            <ThemeProvider theme={themeGh}>
              <Tooltip title="Github" arrow>
                <StyledIcon href={github}><DiGithubBadge /></StyledIcon>
              </Tooltip>
            </ThemeProvider>
          </TextContainer>
          <ImgContainer>
          <SimpleImageSlider 
            width={800}
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={1.5}
            bgColor="#111"
          />
          </ImgContainer>
        </Fragment>
      }

    </ProjectContainer>
  );
};
