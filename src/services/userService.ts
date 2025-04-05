import axiosClient from "../utils/axios";
import { UserDto } from "../dto/userDtos/userDto";
import { UserUpdateDto } from "../dto/userDtos/userUpdateDto";
export const UserService = {
  
  getUserById: async (id: number): Promise<UserDto> => {
    const response = await axiosClient.get<UserDto>(`/users/${id}`);
    return response.data;
  },

  
  searchUsers: async (query: string): Promise<UserDto[]> => {
    const response = await axiosClient.get<UserDto[]>("/users/search", {
      params: { q: query },
    });
    return response.data;
  },
  
  deleteUser: async (id: number): Promise<void> => {
    await axiosClient.delete(`/users/${id}`);
  },

  updateUser: async (id:number, userData: UserUpdateDto): Promise<void> =>{
    await axiosClient.put (`/users/${id}`, userData);
  },

};
