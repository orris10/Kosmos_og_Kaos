import { render } from '@testing-library/react';
import React from 'react'
import './css/grid.css';
import ImageDetail from './ImageDetail';

class ImageListView  extends React.Component{
    constructor(props){
        super(props);
    
    }
    render(){
        if(this.props.data !== null && this.props.data.items !== undefined){
            var items =[]
            this.props.data.items.map((value, index) =>{
                items.push(              
                     <ImageDetail detailData={value} key={index}/>
                )               
            })
        }
        return(
            <div className="tiles">
                {items}
            </div>
        )
    }
}

export default ImageListView;