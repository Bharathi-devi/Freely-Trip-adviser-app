import {FETCH_DATA, FETCH_FONT} from './actionTypes'

const appState ={
    loading: true,
    list:[],
    fontLoaded:false  
}
const tripReducer= (state=appState , action) => {
switch(action.type){
    case FETCH_DATA: return {
        ...state, loading:false, list: action.payload
    }
    case FETCH_FONT:
        return{
            ...state, fontLoaded: true
        }
    
     default:  return state
}
}

export default tripReducer;