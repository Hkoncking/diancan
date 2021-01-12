
import Center from "@/views/center/Index.vue";
import Login from "@/views/center/login.vue";
import Indent from "@/views/center/Indent.vue";
import Order from "@/views/center/order.vue";
import Coupon from "@/views/center/coupon.vue";

var center = [
  {
    path: "/center",
    component: Center,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/indent",
    component: Indent,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/coupon",
    component: Coupon,
  },
  
];


export default center;
