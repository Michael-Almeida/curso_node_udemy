const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController {
  static async showThoughts(req, res) {
    res.render("toughts/home");
  }

  static async dashboard(req, res) {
    res.render("toughts/dashboard");
  }

  static createTought(req, res) {
    res.render("toughts/create");
  }

  static async createToughtSave(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    try {
      await Tought.create(tought);
      req.flash("message", "Pensamento adicionado com sucesso!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (error) {
      console.error(error);
    }
  }
};
