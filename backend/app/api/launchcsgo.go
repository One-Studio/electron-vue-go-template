package api

import (
	"github.com/gogf/gf/net/ghttp"
)

//启动项应从HTTP报文中取得
//目前无法得知Steam位置 这个功能稍后再做
func csgoLauncher(steampath string, csgoLaunchOptions string) string{

	return "CD /D \"" + steampath + "\"\nSteam.exe -applaunch 730 " + csgoLaunchOptions

}

var CsgoLauncher = csgoLauncherApi{}
type csgoLauncherApi struct {}
func (*csgoLauncherApi) Index(r *ghttp.Request) {

	r.Response.WritelnExit(csgoLauncher("C:\\", "-worldwide -insecure +sv_lan 1"))
}