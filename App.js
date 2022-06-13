import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment'; 
import note from './Notes-bro.png'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Add_remainder, Remove_remainder, Clear_remainders} from './actionCreator';

class App extends Component {
  state ={
    text:'',
    date:new Date() 
  }
  Render_Remain = () => {
    const {reminders} = this.props;
    
    return (
      <ul className='list-group'>
        {
          
          reminders.map(rem => {
            return (
              <li key={rem.id} className='list-group-item'>
                 <div>{rem.text}</div>
                <div>{moment(new Date(rem.date)).fromNow()}</div>
                <button className='btn btn-danger' onClick={() => this.props.Remove_remainder(rem.id)}>x</button> 
              </li> 
            )
          })
        }

      </ul>
    )
  }
  render(){
        // console.log( this.props)
    return(

      <div className='container container-fluid text-center'>
        <div className='main mt-5 p-4 rounded'>
          <h3 className='pt-3 px-4 text-info'>remind me schedule </h3>
          <img src={note} alt="note img"/>
          <div className='inputBlock  text-center'>
            <input className='rounded my-2 p-2 bg-white border-0'
            
            onChange={(e) => this.setState({text:e.target.value})} value={this.state.text} type='text' placeholder='Enter what you think ? ' />
          
              <DatePicker
              value={this.state.date}
              className='d-block rounded my-2 p-2 bg-white border-0'
              placeholderText='Date Schedule'
            selected={this.state.date}
            onChange={(date) => {this.setState({date:date})}}
            showTimeSelect
            dateFormat="yyy-mm-dd, HH:mm:ss a"
            timeCaption='time'
/>
          </div>   
          {/*  */}
          <div className='actionBlock pb-5'>
            <button  onClick={() => 
            {this.props.Add_remainder(this.state.text, this.state.date)
              this.setState({text: '', date: ''})
          }}
           className='btn btn-info text-white add py-1 px-3 rounded mx-1'>add reminder</button>
            <button onClick={() => this.props.Clear_remainders()} className='btn btn-danger text-white clear  py-1 px-3 rounded mx-1 d-block '>clear all</button>
            {this.Render_Remain()}
        
          </div>
        </div>
      </div>

    )
  
}
}

export default connect(state => {
   return {
    reminders : state
  }
} , {
  Add_remainder,
   Remove_remainder,
   Clear_remainders
  
  })(App);
 
