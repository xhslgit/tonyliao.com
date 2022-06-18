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
    // border:2px solid black;
    // border-radius: 5px;
    margin-left: calc(60% - 50vw);
    width: 90vw;
    padding-bottom: 200px;
    // margin: 0 auto;
    // padding: 0 5px;
  `
  const TextContainer = styled.div`
  text-align: ${align};
  // border:2px solid black;
  border-radius: 5px;
  width:70%;
  padding: 0 5px;
  `
  const ImgContainer = styled.div`
  // border:2px solid black;
  border-radius: 5px;
  width:800;
  padding: 0 5px;
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
