import Home from "./components/Home.vue";
import Login from "./components/account/Login.vue";
import Signup from "./components/account/Signup.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];