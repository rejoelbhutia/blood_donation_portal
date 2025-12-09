import moongose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;



const connectDb = async () => {
    try {
        await moongose.connect(MONGODB_URL);
        console.log("mongodb connected");
        
    } catch (error) {
        console.error("Error occurred; ", error);
        process.exit(1)//this line is to stop the server if db connection failed
    }
}

connectDb();

export default connectDb;