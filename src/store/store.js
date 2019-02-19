import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        img:''
    },
    mutations:{
        add(state,formdata){
            axios.post("http://47.95.8.3/index.php/home/GK/upload_img",formdata,{
		  		headers:{"Content-Type": "multipart/form-data" }
		  		})
		  		.then((res)=>{
		  			console.log(res)
		  			state.img = res.data.pic_url
		  			// localStorage.setItem('photo',this.img)
		  		})
        }
    },
    actions:{
        add({commit}){
            commit('add')
        }
    }
})