import React, {Component} from 'react';
import { getAllActivities } from '../redux/actions.js';
import Header from './Header.jsx';
import ActivityFeed from './ActivityFeed.jsx';
import ActivityDetail from './ActivityDetail.jsx';
import Footer from './Footer.jsx';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';


class App extends Component {
    //Get all activities automatically when opening the program
    componentDidMount(){
        this.props.getAllActivities();
    }
    //Update all activities when archived an activities
    shouldComponentUpdate(){
        this.props.getAllActivities();
        return true;
    }
    //Get activities which are unarchived and inbound
    getInboundActivities(){
        const inboxActivities=new Array();
        const allActivities=this.props.allActivities;
        allActivities.map(activity=>{
            if(activity.is_archived==false&&activity.direction=='inbound'){
                inboxActivities.push(activity);
            }
        });
        return inboxActivities
    }
    render(){
        return (
            <div className='container'>
              <Header/>
              <Switch>
              <Route path='/inboxActivities/'><ActivityFeed className='container-view' allActivities={this.getInboundActivities()}/></Route>
              <Route path='/allActivities/'><ActivityFeed allActivities={this.props.allActivities}/></Route>
              <Route path='/activityDetail/:activityid' component={ActivityDetail}/>
              </Switch>
              <Footer allActivities={this.props.allActivities}/>
                                     
            </div>
        );
    }
}
export default connect(
    state=>({allActivities:state.allActivities}),
    {getAllActivities}
)(App)

