package main

import (
	_ "backend/boot"
	_ "backend/router"
	"github.com/gogf/gf/frame/g"
)

func main() {
	g.Server().Run()
}
