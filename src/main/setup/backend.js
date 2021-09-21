//管理后端服务的开启等
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
    const child_process = require('child_process');

    console.log(filepath)
    child_process.execFile(
        filepath,
        function(err,stdout,stderr){
            if(err){
                console.error(err);
            }
            console.log("stdout:",stdout)
            console.log("stderr:",stderr);
        })

}
