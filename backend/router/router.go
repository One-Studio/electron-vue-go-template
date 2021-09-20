package router

import (
	"backend/app/api"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
)

func MiddlewareCORS(r *ghttp.Request) {
	r.Response.CORSDefault()
// 	corsOptions := r.Response.DefaultCORSOptions()
// 	corsOptions.AllowDomain = []string{"127.0.0.1"}
// 	r.Response.CORS(corsOptions)
	r.Middleware.Next()
}

func init() {
	s := g.Server()
	s.Group("/", func(group *ghttp.RouterGroup) {
	    group.Middleware(MiddlewareCORS)
		group.ALL("/hello", api.Hello)
	})
	s.SetPort(12580)
}
