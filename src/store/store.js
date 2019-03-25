import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        step: 1,
        // 1: take a shot ;
        // 2. salesman view
        member:true,
        face_id : "A1T7EHCMZ92TKC",
        img:' '
    },
    getters: {
        // each component can access state via getters
        showStep (state) {
            return state.step;
        },
        showFaceid (state) {
            return state.face_id;
        },
        showImg(state){
            return state.img;
        }
    },
    mutations: {
        // handle the state
        CHANGE_STEP (state, step) {
            state.step = state;
        },
        SET_FACE_ID (state, faceid) {
            state.face_id = faceid;
        },
        CHANGE_MEMBER (state, membered) {
            state.member = membered;
        },
        CHANGE_IMG(state,img){
            state.img=img;
        }
    },
    actions: {
        // commit state changes
        changeStep (context, step) {
            context.commit('CHANGE_STEP', step)
        },
        setFaceid (context, faceid) {
            context.commit('SET_FACE_ID', faceid)
        },
        changeMember (context, membered) {
            context.commit('CHANGE_MEMBER', membered)
        },
        changeImg(context,img){
            context.commit('CHANGE_IMG',img);
        }

    }
})
