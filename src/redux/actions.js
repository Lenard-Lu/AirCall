import { 
    GET_ALL_ACTIVITIES, 
    GET_ACTIVITIES_DETAIL,
    UPDATE_ACTIVITY,
    RESET_ACTIVITY
} from "./action-types";

import { 
    reqAllActivities,
    reqActivityDetail,
    reqUpdateActivity,
    reqResetActivity
} from "../api";
//Get all activities synchronization action
const allActivities=(allActivities)=>({type:GET_ALL_ACTIVITIES,data:allActivities});
//Get activity detail synchronization action
const activityDetail=(activityDetail)=>({type:GET_ACTIVITIES_DETAIL,data:activityDetail});
//Get update result synchronization action
const updateResult=(updateResult)=>({type:UPDATE_ACTIVITY,data:updateResult})
//Get reset result synchronization action
const resetResult=(resetResult)=>({type:RESET_ACTIVITY,data:resetResult});

//Get all activities asynchronization action
export const getAllActivities=()=>{
    return async dispatch=>{
        const response =await reqAllActivities()
        if(response.status==200){
            dispatch(allActivities(response.data))
        }
    }
}
//Get activity detail asynchronization action
export const getActivityDetail=(activityID)=>{
    return async dispatch=>{
        const response =await reqActivityDetail(activityID)
        if(response.status==200){
            dispatch(activityDetail(response.data))
        }
    }
}
//Update activity asynchronization action
export const updateActivity=(activityID,is_archived)=>{
    return async dispatch=>{
        const response =await reqUpdateActivity(activityID,is_archived)
        if(response.status==200){
            dispatch(updateResult(response.data))
        }
    }
}
//Reset activity asynchronization action
export const resetActivity=()=>{
    return async dispatch=>{
        const response =await reqResetActivity()
        if(response.status==200){
            dispatch(resetResult(response.data))
        }
    }
}