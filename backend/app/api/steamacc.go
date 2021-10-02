package api

import (
	"github.com/gogf/gf/encoding/gjson"
	"github.com/gogf/gf/net/ghttp"
	
	vdf2json_go "github.com/Purple-CSGO/vdf2json-go"
	
	"io/ioutil"
	"fmt"
)

func VDFparser() string{
	
	vdfpath := "E:\\Program Files\\qqdocs\\1611098076\\FileRecv\\loginusers.vdf"
	
	data,err := ioutil.ReadFile(vdfpath)
	if err != nil{
		fmt.Printf("File reading error")
	}else{
		j := gjson.New([]byte(vdf2json_go.ToJson(string(data))))
		
		//fmt.Printf(j.MustToJsonString())
		jm := j.GetMapStrStr(".")
		
		for id := range jm{
			bufj := gjson.New([]byte(jm[id]))
			bufjm := bufj.GetMapStrStr(".")
			if(bufjm["MostRecent"] == "1"){
				return id
			}
			//fmt.Println(id, bufjm["MostRecent"])
		}
	}
	return ""
}

var Refreshsteamacc = steamaccApi{}
type steamaccApi struct {}
func (*steamaccApi) Index(r *ghttp.Request) {

	r.Response.WritelnExit(VDFparser())
}
