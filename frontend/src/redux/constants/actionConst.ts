export interface IAction{
    type: string,
    payload?: any,
    error?:any
}

export enum drawerConst{
    OPEN = "OPEN",
    CLOSE="CLOSE"
}