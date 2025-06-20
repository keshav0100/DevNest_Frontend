import * as actionTypes from "./ActionType";
import api from "@/config/api";

export const fetchIssue = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
    try {
      // Fetch the project, which contains the issues array
      const response = await api.get(`/api/projects/${projectId}`);
      const issues = response.data.issues || []; // Extract issues array
      dispatch({
        type: actionTypes.FETCH_ISSUES_SUCCESS,
        issues,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUES_FAILURE,
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

export const createIssue = (issueData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
    try {
      const response = await api.post(`/api/issues`, issueData);
      dispatch({
        type: actionTypes.CREATE_ISSUE_SUCCESS,
        issue: response.data,
      });
      console.log("Issue created successfully", response.data);
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssueStatus = ({ id, status }) => {
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
};

export const assignedUserToIssue = ({ issueId, userId }) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST });
    try {
      const response = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteIssue = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
    try {
      await api.delete(`/api/issues/${issueId}`);
      dispatch({
        type: actionTypes.DELETE_ISSUE_SUCCESS,
        payload: issueId,
      });
      console.log("Issue deleted successfully", issueId);
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};
