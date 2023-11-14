import React from 'react'
import { useParams } from "react-router-dom";
import Hoodies from './Hoddies/Hoodies';
import JoggersPants from './JoggerPants/JoggersPants';
const Categories = () => {
    const {category} = useParams();
    console.log(category)
   
    // eslint-disable-next-line default-case
    switch (category){
        case 'hoodies': 
        return <Hoodies />;
        case 'jogger-pants':
            return <JoggersPants />
        
    }

}

export default Categories