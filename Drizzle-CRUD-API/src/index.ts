import express from "express"
import userRoutes from "./routes/users"
import blogRoutes from "./routes/blogs";
import bodyParser from "body-parser";

const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use("/users", userRoutes);
app.use("/blogs",blogRoutes );

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});