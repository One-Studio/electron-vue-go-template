import {Menu, Tray} from "electron";

function setup(win, app) {
    const { Tray, Menu } = require('electron')
    const path = require('path')

    //图标
    // const imgPath = path.join(process.resourcesPath, 'icon.ico')
    // console.log(imgPath)
    let trayIcon = process.platform === "win32"? '/app-icon/app.ico' : '/app-icon/app.png'
    let tray = new Tray(path.join(__static, trayIcon))

    //菜单
    const contextMenu = Menu.buildFromTemplate([
        {
            label: '打开主界面',
            click: () => {
                win.show()
            },
        },
        { label: 'Item3', type: 'radio', checked: true },
        {
            label: 'radio按钮',
            type: 'radio',
            click: () => {

            }
        },
        {
            label: 'checkbox',
            type: 'checkbox',
            click: () => {
                //click对应方法下处理点击事件
            }
        },
        {
            type: 'separator'
        },
        {
            label: '删除托盘',
            click: () => {
                tray.destroy()
            },
        },
        {
            label: '关闭',
            click: () => {
                app.quit()
            },
        },
    ])

    // 设置上下文菜单
    tray.setContextMenu(contextMenu)

    tray.setToolTip(process.env.VUE_APP_NAME)

    //单击右下角小图标显示应用
    tray.on('click',function() {
        win.show();
    })

    //右键 默认打开菜单
    // tray.on('right-click',function() {
    //     tray.popUpContextMenu(contextMenu);
    // })

    //双击
    tray.on('double-click',function() {
        tray.popUpContextMenu(contextMenu);
    })
    return tray
}

function destroy(tray) {
    tray.destroy()
}

export {setup, destroy}
