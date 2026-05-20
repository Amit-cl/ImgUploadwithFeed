const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: "public_kfcH4ohhgXWNTA+ioj2nfnAXw0A=",
  privateKey: "private_AHm+oDkA/Y8HcBq4K7QmPI4QHT0=",
  urlEndpoint: "https://ik.imagekit.io/1amit",
});

async function uploadFile(file) {
  const result = await imagekit.upload({
    file: file.buffer,
    fileName: file.originalname,
  });

  return result;
}

module.exports = uploadFile;