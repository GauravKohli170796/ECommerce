export interface IAction{
    type: string,
    payload?: any,
    error?:any
}

export enum drawerConst{
    OPEN = "OPEN",
    CLOSE="CLOSE"
}

export enum drawerShowOptions {
    filter = "filter",
    search="search"    
}

export enum eFilterOptionsAction{
    priceSort = "priceSort",
    ratingSort = 'ratingSort',
    price = "price",
    category = 'category',
    reset='reset'
}