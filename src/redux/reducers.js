import { combineReducers } from "redux";

import {
    GET_ALL_ACTIVITIES,
    GET_ACTIVITIES_DETAIL
} from './action-types'

const initAllActivities=[]

//Reducer that generate all activities
function allActivities(state=initAllActivities,action){
    switch(action.type){
        case GET_ALL_ACTIVITIES:
            return action.data
        default:
            return state
    }
}

//Reducer that generate activity detail
const initActivityDetail={
    id:'',
    created_at:'',
    direction:'',
    from:'',
    to:'',
    via:'',
    duration:'',
    is_archived:'',
    call_type:''
}
function activityDetail(state=initActivityDetail,action){
    switch(action.type){
        case GET_ACTIVITIES_DETAIL:
            return action.data
        default:
            return state
    }
}
export default combineReducers({
    allActivities,
    activityDetail
})