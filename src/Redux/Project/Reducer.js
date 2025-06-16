import * as actionTypes from "./ActionType";

const initialState={
    projects:[],
    loading:false,
    error: null,
    projectDetails:null,
    searchProjects:[]
}

export const projectReducer=(state=initialState,action)=>{
    console.log("Reducer Action:", action); // Debug log
    console.log("Current State:", state); // Debug log

    switch (action.type) {
        case actionTypes.FETCH_PROJECTS_REQUEST:
        case actionTypes.CREATE_PROJECT_REQUEST:
        case actionTypes.DELETE_PROJECT_REQUEST:
        case actionTypes.FETCH_PROJECT_BY_ID_REQUEST:
        case actionTypes.ACCEPT_INVITATION_REQUEST:
        case actionTypes.INVITE_TO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.projects,
                error: null,
            };

        case actionTypes.SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                searchProjects: action.payload,
                error: null,
            };
            
        case actionTypes.CREATE_PROJECT_SUCCESS:
            console.log("Creating project:", action.project); // Debug log
            return {
                ...state,
                loading: false,
                projects: [...state.projects, action.project],
                error: null,
            };

        case actionTypes.FETCH_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                ProjectDetails: action.project,
                error: null,
            };

        case actionTypes.DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: state.projects.filter(
                    (project) => project.id !== action.projectId
                ),
                error: null,
            };
                    
        default:
            return state;
    }
}

