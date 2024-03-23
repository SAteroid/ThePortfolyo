import axios from "axios";
import { useEffect,useState } from "react";


function App(){

    useEffect(()=>{
        axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
        .then((res)=>
        console.log("res"));
    },[]);
}
