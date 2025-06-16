import * as actionTypes from "./ActionTypes";
import api from "@/config/api";

export const fetchIssue = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUE_REQUEST });
    try {
      const response = await api.get(`/api/issues/project/${id}`);
      console.log("Issue fetched successfully", response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUE_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchIssueById = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUE_BY_ID_REQUEST });
    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("Fetch Issue by id successfully", response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUE_BY_ID_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUE_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssueStatus = ({id, status}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
    try {
      const response = await api.put(`/api/issues/${id}/status/${status}`);
      console.log("Issue status updated successfully", response.data);
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
        error: error.message,
      });
    }
  };
}

export const assignedUserToIssue = ({issueId, userId}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.ASSIGNED_USER_TO_ISSUE_REQUEST });
    try {
      const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
      console.log("User assigned to issue successfully", response.data);
      dispatch({
        type: actionTypes.ASSIGNED_USER_TO_ISSUE_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
        console.error("Error assigning user to issue:", error);
      dispatch({
        type: actionTypes.ASSIGNED_USER_TO_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
}

