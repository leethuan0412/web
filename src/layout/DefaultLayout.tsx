
import React from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";


 const DefaultLayout = ({children}:any) => {
  return (
    <>
    <Header/>
    {children}
     <Footer/>
    </>
  );
};
export {DefaultLayout}
