import React, {Fragment}  from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function Project ({title, align, desc}) {
  const ProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    border:2px solid black;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
    padding: 0 5px;
  `
  const TextContainer = styled.div`
  text-align: ${align};
  border:2px solid black;
  border-radius: 5px;
  width:70%;
  padding: 0 5px;
  `
  const ImgContainer = styled.div`
  border:2px solid black;
  border-radius: 5px;
  width:30%;
  padding: 0 5px;
  `
  const newDesc = desc.split('\n').map(str =><p>{str}</p>);
  return (
    <ProjectContainer>
      {align === "right" ?
        <Fragment>
          <ImgContainer>
          </ImgContainer>
          <TextContainer>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{newDesc}</Typography>
          </TextContainer>
        </Fragment>
      :
        <Fragment>
          <TextContainer>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{newDesc}</Typography>
          </TextContainer>
          <ImgContainer>
          </ImgContainer>
        </Fragment>
      }

    </ProjectContainer>
  );
};
