import type { Product } from "@/types/objects";
import instance from "./axios";


export const getProducts = () => {
  return instance.get("/product");
};

export const getProduct = (id: number) => {
  return instance.get(`/product/${id}`);
};

export const createProduct = (data: Product) => {

  // add the image to the form data
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("name", data.name);
  formData.append("stock", data.stock.toString());
  formData.append("sku", data.sku?.toString() || "");
  formData.append("cualification", data.cualification.toString());
  formData.append("category_id", data.category_id?.toString() || "");
  //formData.append("category_name", data.category_name || "");
  //formData.append("image_url", data.image_url || "");


    return instance.post("/product", formData);
};


export const updateProduct = (data: Product) => {
    return instance.put(`/product/${data.sku}`, data);
};

export const removeProduct = (id: string) => {
    return instance.delete(`/product/${id}`);
};