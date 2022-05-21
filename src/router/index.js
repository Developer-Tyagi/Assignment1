import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import SideBar from "../components/SideBar";
import OrderDetails from "../components/OrderDetails";
import PaymentsPage from "../components/PaymentsPage";
import RoutePage from "../components/RoutePage";
import EcomercePage from "../SideBarPages/FoodDeliverPage";
import FoodDeliverPage from "../SideBarPages/EcomercePage";
import HaulagePage from "../SideBarPages/HaulagePage";
import TransPortPage from "../SideBarPages/TransPortPage";
import ParcelDeliverPage from "../SideBarPages/ParcelDeliverPage";
import TaskPage from "../SideBarPages/TaskPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/SideBar",
    name: "SideBar",
    component: SideBar,
  },
  {
    path: "/OrderDetails",
    name: "OrderDetails",
    component: OrderDetails,
  },
  {
    path: "/Payments",
    name: "Payments",
    component: PaymentsPage,
  },
  {
    path: "/EcomercePage",
    name: "EcomercePage",
    component: EcomercePage,
  },
  {
    path: "/Route",
    name: "Route",
    component: RoutePage,
  },
  {
    path: "/FoodDeliverPage",
    name: "FoodDeliverPage",
    component: FoodDeliverPage,
  },
  {
    path: "/ParcelDeliverPage",
    name: "ParcelDeliverPage",
    component: ParcelDeliverPage,
  },
  {
    path: "/HaulagePage",
    name: "HaulagePage",
    component: HaulagePage,
  },
  {
    path: "/TransPortPage",
    name: "TransPortPage",
    component: TransPortPage,
  },
  {
    path: "/TaskPage",
    name: "TaskPage",
    component: TaskPage,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
