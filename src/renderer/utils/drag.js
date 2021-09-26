//拖拽方法的封装

//.vue组件mounted里面加上
//    drag.setup('drag',
//         async (files) => {
//           if (files.length >= 1) {
//             console.log(files)
//             //取第一个文件或者所有文件，根据需求改动
//             const path = files[0].path;
//             console.log("file:", path);
//             const content = await readFile(path);    //readFile改成具体的业务方法
//             console.log(content.toString());
//           }
//
//           this.dragState = false
//         },
//         () => { this.dragState = true },
//         () => { this.dragState = false }
//     )


export function setup(id, dropMethod, enterMethod, leaveMethod) {
    const drag = document.getElementById(id)

    drag.addEventListener("drop", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        //@param files FileList 文件列表
        //  FileList
        //    length 长度
        //    File  文件若干
        //  File
        //    name 文件名
        //    path 完整路径
        //    size 大小 Byte
        //    type 文件类型
        dropMethod(files)
    })

    //拖拽开始 !!必须存在
    drag.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        enterMethod();
    })

    //拖拽结束
    drag.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        leaveMethod();
    })

    //只要在拖拽区域就会一直触发 !!必须存在
    drag.addEventListener("dragover",(e)=>{
        e.preventDefault();
        e.stopPropagation();
    })

    //从app内往外拖拽 TODO 未来可能有用
    // drag.addEventListener("dragstart",(e)=>{
    //   e.preventDefault();
    //   e.stopPropagation();
    //
    //   startDrag('.yarnrc') //这个文件名根据拖拽的主体定
    //   console.log('监听到dragstart')
    // })
}
