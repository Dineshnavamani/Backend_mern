import fs from 'fs'
export const fileshande =async()=>{
    try {
            const files = fs
    console.log(files);
    await fs.writeFile("intro.txt","this is the intro process",()=>{
        console.log('file created successfully');
        
    })

    await fs.readFile("intro.txt","utf-8",(error,data)=>{
        console.log('file readed', data)
    })
    await fs.appendFile("intro.txt","this is the change",()=>{
        console.log('file append succes');
        
    })
        await fs.readFile("intro.txt","utf-8",(error,data)=>{
        console.log('file readed', data)})
    
        
    } catch (error) {
        console.log('Error',error);
        
        
    }

}