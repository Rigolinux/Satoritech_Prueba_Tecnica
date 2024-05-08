import instance  from "./axios";



export const loginReq = (data: LoginUser) => {
  return instance.post("/auth/login", data);
};


export const registerReq = (data: User) => {
  return instance.post("/auth/register", data);
};

export const logoutReq = () => {
  return instance.post("/auth/logout");
};

export const meReq = () => {
  return instance.get("/auth/me");
}