import React from 'react'
//import { ThemeProvider } from 'react-bootstrap';
//import Lightbox from "react-image-lightbox";
import './css/imageDetail.css'
class ImageDetail extends React.Component{

    constructor(props){
        super(props);

    }


    render(){
        return (
            <div className="tile">
                <img className="img" src={this.props.detailData.link}  alt="not-found" />
                <h4 className="image_text">{this.props.detailData.title}</h4>
            </div>
        );
    };
};
export default ImageDetail;