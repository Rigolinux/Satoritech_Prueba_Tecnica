export declare interface Category {
    id?: number;
    name: string;
    description: string;
}

export declare interface Product {
    sku?: string;
    name: string;
    stock: number;
    image: string;
    cualification: number;
    image_url: string; 
    category_id: number;
    category_name: string;
    category: Category;
}