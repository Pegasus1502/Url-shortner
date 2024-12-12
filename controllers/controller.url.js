const crypto = require("crypto");
const Url = require("../models/model.url");

function shortId() {
  return crypto.randomBytes(3).toString("hex");
}

exports.shortenUrl = async (req, res) => {
  const originalUrl = req.body.originalUrl || req.query.url;
  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  try {
    let existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
      const fullShortUrl = `https://${req.get("host")}/${existingUrl.shortUrl}`;
      return res.status(200).json({
        status: 200,
        message: "URL found successfully",
        data: fullShortUrl,
      });
    }

    const shortUrl = shortId();
    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();

    const newData = `https://${req.get("host")}/${shortUrl}`;
    res.status(201).json({
      status: 201,
      message: "New URL created successfully",
      data: newData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
   
    res.status(500).json({ error: "Internal server error" });
  }
};
