package main

import (
	_ "backend/boot"
	_ "backend/router"
	"github.com/gogf/gf/frame/g"
	"github.com/jessevdk/go-flags"
	"log"
)

type Option struct {
	FrontPort int `short:"f" long:"frontport" description:"frontend port to communicate"`
	BackPort int `short:"b" long:"backport" description:"backend port to communicate"`
}

func main() {
	//解析命令行参数，获取前端后端端口
	var opt Option
	var _, err = flags.Parse(&opt)
	if err != nil {
		log.Fatal(err)
	}
	println(opt.FrontPort, opt.BackPort)

	if opt.BackPort != 0 {
		g.Server().SetPort(opt.BackPort)
	}

	g.Server().Run()
}
