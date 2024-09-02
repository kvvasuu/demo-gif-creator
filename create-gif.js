const GIFEncoder = require("gifencoder");
const sharp = require("sharp");
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const path = require("path");

const inputDir = "./images";

const cropImage = async (file) => {
  const image = sharp(file);
  const metadata = await image.metadata();

  return image
    .extract({
      width: metadata.width,
      height: metadata.height - 87,
      left: 0,
      top: 87,
    })
    .toBuffer(); // Here set dimensions
};

const makeGif = async () => {
  try {
    const files = fs
      .readdirSync(inputDir)
      .filter((file) => /\.(jpg|jpeg|png|bmp|tiff)$/i.test(file))
      .map((file) => path.join(inputDir, file));

    if (files.length === 0) {
      console.log("There are no files in this directory");
      return;
    }

    const croppedImages = await Promise.all(
      files.map((file) => cropImage(file))
    );

    const dimensions = await sharp(croppedImages[0]).metadata();

    const encoder = new GIFEncoder(dimensions.width, dimensions.height); // Dimensions
    encoder.createReadStream().pipe(fs.createWriteStream("demo.gif"));

    encoder.start();
    encoder.setRepeat(0); // 0: infinite repeat, -1: no repeat
    encoder.setDelay(2000); // Latency between frame change (in miliseconds)
    encoder.setQuality(10); // Quality (1-30)

    for (const image of croppedImages) {
      const img = await loadImage(image);
      const canvas = createCanvas(dimensions.width, dimensions.height);
      const ctx = canvas.getContext("2d");

      console.log(img);
      ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);

      encoder.addFrame(ctx);
    }

    encoder.finish();
    console.log("GIF created!");
  } catch (error) {
    console.log(error);
  }
};

makeGif();
