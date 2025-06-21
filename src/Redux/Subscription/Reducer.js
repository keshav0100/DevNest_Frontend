import * as types from './ActionType'

const initialState = {
    userSubscription: null,
    loading: false,
    error: null,
}
const subscriptionReducer = (state = initialState, action) => {
    console.log("Subscription Reducer Action:", action);
    console.log("Subscription Current State:", state);
    
    switch (action.type) {
        case types.GET_USER_SUBSCRIPTION_REQUEST:
        case types.UPGRADE_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case types.GET_USER_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                userSubscription: action.payload,
                loading: false,
                error: null,
            }
        case types.UPGRADE_SUBSCRIPTION_SUCCESS:
            return {
              ...state,
              loading: false,
              userSubscription: action.payload,
              error: null,
            };
        case types.GET_USER_SUBSCRIPTION_FAILURE:
        case types.UPGRADE_SUBSCRIPTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
export default subscriptionReducer;