import { eFetchProductsActions, IAction } from "./actionConst";
import axios from "axios";
import { AppConst } from "../../constants/AppConst";
import { Dispatch } from "redux";

export const fetchProducts = ()=> async (dispatch: Dispatch<IAction>) => {
        dispatch({ type: eFetchProductsActions.loading });
        try {
            const { data } = await axios.get(`${AppConst.BackendURL}/api/v1/product/5/0`);
            dispatch({ type: eFetchProductsActions.success, payload: data });
        }
        catch (err: any) {
            dispatch({ type: eFetchProductsActions.success, error: err.message });
        }

    }

