import { createRouter, createWebHistory} from "vue-router";
import Inicio from "../pages/Inicio.vue"
import Sobre from  "../pages/Sobre.vue"
import Outros from "../pages/Outros.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
                path: '/',
                component: Inicio
            },
           
        ]
})

router.addRoute({ path: '/sobre', component: Sobre }),
router.addRoute({ path: '/outros', component: Outros })

export default router;