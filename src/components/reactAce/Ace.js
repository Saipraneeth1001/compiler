import React from 'react';
import Ace from './AceEditor';
import './Ace.css';
import axios from 'axios';

const Client_secret = '2d8776b8cd8fe6a2620876aec1e7b3d1e51b99d2'
const data = {
    'client_secret': Client_secret,
    'async': 0,
    'source': "print 'Hello world'",
    'lang': "PYTHON",
    'time_limit': 5,
    'memory_limit': 262144,
};
const Run_url = 'https://api.hackerearth.com/v3/code/run/';
class AceEditor extends React.Component {
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick (e) {
        e.preventDefault();
        axios.post(url,data).then(res => {
              console.log(res);
          }).catch(err=>{
              console.log(err);
          })
            
          
    }
       
    render() {

        
        return(
            <div className="container">
                <div className="content">
                    <Ace />
                </div>
                <button className="btn btn-info" onClick={this.handleClick}>Compile</button>
          </div>
            );
    }
}

export default AceEditor;