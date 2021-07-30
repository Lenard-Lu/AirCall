import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getActivityDetail,updateActivity } from '../redux/actions';
import Moment from 'moment';
import archive from '../assets/images/archive.png';

class ActivityDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            is_archived:''
        }
    }
    //Match activity ID parameter and get activity detail
    componentDidMount(){
        const activityID=this.props.match.params.activityid;
        this.props.getActivityDetail(activityID);
    }
     //Set is_archive to true and send update request
    updateActivity(){
        const activityDetail=this.props.activityDetail;
        this.setState({is_archived:true},()=>{
            this.props.updateActivity(activityDetail.id,this.state)
            this.props.history.replace('/allActivities/');
        })        
        
    }
    render(){
        Moment.locale('en');
        const { id,created_at,direction,from,to,via,duration,is_archived,call_type}=this.props.activityDetail;
        return(
            <div className='detail'>
                <div className='archive' onClick={this.updateActivity.bind(this)}>
                    <img src={archive} alt="archive" />
                    <span>archive this call</span> 
                </div>
                <ul className='detailList'>
                    <li>Activity ID: {id}</li>
                    <li>Call Date: {Moment(created_at).format("MMMM, DD YYYY")}</li>
                    <li>Call Time: { Moment(created_at).format("LT")}</li>
                    <li>Direction: {direction}</li>
                    <li>From: {from}</li>
                    <li>To: {to}</li>
                    <li>Via: {via}</li>
                    <li>Duration: {duration} s</li>
                    <li>Is Archived? {String(is_archived)}</li>
                    <li>Call Type: {call_type}</li>
                </ul>                               
        </div>
        )
        
    }
}

export default  connect(
    state=>({activityDetail:state.activityDetail}),
    {getActivityDetail,updateActivity}
)(ActivityDetail)