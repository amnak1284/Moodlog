
import React, { Component } from 'react'

export default class MoodItem extends Component {
    render() {
        return (
            <div>
                <p style={{border: 'dotted', backgroundColor:'#FFDAB9'}}>
                <button style={btnstyle} onClick={this.props.delMood.bind(this, this.props.id)}>x</button>
                <p>{this.props.day.date} </p>
                <img style={imgstyle} src={this.props.day.moodimg}></img>
                <p>{this.props.day.experience}</p>
                <p>{this.props.day.improvement}</p>
               
                </p>
            </div>
        )
    }

    
}
const imgstyle ={
    width: '50px',
    borderRadius: '50%'
    

}
const btnstyle = {
    backgroundColor: '	#FFFACD',
    border: 'hidden'
   
}
