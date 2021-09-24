import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/renderer/components/Home";
import Loading from "@/renderer/components/Loading";

const routes = [
	{
		path: '/',
		component: Loading,
		meta: { keepAlive: true },
	},
	{
		path: '/home',
		component: Home,
		meta: { keepAlive: true },
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	// history: createWebHistory(process.env.BASE_URL),
	routes: routes
})

export default router
