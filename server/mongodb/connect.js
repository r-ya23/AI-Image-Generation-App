import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery',true);   //used for working with search functionality

    //connect database
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

export default connectDB;