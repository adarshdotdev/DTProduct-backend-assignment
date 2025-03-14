const app = require("./src/app");
const { connectDB } = require("./src/db/mongodb");

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
