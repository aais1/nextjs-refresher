"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function TestPage(){
    const router = useRouter();
    useEffect(()=>{
        const testmiddleware=async()=>{
            try {   
                const resp=await fetch("/api/test",{
                    headers:{
                        authorization:'ali'
                    }
                    //commnt the above heaer and you will get redirected to the unauthorized page bcz of the middleware checking for authorization header for the api path of '/api/test'
                })
                if(resp.redirected){
                    console.log('redirecting')
                    router.push(resp.url)
                }
                const data=await resp.json();
                alert(data.message)
            } catch (error:Error) {
                console.log(error)
            }
            
        }
        setTimeout(()=>{
            testmiddleware();
        })
    },[])
    return(
        <div>
            <h1>Test Page</h1>
        </div>
    )
}