import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllActivities } from '../redux/actions';
import phoneCall from '../assets/images/phoneCall.png';
import settings from '../assets/images/settings.png';
import user from '../assets/images/user.png';
import circle from '../assets/images/circle.png';
import { Redirect, withRouter } from 'react-router-dom';
import phoneButton from '../assets/images/phoneButton.png';

import MissedCalls from './MissedCalls.jsx';


class Footer extends Component { 
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true,            
        }
    };
    toAllActivities(){        
        this.props.history.replace('/allActivities/')  
        return true;      
    }   
    //Goggle the missed calls 
    handleClick() {
        this.setState(({
          isToggleOn: false,
        }));
      }

    render(){
        const {allActivities}=this.props
        
      return (
        <footer className='footer'> 
            <div className='flex-item' onClick={(event) => {this.toAllActivities();this.handleClick()}}>
                <img src={phoneCall} alt="phoneCall" />  
                {this.state.isToggleOn ? <MissedCalls allActivities={allActivities}/>  : null}                                          
            </div>         
            <div className='flex-item'>
                <img src={user} alt="user"/>
            </div>            
            <div className='flex-item'>
                <img src={settings} alt="settings" />                    
            </div>
            <div className='flex-item'>   
                <img src={circle} alt="circle" />                             
            </div>
            <img src={phoneButton} alt="phoneButton" className='phoneButton' /> 
        </footer>
      )
    }
  };
  
  export default withRouter (Footer)
