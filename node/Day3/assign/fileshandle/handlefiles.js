import os from "os"
import fs from "fs"; 

 const fileshandles =async()=>{

    try {
    
        const platform =os.platform;
        const architecture =os.arch;
        const hostname =os.hostname
        const totalmemory =os.totalmem

         const systemInfo = `
                Operating System Information
                Platform     : ${platform}
                Architecture : ${architecture}
                Hostname     : ${hostname}
                Total RAM    : ${totalmemory} GB`

        await fs.writeFile("system-info.txt",systemInfo)
         console.log('File created successfully!')

        await fs.readFile("system-info.txt","utf-8",(error,data)=>{
        console.log("reded data",data)
    })


    } catch (error) {
        console.log(error)
        
    }

  
}
export {fileshandles}


