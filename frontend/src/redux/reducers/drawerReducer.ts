import { IAction, drawerConst } from "../actions/actionConst";

export const drawerReducer = (state = { isOpen: false }, action: IAction) => {
    switch (action.type) {
        case drawerConst.OPEN:
            return {
                ...state,
                isOpen: true,
                drawerShowOption: action?.payload?.drawerShowOption
            }
        case drawerConst.CLOSE:
            return {
                ...state,
                isOpen: false,
                drawerShowOption: action?.payload?.drawerShowOption

            }
        default:
            return state;
    }
};