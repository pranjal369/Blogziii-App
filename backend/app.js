import express from 'express';
import mongoose from 'mongoose';
import { addBlog } from './controllers/blog-controller';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

// app.use('/api', (req, res, next) => {
//     res.send("Hello Pranjal");
// }).listen(5000);

app.use("/api/user",router)
app.use("/api/blog",blogRouter)
// app.use("/api/blog/add",addBlog)



mongoose.connect(
    'mongodb+srv://admin:qcuP6wFfResJWa0j@cluster0.3kvrt2c.mongodb.net/Blog?retryWrites=true&w=majority'
).then(() => app.listen(5000)).then(() => console.log("Connencted to database...")).catch((err)=>console.log(err));


console.log("Hello");