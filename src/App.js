import React, { Component } from 'react'
import MoodInfo from './MoodInfo/MoodInfo'
import AddDay from './MoodInfo/AddDay'
import uuid from 'uuid';
export class App extends Component {

state = {
    days: [
        {
            id: uuid.v4(),
            date: '12-3-19',
            moodimg: 'https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SX425_.jpg',
            experience: 'today was a good day',
            improvement: 'work more'
        },
        {
            id: uuid.v4(),
            date: '12-13-19',
            moodimg: 'https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SX425_.jpg',
            experience: 'today was a good day',
            improvement: 'have more fun'
        },
        {
            id: uuid.v4(),
            date: '12-12-19',
            moodimg: 'https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SX425_.jpg',
            experience: 'today was a good day',
            improvement: 'be more productive'
        }
    ]
}


delMood = (id) => {
this.setState({days: [...this.state.days.filter(day => day.id !== id)]})
}
addDay = (date, moodimg, experience, improvement) =>{
   const newDay = {
        id:uuid.v4(),
        date:date,
        moodimg:moodimg,
        experience: experience,
        improvement: improvement
    }
    this.setState({days: [newDay, ...this.state.days ]})


}


    
    render() {
        return (
            <div >
                <h1 style={{ fontFamily: 'Papyrus, fantasy',color:'#FFD700', fontSize:'60px', position:'relative', textAlign:'center'}}>MoodLog</h1>
                <AddDay addDay = {this.addDay}/>
               <MoodInfo days ={this.state.days} delMood={this.delMood} /> 
            </div>
        )
    }
}

export default App
