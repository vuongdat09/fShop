export interface IProduct {
    _id: string|number;
    name: string;
    price: number;
    image: string;
    desc: string;
    quantity: number;
    categoryId: string;
    createAt:string;
    updateAt:string;
}
export interface ICategory {
    _id?: string|number;
    name: string;
    desc: string;
}


