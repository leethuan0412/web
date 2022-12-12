import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { VerifyLoggedIn } from "./layout";
import { routes } from "./router";

function App() {
  console.log(routes);
  return (
    <>
      <Routes>
        {routes.map((route, i) => {
          const Element = route.component;
          const Layout = route.layout ? route.layout : Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
