export default {
    namespaced: true,
    state:{
        isShows: true,
        datas:[]
    },
    mutations:{
        isShowFooter(state,arg){

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

