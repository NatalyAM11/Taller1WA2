import { useHistory } from "react-router";
import { useIdParam } from "./useIdParam";

export const useGetElementByIdParam = <T> (list: T[]) =>{

    const id= useIdParam();
    const history= useHistory()

    const element = list.find((elem: any) => {
        if (elem.id === id) {
            return true;
        } else {
            return false;
        }
    });

    
    if (!element) {
        history.push("/error404")
    }

    return element;

}