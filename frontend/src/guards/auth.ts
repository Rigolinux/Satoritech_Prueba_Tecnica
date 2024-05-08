
import { meReq } from "@/api/auth";
export const isUserLoggedIn: any = (to: any, from: any, next: any) => {
    try {
        meReq().then((res) => {
            if (res.status === 200) {
                next();
            }
        });
    } catch (error) {
        next("/login");
    }
};