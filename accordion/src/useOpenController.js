import { useCallback, useState } from "react";

export default function useOpenController(initailState){
    const [isOpen,setIsOpen] = useState(initailState);

    const toggle = useCallback(()=>{
        setIsOpen((state)=> !state)
    },[setIsOpen]);

    return {isOpen,toggle}
}