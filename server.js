const app = require("./app");
const connectDatabase = require("./utils/database");
const dotenv = require("dotenv");

dotenv.config();

const start = async () => {
  try {
    await connectDatabase();
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
