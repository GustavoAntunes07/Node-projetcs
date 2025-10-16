// import mongoose from "mongoose";
import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@clusternodelearn.9cvbhvh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNodeLearn`
    );
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};
