// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')

var a_parent =  document.querySelectorAll(".parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");

a_parent.forEach(function(item){

    item.addEventListener("click", function(){
        a_parent.forEach(function(aitem){
            aitem.classList.remove("active");
        })
        dd_menu_a.forEach(function(dd_menu_item){
            dd_menu_item.classList.remove("active");
        })
        item.classList.add("active");
    })
})

dd_menu_a.forEach(function(dd_menu_item){

    dd_menu_item.addEventListener("click", function(){
        dd_menu_a.forEach(function(dd_menu_item){
            dd_menu_item.classList.remove("active");
        })
        dd_menu_item.classList.add("active");
    })
})
