import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import React from "react";
import Button from 'react-bootstrap/Button';
import Left from "../Img/left.png";
import Right from "../Img/right.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"

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
  let videoPos = location.state.videoPos;

  function handleLeft() {
    if (videoPos > 0) {
      location.state.videoPos = --videoPos;
    }
  }

  function handleRight() {
    if (videoPos < location.state.videos.length - 1) {
      location.state.videoPos = ++videoPos;
    }
  }

  function makeFile() {
    let filename = location.state.videos[videoPos].program + ".verc";
    let contentType = "application/verc;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(location.state)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(location.state));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  if (location.state.videos.length === 1) {
    console.log("only one video");
    return (
      <Container>
        <Row>
          <h2>{location.state.videos[0].title}</h2>
        </Row>
        <Row>
          {Video(location.state.videos[0].url, location.state.videos[0].stime)}
        </Row>
        <Row>
          <p>Description:<br />{location.state.videos[0].des}</p>
        </Row>
      </Container>
    );
  }
  else {
    console.log("more than one");
    return (
      <Container>
        <Row>
          <h1>Program: {location.state.videos[videoPos].program}</h1>
        </Row>
        <Row>
          <h2>{location.state.videos[videoPos].title}</h2>
        </Row>
        <Row>
          <Link to={{ pathname: '/play', state: location.state }}><Image src={Left} width={50} height={50} onClick={handleLeft} /></Link>
          {Video(location.state.videos[videoPos].url, location.state.videos[videoPos].stime)}
          <Link to={{ pathname: '/play', state: location.state }}><Image src={Right} width={50} height={50} onClick={handleRight} /></Link>
        </Row>
        <Row>
          <p>Description:<br />{location.state.videos[videoPos].des}</p>
        </Row>
        <Row>
          <Button variant="outline-info" onClick={makeFile}>Download Playlist</Button>
        </Row>
      </Container>
    );
  }
}


export default Play;