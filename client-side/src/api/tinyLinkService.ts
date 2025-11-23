import { useMutation , useQuery, useQueryClient} from "@tanstack/react-query";
import { createTinyLink, getTinyLinks } from "./tinyLinkApi";

export const useCreateLinks= () =>{
    const query = useQueryClient();
    return useMutation<unknown, unknown, Record<string, unknown>>({
        mutationFn:(data: Record<string, unknown>)=>createTinyLink(data),
        onSuccess: ()=>{
            console.log("Company registered successfully");
            query.invalidateQueries({
                queryKey:["getTinyLinks"]
            })
        }
    })
}


export const useGetTinyLinks = (
) => {
  return useQuery({
    queryKey: ["getTinyLinks"],
    queryFn: () => getTinyLinks(),
    retry:false,
    refetchOnWindowFocus:false,
  });
};