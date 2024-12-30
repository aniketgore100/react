import { useEffect, useState} from "react";

const Status = () =>{
    const [isOnline, setOnline] = useState(true);
    useEffect(() =>{
        const handelonline = () => {
            setOnline(true);
        }
        const handelofline = () => {
            setOnline(false);
        }

        window.addEventListener("online",  handelonline );
        window.addEventListener("offline", handelofline );

    return () =>{
        window.removeEventListener("online",  handelonline );
        window.removeEventListener("offline", handelofline );
    }

    },[])
    return isOnline;
}

export default Status;