import ajax from "./ajax";

//Send request to get all activities
export const reqAllActivities=()=>ajax('/activities');
//Send request to get specific activities
export const reqActivityDetail=(activityID)=>ajax('/activities',{activityID});
//Send request to update specific activity
export const reqUpdateActivity=(activityID,{is_archived})=>ajax('/activities/'+activityID,{is_archived},'POST')
//Send request to reset activities
export const reqResetActivity=()=>ajax('/reset/');
