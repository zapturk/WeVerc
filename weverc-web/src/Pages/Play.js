import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from "react";
import { useLocation } from "react-router-dom";

function Video(link, stime) {
  if (link.includes("youtube")) {
    link = link.replace("watch?v=", "embed/");
    link = link.concat("?start=", stime)
    return (
      <div>
        <iframe title="video" width="560" height="315" src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }
  else if (link.includes("vimeo")) {
    link = link.replace("vimeo.", "player.vimeo.").replace(".com/", ".com/video/");
    return (
      <div>
        <iframe title="video" src={link} width="640" height="268" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    );
  }
  else {
    return (
      <div>Video could not be found or was removed.</div>
    );
  }
}


function Play() {
  let location = useLocation();

  return (
    <Container>
      <Row>
        <h2>{location.state.title}</h2>
      </Row>
      <Row>
        {Video(location.state.url, location.state.stime)}
      </Row>
      <Row>
        <p>Description:<br/>{location.state.des}</p>
      </Row>
    </Container>
  );
}


export default Play;