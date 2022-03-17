require('dotenv').config();
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const router = require('./router/index.js')
const middlWare = require('./middle-ware/middle-ware.js');
const app = express();
app.use(cors(
   {
      origin: true,
      credentials: true,
   }
));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/v1/', router);

app.use(middlWare);

const start = async () => {
   try {
      await mongoose.connect(process.env.DB_URL,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true
         })
      app.listen(PORT, () => {
         console.log('Server stared on PORT = ' + PORT)
      })
   }
   catch (e) {
      console.log(e);
   }
}
start()