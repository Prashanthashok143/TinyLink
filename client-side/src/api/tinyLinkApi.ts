import axios from "axios";
import type { AxiosResponse } from "axios";

const url = "http://localhost:5000/api/tinyLink";

export const createTinyLink = async (data: Record<string, unknown>): Promise<AxiosResponse<unknown>> => {
   return await axios.post<unknown>(`${url}/createLink`, data);

}


export const getTinyLinks = async () => {
   return await axios.get(`${url}/getTinyLinks`);
}