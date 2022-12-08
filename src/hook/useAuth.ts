// import { useEffect, useState } from "react";

// export const useAuth = () => {
//   const accessToken = localStorage.getItem("auth");
//   const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken ? true : false);
//   useEffect(() => {
//     if (!!accessToken) {
//       setIsAuthenticated(true);
//     } else setIsAuthenticated(false);
//   }, [accessToken]);

//   return isAuthenticated;
// };