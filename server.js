const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
