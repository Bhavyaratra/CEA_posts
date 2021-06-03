
const initState={
    loading: true,
	error: '',
	post: {},
	temp: {},
}

//defining action types
const postsReducer = (state = initState, action)=>{
    switch (action.type){
        case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				temp: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: '500!'
			}	
		case 'FILTERED':
			return {
				...state,
				temp: action.payload
			}	
		default:
			return state    
    }
}
export default postsReducer;