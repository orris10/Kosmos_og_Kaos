import { render } from '@testing-library/react';
import React from 'react'
import ImageListView from '../Componets/ImageListView';
import HeaderTextComponent from '../Componets/HeaderTextComponent'
import SearchBarComponent from '../Componets/SearchBarComponent';


import axios from 'axios';
class FrontScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            responceData: null,
        };
        this.handleInput = this.handleInput.bind(this);
      }

    handleInput = async(input) =>{
        if(input !==''){
            let responce = await axios.get(`https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=${input}&searchType=image&key=AIzaSyCDcrHjUgVWnM0rxgsdTrv-n23-55XyltU`)
            this.setState({responceData: responce.data})
        }
        // set data empty to remove all image of screen
        else{
            this.setState({responceData: []})
        }
    }
    render(){
        return(
            <div>
                <HeaderTextComponent />
                <SearchBarComponent handleInput={this.handleInput}/>
                <ImageListView data={this.state.responceData} />
            </div>
        );
    }
}


export default FrontScreen;