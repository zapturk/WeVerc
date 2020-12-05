import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import React from "react";
import VideoImg from "../Img/video.png"
import PlaylistImg from "../Img/playlist.jpg"
import { Link } from "react-router-dom"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.exampleVideo = {
            videos: []
        };
        this.exampleProgram = {
            videos: [],
            videoPos: 0
        };

        this.exampleVideo.videos.push(
            {
                url: 'https://www.youtube.com/watch?v=rDFtpN8J92Q',
                title: 'Tash Sultana Stratocaster',
                des: 'About Fender:\nFender Musical Instruments Corporation is the world’s foremost manufacturer of guitars, basses, amplifiers and related equipment. With an illustrious history dating back to 1946, Fender has touched and transformed music worldwide and in nearly every genre: rock ‘n’ roll, country and western, jazz, rhythm and blues, and many others',
                program: '',
                stime: '0',
                keyword: 'Fender',
                order: 0
            });

        this.exampleProgram.videos.push(
            {
                url: 'https://www.youtube.com/watch?v=9p9R-8K-SFA',
                title: 'Trivium Corey Beaulieu Dishes on His New Pro Series Signature King Vs',
                des: 'Trivium guitarist Corey Beaulieu has long carried a torch for the famed Jackson King V.',
                program: 'Cool Guitar Stuff',
                stime: '16',
                keyword: 'King V',
                order: 0
            });

        this.exampleProgram.videos.push(
            {
                url: 'https://vimeo.com/88373396',
                title: 'The Andromeda Dude Ranch',
                des: 'Space age cowboy song with 12 String Rickenbacker, Chapman Stick , Ibenez Jem and Maschine',
                program: 'Cool Guitar Stuff',
                stime: '7',
                keyword: 'Cool Song',
                order: 1
            });

        this.exampleProgram.videos.push(
            {
                url: 'https://www.youtube.com/watch?v=rDFtpN8J92Q',
                title: 'Tash Sultana Stratocaster',
                des: 'About Fender:\nFender Musical Instruments Corporation is the world’s foremost manufacturer of guitars, basses, amplifiers and related equipment. With an illustrious history dating back to 1946, Fender has touched and transformed music worldwide and in nearly every genre: rock ‘n’ roll, country and western, jazz, rhythm and blues, and many others',
                program: 'Cool Guitar Stuff',
                stime: '0',
                keyword: 'Fender',
                order: 2
            });
    }


    render() {
        return (
            <Container>
                <Row>
                    <h2>Home</h2>
                </Row>
                <Row>
                    <p>
                        Example video click ↓
                    </p>
                </Row>
                <Row>
                    <div>
                        <Link to={{ pathname: '/play', state: this.exampleVideo }}><Image src={VideoImg} alt="..." width={580} height={322}/></Link>
                    </div>
                </Row>
                <br />
                <Row>
                    <p>
                        Example program click ↓
                    </p>
                </Row>
                <Row>
                    <div>
                        <Link to={{ pathname: '/play', state: this.exampleProgram }}><Image src={PlaylistImg} alt="..." width={580} height={322} /></Link>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Home;