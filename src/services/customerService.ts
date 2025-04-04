import axiosClient from "../utils/axios";
import { CustomerDto } from "../dto/customerDtos/customerDto"; 
import { CustomerUpdateDto } from "../dto/customerDtos/customerUpdateDto";

export const CustomerService = {
    
    getCustomerById: async (id: number): Promise<CustomerDto> => {
        const response = await axiosClient.get<CustomerDto>(`/customers/${id}`);
        return response.data;
    },

    searchCustomers: async (query: string): Promise<CustomerDto[]> => {
        const response = await axiosClient.get<CustomerDto[]>("/customers/search", { params: { q: query } });
        return response.data;
    },

    updateCustomer: async (id: number, customerData: CustomerUpdateDto): Promise<void> => {
        await axiosClient.put(`/customers/${id}`, customerData);
    },

    deleteCustomer: async (id: number): Promise<void> => {
        await axiosClient.delete(`/customers/${id}`);
    }
};

  