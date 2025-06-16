import { pl } from "zod/dist/types/v4/locales";
import * as types from "./ActionTypes";
import api from "@/config/api";

export const getUserSubscription=(jwt)=>{
    return async (dispatch)=>{
        dispatch({type: types.GET_USER_SUBSCRIPTION_REQUEST});
        try {
            const response = await api.get('/api/subscriptions/user', {
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });
            dispatch({
                type: types.GET_USER_SUBSCRIPTION_SUCCESS, 
                payload: response.data
            });
            console.log("User subscription data fetched successfully:", response.data);
        } catch (error) {
            console.error("Error fetching user subscription data:", error);
            dispatch({type: types.GET_USER_SUBSCRIPTION_FAILURE, payload: error.message});
        }
    }
}

export const upgradeSubscription=({planType})=>{
    return async (dispatch)=>{
        dispatch({type: types.UPGRADE_SUBSCRIPTION_REQUEST});
        try {
            const response = await api.patch('/api/subscriptions/upgrade', null, {
                params: {
                    planType: planType,
                },
            });
            dispatch({
                type: types.UPGRADE_SUBSCRIPTION_SUCCESS,
                payload: response.data
            });
            console.log("Upgraded Subscription:", response.data);
        } catch (error) {
            console.error("Error upgrading subscription:", error);
            dispatch({type: types.UPGRADE_SUBSCRIPTION_FAILURE, payload: error.message});
        }
    }
} 

