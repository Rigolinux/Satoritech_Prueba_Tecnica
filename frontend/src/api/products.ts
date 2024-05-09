import type { Product } from "@/types/objects";
import instance from "./axios";


export const getProducts = () => {
  return instance.get("/product");
};

export const getProduct = (id: number) => {
  return instance.get(`/product/${id}`);
};

export const createProduct = (data: Product) => {
    return instance.post("/product", data);
};


export const updateProduct = (data: Product) => {
    return instance.put(`/product/${data.sku}`, data);
};

export const removeProduct = (id: string) => {
    return instance.delete(`/product/${id}`);
};