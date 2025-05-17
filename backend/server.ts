import dotenv from "dotenv";
import app from "./src/app";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
