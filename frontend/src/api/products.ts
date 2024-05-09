import type { Product } from "@/types/objects";
import instance from "./axios";


export const getProducts = () => {
  return instance.get("/product");
};

export const getProduct = (id: string) => {
  return instance.get(`/product/${id}`);
};

export const createProduct = (data: Product) => {

  // add the image to the form data
  const formData = createFormData(data);
    return instance.post("/product", formData);
};


export const updateProduct = (data: Product) => {
  const formData = createFormData(data);

    return instance.post(`/product/update/${data.sku}`, formData);
};

export const removeProduct = (id: string) => {
    return instance.delete(`/product/${id}`);
};


const createFormData = (data: Product) => {
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("name", data.name);
  formData.append("stock", data.stock.toString());
  formData.append("sku", data.sku?.toString() || "");
  formData.append("cualification", data.cualification.toString());
  formData.append("category_id", data.category_id?.toString() || "");
  if (data.currentSku !== data.sku) {
    formData.append("currentSku", data.currentSku || "");
  }
  return formData;
};