import { DefaultLayout } from "@/layout/DefaultLayout";
import { DefaultLayoutAuth } from "@/layout/DefaultLayoutAuth";
import { AboutScreen } from "@/page/About/AboutScreen";
import { LoginScreen, SignUpScreen } from "@/page/Auth";
import { HomeScreen } from "@/page/Home";

export enum Path {
  Home = "/",
  Auth = "/auth",
}

const routes = [
  {
    index:true,
    path: Path.Home,
    component: HomeScreen,
    layout: DefaultLayout,
  },
  {
    path: Path.Auth,
    component: LoginScreen,
    // layout: DefaultLayoutAuth,
  },
  {
    path: '/auth/signup',
    component: SignUpScreen,
    // layout: DefaultLayoutAuth,
  },
  {
    index:true,
    path: '/about',
    component: AboutScreen,
    layout: DefaultLayout,
  },
];
export { routes };
