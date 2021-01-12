import HomePage from "@/views/homePage/Index.vue"
import PaySuccess from "@/views/homePage/payfor/paySuccess"
import PayFail from "@/views/homePage/payfor/payFail"
import FetchCode from "@/views/homePage/linedCode/index"
import NoWaiting from "@/views/homePage/linedCode/noWait"

var homePage = [
    {
        path: "/homePage",
        component: HomePage
    },
    {
        path: "/homePage/paysuccess",
        component: PaySuccess
    },
    {
        path: "/homePage/payfail",
        component:  PayFail
    },
    {
        path: "/homePage/takecode",
        component:  FetchCode
    },
    {
        path: "/homePage/noWaiting",
        component: NoWaiting
    },

]

export default homePage