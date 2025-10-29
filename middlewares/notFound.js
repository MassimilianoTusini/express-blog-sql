function notFound(req, res) {
  res.status(404).json({
    error: "Not Found",
    message: "Post non trovato"
  });
}

module.exports = notFound;
