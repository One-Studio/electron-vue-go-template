//管理后端服务的开启等
import child_process from "child_process";

const path = require('path')
const filepath =
    (process.env.NODE_ENV === 'production'?
        path.join(process.cwd(), 'resources', 'backend'):
        './backend/bin/backend')
    + (process.platform === 'darwin'?
        '':
        '.exe')
export {setup}

function setup() {
    const portfinder = require('portfinder');
    portfinder.basePort = 12580;

    //获取后端的端口号
    portfinder.getPortPromise()
        .then((port) => {
            const child_process = require('child_process');

            console.log(filepath)
            console.log("后端端口号=" + port)
            child_process.execFile(
                filepath,
                ['--backport', port],
                function(err,stdout,stderr){
                    if(err){
                        console.error(err);
                    }
                    console.log("stdout:",stdout)
                    console.log("stderr:",stderr);
                })
        })
        .catch((err) => {
            console.log('获取后端端口号失败')
            console.log(err)
        });



}
