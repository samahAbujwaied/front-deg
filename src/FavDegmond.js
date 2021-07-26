import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap/";
import ModalDigmond from './ModalDigmond'
export class FavDegmond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getAllDeg: [],
            show: false,
            server: process.env.REACT_APP_SERVER,
            showModel:false,
            index:'',
            imgPath:'',
            name:'',
            level:'',
        }
    }
    componentDidMount = async () => {
        const getDegURL = `${this.state.server}/getDegFavURL`;
        const getDegAxios = await axios.get(getDegURL);
        this.setState({
            getAllDeg: getDegAxios.data,
            show: true
        })

        
    }
    deleteDigimonFAV = async (e, idx) => {
        const id = this.state.getAllDeg[idx]._id
        const deleteDegURL = `${this.state.server}/deleteDegFavURL/${id}`;
        const deleteDegAxios = await axios.delete(deleteDegURL);
        this.setState({
            getAllDeg: deleteDegAxios.data,
            show: true
        })
       ;
    }
    updateDigimonFAV=(idx)=>{
        this.setState({
           showModel:true,
           imgPath:this.state.getAllDeg[idx].img,
            name:this.state.getAllDeg[idx].name,
            level:this.state.getAllDeg[idx].level,
            index:idx
        })
      
    }
    onClose =()=>{
        this.setState({
            showModel:false
        })
    }
    updateImgPath=(e)=>{
        this.setState({
            imgPath:e.target.value,
        })
    }
    updatename=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }
    updatelevel=(e)=>{
        this.setState({
            level:e.target.value,
        })
    }

    UpdateData=async(e)=>{
        e.preventDefault();
        const UpdateBody = {
            img:this.state.imgPath,
            name:this.state.name,
            level:this.state.level,

        }
        const updateDegURL = `${this.state.server}/updateDegFavURL/${this.state.getAllDeg[this.state.index]._id}`;
        const updateDegAxios = await axios.put(updateDegURL,UpdateBody);
        this.setState({
            getAllDeg: updateDegAxios.data,
        })

    }

    render() {
        console.log(this.state.getAllDeg);
        console.log(this.state.show);
        console.log(this.state.index);
        console.log(this.state.imgPath);
        console.log(this.state.name);
        console.log(this.state.level);
        return (

            <>
                {this.state.show && this.state.getAllDeg.map((item, idx) => {
                    return (<Card
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
                            style={{ border: ".5px solid", backgroundColor: "red" }}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.level}</Card.Text>
                            <Button onClick={(e) => this.deleteDigimonFAV(e, idx)} variant="danger">
                                Delete
                            </Button><br/><br/>
                            <Button onClick={() => this.updateDigimonFAV(idx)} variant="warning">
                                Update
                            </Button>
                        </Card.Body>
                    </Card>)
                   
                })}
                {
                <ModalDigmond
                showModel={this.state.showModel}
                close={this.onClose}
                imgPath={this.state.imgPath}
                name={this.state.name}
                level={this.state.level}
                updateImgPath={this.updateImgPath}
                updatename={this.updatename}
                updatelevel={this.updatelevel}
                UpdateData={this.UpdateData}
                />
                }
            </>
        )
    }
}

export default FavDegmond
