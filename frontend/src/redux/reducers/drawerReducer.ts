import { IAction ,drawerConst} from "../constants/actionConst";

export const drawerReducer = (state = {isOpen:false}, action:IAction) => {
    switch (action.type) {
        case drawerConst.OPEN:
            return {
                isOpen: true
            }
        case drawerConst.CLOSE:
            return {
                isOpen: false
            }
        default:
            return state;
    }
};