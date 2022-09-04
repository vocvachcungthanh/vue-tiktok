import { Home, Following, Profile, Upload, Search } from "@/pages";

const publicRoutes = [
  {
    path: "/",
    name: "homePage",
    component: Home,
  },

  {
    path: "/following",
    name: "followingPage",
    component: Following,
  },

  {
    path: "/profile",
    name: "profilePage",
    component: Profile,
  },

  {
    path: "/upload",
    name: "uploadPage",
    component: Upload,
  },

  {
    path: "/search",
    name: "searchPage",
    component: Search,
  },
];

export default publicRoutes;
