const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const stpRoutes = require("./routes/stpRoutes");
const receiptRoutes = require("./routes/receiptRoutes");
const tankerRoutes = require("./routes/tankerRoutes");

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/stp", stpRoutes);
app.use("/api/receipt", receiptRoutes);
app.use("/api/tanker", tankerRoutes);

app.get("/", (req, res) => {
	res.send("server is working");
});

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
