/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {useEffect, useState} from"react";
import helloServices from "../services/helloServices";

const Hello = ()=>{
    
    const[hello, setHello] = useState("")
            
    useEffect ( () => {
        helloServices.getHello()
                .then(response =>{
                    setHello(response.data)
        })
                .catch(err =>{
                    console.log("e may mali sayo")
        }
                )
    }
    )
    return hello;
}

export default Hello