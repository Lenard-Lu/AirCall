import React, {Component} from 'react';
class MissedCalls extends Component{
    //Calculate the missed call number and show it
    render(){
        const {allActivities}=this.props;
        let missedNumber=0;
        allActivities.map(activity=>{
            if(activity.call_type=='missed'){
                missedNumber+=1;
            }
        }) 
        return(
            <div className='missedCalls'><p>{missedNumber}</p></div>
        )   
    }
}
export default MissedCalls