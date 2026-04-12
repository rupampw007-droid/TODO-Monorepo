import "dotenv/config";
import {prismaClient} from '@repo/db/client'
import express from 'express'
const app = express();
app.use(express.json())

app.post('/signup' ,async (req,res) => {
    const {username, password} = req.body;
    try {
        const userData = await prismaClient.user.create({
            data : {
                username,
                password
            }
        })

        res.status(200).json({
           message: userData
        })
    }catch(e: any) {
        res.json({
            message: e.message
        })
    }
})

app.listen(8000, ()=> console.log('App is listening to port 8000'))

