import type { Category } from "@/types/objects";
import instance from "./axios";

export const getCategories = () => {
  return instance.get("/category");
};

export const getCategory = (id: number) => {
  return instance.get(`/category/${id}`);
};

export const create = (data: Category) => {
    return instance.post("/category", data);
};


export const update = (data: Category) => {
    return instance.put(`/category/${data.id}`, data);
};

export const remove = (id: number) => {
    return instance.delete(`/category/${id}`);
};