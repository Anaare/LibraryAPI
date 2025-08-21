require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const app = require("./app"); // importing app object to use methods on it

// DATABASE Setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

connectDB();

// Create port variable to include fallback port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, "127.0.0.1", () => {
  console.log(`Server is running on port: ${port}`);
});
