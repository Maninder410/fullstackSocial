const app = require('./app');
const { connectDatabase } = require('./config/database');
const cloudinary = require("cloudinary");
// const PORT = 4000;
connectDatabase();
const CLOUDINARY_NAME='ddj5ngrzi'
const CLOUDINARY_API_KEY='721394128158988'
const CLOUDINARY_API_SECRET='CkW08alDZQlLdgPZ9zUNepkXeJs'
const PORT=4000
cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  app.use('/temp',(req,res)=>{
    res.send("<h1>hello</h1>");
  })
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})