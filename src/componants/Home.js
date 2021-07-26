import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap/";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getAllDeg: {},
            show: false,
            server: process.env.REACT_APP_SERVER
        }
    }
    componentDidMount = async () => {
        const getDegURL = `${this.state.server}/getDegURL`;
        const getDegAxios = await axios.get(getDegURL);
        this.setState({
            getAllDeg: getDegAxios.data,
            show: true
        })
    }
    createDigimonFAV=async(e,item)=>{
        e.preventDefault();
        const DegmondPostBody = {
            img:item.img,
            name:item.name,
            level:item.level,
        }
         console.log(item);
        await axios.post( `${this.state.server}/postDegURL`,DegmondPostBody);
       
    }
    render() {
        console.log(this.state.getAllDeg);
        console.log(this.state.show);
        return (
            
            <>
                {this.state.show && this.state.getAllDeg.map((item, idx) => {
                    return(<Card
                        key={idx}
                        style={{
                            width: "20rem",
                            margin: "15px",
                            display: "inline-block",
                            border: ".5px solid",
                            backgroundColor: "#B3C6F3",
                        }} >
                        <Card.Img
                            variant="top"
                            src={item.img}
                            style={{ border: ".5px solid", backgroundColor: "red" }}
                        />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.level}</Card.Text>
                            <Button
                                   onClick={(e) => this.createDigimonFAV(e, item)}
                                variant="primary"
                            >
                                Add to FAV
                     </Button>
                        </Card.Body>
                    </Card>)
                })}
            </>
        )
    }
}

export default Home
