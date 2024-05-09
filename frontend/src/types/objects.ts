export declare interface Category {
    id?: number;
    name: string;
    description: string;
}

export declare interface Product {
    sku?: string;
    currentSku? : string;
    name: string;
    stock: number;
    image: string | File | null | any;
    cualification: number;
    image_url: string; 
    category_id?: number;
    category_name?: string;
    category?: Category;
}