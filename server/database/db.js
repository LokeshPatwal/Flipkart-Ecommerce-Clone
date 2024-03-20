import mongoose from "mongoose";

export const Connection = async () => {
    const URI = 'mongodb://localhost:27017/FlipkartClone'
    try {
        await mongoose.connect(URI, { });
        console.log('Database connected Successfully')
    } catch (error) {
        console.log('Error while connecting to database', error.message)
    }
}


