package api

import (
	"github.com/gogf/gf/encoding/gjson"
	"github.com/gogf/gf/net/ghttp"
)

var Init = initApi{}

type initApi struct {}

// Index 处理初始化请求
func (*initApi) Index(r *ghttp.Request) {
	println("收到初始化请求")
	r.Response.WritelnExit(gjson.DecodeToJson(initResp{Version: "0.0.2"}))
	//r.Response.Writeln("init from backend Go!")
}
