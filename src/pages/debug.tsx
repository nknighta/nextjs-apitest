import {GetServerSideProps } from "next";
import {useEffect,useState} from "react";
import {useRouter} from "next/router";

export default function ({getid}:any) {
    const router = useRouter();
    getid = "1";
    const [name,setName] = useState<string>("");
    const [id,setId] = useState<string>("");

    useEffect(()=>{
        fetch(`/user/${getid}`).then(res=>res.json()).
        then(
            res=>{
            setName(res.name);
            setId(res.id);
        })
            .catch(err=>console.log(err))
        ;
    },[]);
    return (
        <div>
            <h1>Debug</h1>
            {name} ,
            {id}
        </div>
    );
}