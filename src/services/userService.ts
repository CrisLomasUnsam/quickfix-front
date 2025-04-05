import axiosClient from "../utils/axios";
import { UserDto } from "../dto/userDtos/userDto";
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

};
