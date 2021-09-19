//管理后端服务的开启等
import path from "path";
const filepath =
    process.env.NODE_ENV === 'production'?
        path.join(__dirname, 'backend.exe'):
        './public/backend.exe'
export {setup}

function setup() {
    const child_process = require('child_process');
    const path = require('path')


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
