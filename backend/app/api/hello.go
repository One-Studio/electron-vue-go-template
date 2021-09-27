package api

import (
	"encoding/json"
	"fmt"
	"github.com/gogf/gf/net/ghttp"
)

var Hello = helloApi{}

type helloApi struct {}

type initResp struct {
	Version string `json:"version"`
}

// Index is a demonstration route handler for output "Hello World!".
func (*helloApi) Index(r *ghttp.Request) {
	resp, err := json.Marshal(initResp{Version: "0.0.1test"})
	if err != nil {
		fmt.Println("JSON ERR:", err)
	}
	fmt.Println(string(resp))
	r.Response.WritelnExit(string(resp))
	//r.Response.Writeln("Hello from backend Go!")
}
