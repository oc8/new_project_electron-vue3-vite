import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;
