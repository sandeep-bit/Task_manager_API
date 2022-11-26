const notFound = async (req, res) =>
  res.status(404).send("Route Does not exist");

module.exports = notFound;
