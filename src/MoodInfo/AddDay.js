import React, { Component } from 'react'



export default class AddDay extends Component {
    state ={
        date: '',
        moodimg: '',
        experience: '',
        improvement:''
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addDay(this.state.date, this.state.moodimg, 
        this.state.experience, this.state.improvement);
        this.setState({date:'', moodimg:'', experience:'',improvement:''})

    }
    
    render() {
        return (
            <div>
                <form style={{display:'flex',margin:'auto'}} onSubmit = {this.onSubmit}>
                    <input style={{width:'50%'}} type="date" name= "date" placeholder="date" onChange={this.onChange}/>
                    <input style={{width:'50%'}}type="text" name ="moodimg" placeholder="image"onChange={this.onChange}/>
                    <input style={{width:'50%'}}type="text" name ="experience"placeholder="how was your day" onChange={this.onChange}/>
                    <input style={{width:'50%'}} type="text" name= "improvement" placeholder="what can you improve" onChange={this.onChange}/>
                    <ul>
                    
                    <input style={{ backgroundColor:'orange',borderRadius:'8px', fontSize:'12px',display:'inlineBlock', textDecoration:'none', fontSize:'16px'}} type="submit" value="Submit"/>
                    
                    </ul>
                </form>
            </div>
        )
    }
}
