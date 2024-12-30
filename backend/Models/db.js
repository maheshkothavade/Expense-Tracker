// const mongoose = require('mongoose');

// const mongo_url = process.env.MONGO_CONN;

// mongoose.connect(mongo_url)
//     .then(() => {
//         console.log('MongoDB Connected...');
//     }).catch((err) => {
//         console.log('MongoDB Connection Error: ', err);
//     })

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN, {
      useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1); 
  }
};

connectDB();
