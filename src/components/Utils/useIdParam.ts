import { useParams } from "react-router-dom";

export const useIdParam = () =>{
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    return id;
}