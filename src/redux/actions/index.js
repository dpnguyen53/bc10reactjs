// import { DELETE, EDIT, SUBMIT, KEYWORD } from "./../constants";
import * as ActionType from "./../constants";

//Action Creator
export const actDelete = (user) => {
    return {
        type: ActionType.DELETE,
        payload: user,
    };
};

export const actEdit = (user) => {
    return {
        type: ActionType.EDIT,
        payload: user,
    };
};

export const actSubmit = (user) => {
    return {
        type: ActionType.SUBMIT,
        payload: user,
    };
};

export const actGetKeyword = (keyword) => {
    return {
        type: ActionType.KEYWORD,
        payload: keyword,
    };
};
