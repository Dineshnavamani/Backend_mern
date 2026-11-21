import mongoos from 'mongoose'

const connect_db = async()=>{
    try {
        const data=await mongoos.connect(process.env.MONGOOS_URI)
        
    } catch (error) {
        
    }
}