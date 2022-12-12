import { Path } from "@/router";
import { Navigate } from "react-router-dom";
import location from '../assets/icon/location.png';
import mail from '../assets/icon/mail.png';


export const TabHome =[
    {
        id:1,
        title:'Home',
        navigation: '/'
    },
    {
        id:2,
        title:'About',
        navigation: '/about'
    },
    {
        id:3,
        title:'Tours',
        navigation: '/tour'
    },
    {
        id:4,
        title:'Hotels',
        navigation: '/hotel'
    },
    {
        id:5,
        title:'Contact',
        navigation: '/contact'
    },
    {
        id:6,
        title:'Login',
        navigation: '/auth',
    }
]
export const TabFooter=[
    {
        id:1,
        title:'Home',
        navigation: '/'
    },
    {
        id:2,
        title:'About',
        navigation: '/about'
    },
    {
        id:3,
        title:'Tours',
        navigation: '/tour'
    },
    {
        id:4,
        title:'Hotels',
        navigation: '/hotel'
    },
    {
        id:5,
        title:'Contact',
        navigation: '/contact'
    },
]

export const policy =[
    {
        id:1,
        title:'Partner with us',

    },
    {
        id:2,
        title:'Terms & Conditions',

    },
    {
        id:3,
        title:'Privacy Policy',

    },
    {
        id:4,
        title:'Guest Policy',

    },

]
export const Contact =[
    {
        id:1,
        icon: location,
        title:"Lilama 10 Tower, 56 To Huu,\nTrung Van, Nam Tu Liem, Ha Noi"
    },
    {
        id:2,
        icon:mail,
        title:"hello@adamotravel.com"
    }
]