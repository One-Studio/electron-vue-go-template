package boot

import (
	_ "backend/packed"
	"github.com/gogf/gf/frame/g"
	"github.com/jessevdk/go-flags"
	"log"
)

type Option struct {
	FrontPort int `short:"f" long:"frontport" description:"frontend port to communicate"`
	BackPort int `short:"b" long:"backport" description:"backend port to communicate"`
	ConfigDir string `short:"d" long:"configDir" description:"directory of application config files'"`
}

//解析命令行参数，获取前端、后端的端口等
func flagParse(opt Option)  {
	var _, err = flags.Parse(&opt)
	if err != nil {
		log.Fatal(err)
	}
	println(opt.FrontPort, opt.BackPort, opt.ConfigDir)

	//检查
	flagCheck(opt)
}

//检查命令行参数，处理空值
func flagCheck(opt Option)  {
	if opt.BackPort != 0 {
		opt.BackPort = 12580
	}
}

func init() {
	var opt Option
	flagParse(opt)
	g.Server().SetPort(opt.BackPort)

	//g.Server().SetDumpRouterMap(false) // 关闭打印的路由列表
	//glog.SetDebug(false) // 关闭debug信息
}
