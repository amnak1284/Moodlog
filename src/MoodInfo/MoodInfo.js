import React, { Component } from 'react'
import MoodItem from './MoodItem';

export default class MoodInfo extends Component {
   render() {
      return this.props.days.map((day) =>(
         <MoodItem  id={day.id} day= {day}  delMood={this.props.delMood}/>
      ));
   }
}
