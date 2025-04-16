const Touhght = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController{
   static async showThoughts(req, res){
    res.render('toughts/home')
   }
}