export default {
    namespaced: true,
    state:{
        isShows: true,
        datas:[],
        clicks:'',
        arrs:[],
        manjians:0,
    },
    mutations:{
        isShowFooter(state,arg){
            // console.log(arg);
            state.isShows = arg
        },

        isnow(state,arg){
            state.datas = arg
        }
    },
    actions:{
        
    },
    getters:{},
}

