const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "chainkart-com",
  api_key: "257816562569745",
  api_secret: "DExdoQxVz3Iok_YSWlKIlpo0J4E",
});

module.exports = cloudinary;
