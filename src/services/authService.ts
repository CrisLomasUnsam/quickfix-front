import axiosClient from "../utils/axios";
import { LoginDTO } from "../dto/loginDTOS/loginDTO";


export const AuthService = {

    //Login to Customer
    loginCustomer: async (credential:LoginDTO): Promise<any> =>{
        const response = await axiosClient.post("/login/customer", credential);
        return response.data;

    },

    //Login to Professional
    loginProfessional: async (Credential:LoginDTO): Promise<any> => {
        const response = await axiosClient.post("/login/professional",Credential);
        return response.data;
    }

}
