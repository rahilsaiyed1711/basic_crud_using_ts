import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/crud-using-ts')
    .then(() => console.log('mongo connected'))
    .catch((err) => console.log(err));
};

export default connectDB;
