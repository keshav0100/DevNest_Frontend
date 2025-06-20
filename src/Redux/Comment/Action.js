import * as actionTypes from "./ActionType";
import api from "@/config/api";

export const createComment = (commentData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });
    try {
      const response = await api.post(`/api/comments`, commentData);
      console.log("Comment created", response.data);
      dispatch({
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment: response.data,
      });
    } catch (error) {
      console.error("Error creating comment:", error);
      dispatch({
        type: actionTypes.CREATE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_COMMENT_REQUEST });
    try {
      await api.delete(`/api/comments/${commentId}`);
      dispatch({
        type: actionTypes.DELETE_COMMENT_SUCCESS,
        commentId,
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
      dispatch({
        type: actionTypes.DELETE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchComments = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_COMMENTS_REQUEST });
    try {
      const response = await api.get(`/api/comments/${issueId}`);
      console.log("Comments fetched", response.data);
      dispatch({
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        comments: response.data,
      });
      console.log("Comments fetched successfully", response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      dispatch({
        type: actionTypes.FETCH_COMMENTS_FAILURE,
        error: error.message,
      });
    }
  };
};
