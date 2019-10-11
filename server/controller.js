module.exports = {
  getComments: (req, res, next) => {
    const db = req.app.get("db");

    db.get_comment()
      .then(dbResponse => res.status(200).send(dbResponse))
      .catch(err => {
        res.status(500).send({ errorMessage: "something went wrong" });
      });
  },

  addComment: (req, res) => {
    const db = req.app.get("db");
    const { topic, text } = req.body;

    db.add_comment([topic, text]).then(data => res.status(200).send(data));
  }
};
