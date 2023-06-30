const ffmpeg = require("fluent-ffmpeg");

ffmpeg("../public/presentation.mp4").screenshots({
  timestamps: ["0.5"], // specify time in secondscls
  filename: "thumbnail-at-30-seconds.png",
  folder: "../public/",
});
