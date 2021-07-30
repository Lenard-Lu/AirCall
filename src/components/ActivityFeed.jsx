import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import Moment from 'moment';
import inboundMissed from '../assets/images/inboundMissed.png';
import inboundAnswered from '../assets/images/inboundAnswered.png';
import outboundMissed from '../assets/images/outboundMissed.png';
import outboundAnswered from '../assets/images/outboundAnswered.png';
import voicemail from '../assets/images/voicemail.png';
import verticalDot from '../assets/images/verticalDot.png';
class ActivityFeed extends Component{
        
    render(){
        //Get all activities from called compoent
        const {allActivities}=this.props;
        Moment.locale('en');
        return(
            <div className='activityFeed'>                
                <ul>
                    {
                        //If is_archived is false then show activity, otherwise show null
                        allActivities.map(activity=>(                    
                        activity.is_archived===false?                                                 
                        <li key={activity.id} onClick={()=>{this.props.history.push(`/activityDetail/${activity.id}`)}}>
                            <div className='createdTime'>{Moment(activity.created_at).format("MMMM, DD YYYY")}</div>
                            <div className='activity'>
                                <div>
                                    {activity.direction=='inbound'&&activity.call_type=='missed'?<img src={inboundMissed}/>:
                                    activity.direction=='inbound'&&activity.call_type=='answered'?<img src={inboundAnswered}/>:
                                    activity.direction=='outbound'&&activity.call_type=='missed'?<img src={outboundMissed}/>:
                                    activity.direction=='outbound'&&activity.call_type=='missed'?<img src={outboundAnswered}/>:<img src={voicemail}/>}                                
                                </div>
                                <div className='fromAndTo'>
                                    <p>{activity.from}</p>
                                    <p className='callTo'>tried to call on {activity.to}</p>
                                </div>
                                <div>
                                    <img className='verticalDot' src={verticalDot} alt="verticalDot" />
                                </div>
                                <div className='time'><p>{ Moment(activity.created_at).format("LT").substr(0,5)} <span className='twelveHour'>{ Moment(activity.created_at).format("LT").substr(5,7)}</span></p></div>
                            </div>
                        </li>
                        :null
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(ActivityFeed)