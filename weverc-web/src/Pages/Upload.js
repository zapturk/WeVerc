import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import React from "react";
import {Link} from "react-router-dom"

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: '', 
            title: '',
            des: '',
            program: '',
            stime: '',
            etime: '',
            keyword: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        // debug alert
        // alert('url: ' + this.state.url + '\n'
        //     +'title: ' + this.state.title + '\n'
        //     +'des: ' + this.state.des + '\n'
        //     +'program: ' + this.state.program + '\n'
        //     +'stime: ' + this.state.stime + '\n'
        //     +'etime: ' + this.state.etime + '\n'
        //     +'keyword: ' + this.state.keyword + '\n');
        var error = "";
        
        // if(typeof this.state.url === "undefined" || (!(this.state.url.includes("https://www.youtube.com")) || !(this.state.url.includes("https://vimeo.com/"))))
        if(typeof this.state.url === "undefined"){
            error = error.concat("Not a valid link \n");
        }

        if(typeof this.state.url === "undefined"  || this.state.title === ""){
            error = error.concat("You must have a title \n");
        }

        if(typeof this.state.url === "undefined" || this.state.keyword === ""){
            error = error.concat("You must have as least 1 key word \n");
        }
        
        if(error !== ""){
            alert(error);
            event.preventDefault();
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2>Uplade a Video</h2>
                </Row>
                <Row>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Video url</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small"  aria-describedby="inputGroup-sizing-sm" id="url" value={this.state.url} onChange={this.handleChange}/>
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="title" value={this.state.title} onChange={this.handleChange}/>
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="des" value={this.state.des} onChange={this.handleChange}/>
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Program</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="program" value={this.state.program} onChange={this.handleChange}/>
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Start Time</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="stime" value={this.state.stime} onChange={this.handleChange}/>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">End Time</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="etime" value={this.state.etime} onChange={this.handleChange}/>
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Keywords</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="keyword" value={this.state.keyword} onChange={this.handleChange}/>
                    </InputGroup>
                </Row>
                <Row>
                    <Link to={{pathname: '/play', state: this.state}}><Button variant="outline-info" onClick={this.handleSubmit}>Upload</Button></Link>
                    <Button variant="outline-info" href="/">Cancle</Button>
                </Row>
            </Container>
        );
    }
}

export default Upload;