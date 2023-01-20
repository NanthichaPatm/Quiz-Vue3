//DEFINE OUR ROUTING RULE//
import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../view/QuizesView.vue";
import QuizView from "../view/QuizView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name:"quizes",
            component:QuizesView
        },
        {
            path: "/quiz/:id",
            name:"quiz",
            component:QuizView
        },

    ]
})
export default router