import axiosClient from "../utils/axios";
import { ProfessionalDto } from "../dto/professionalDtos/professionalDto"; 
import { ProfessionalUpdateDto } from "../dto/professionalDtos/professionalUpdateDto";


export const ProfessionalService = {

    //Obtener profesional por ID
    getProfessionalById: async (id: number): Promise<ProfessionalDto> => {
        const response = await axiosClient.get<ProfessionalDto>(`/professionals/${id}`);
        return response.data;
    },

    //Buscar profesionales por nombre o apellido
    searchProfessionals: async (query: string): Promise<ProfessionalDto[]> => {
        const response = await axiosClient.get<ProfessionalDto[]>("/professionals/search", { params: { q: query } });
        return response.data;
    },

    //Obtener profesionales por profesión (ej: "plumber", "electrician")
    getProfessionalsByJob: async (job: string): Promise<ProfessionalDto[]> => {
        const response = await axiosClient.get<ProfessionalDto[]>("/professionals/job", { params: { job } });
        return response.data;
    },

    //Actualizar información de un profesional
    updateProfessional: async (id: number, professionalData: ProfessionalUpdateDto): Promise<void> => {
        await axiosClient.put(`/professionals/${id}`, professionalData);
    },

    //Eliminar un profesional
    deleteProfessional: async (id: number): Promise<void> => {
        await axiosClient.delete(`/professionals/${id}`);
    }
};

