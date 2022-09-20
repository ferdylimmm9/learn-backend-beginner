const fs = require("fs");

const readableStream = fs.createReadStream("./article.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    console.log(`[${readableStream.read()}]`);
  } catch {}
});

readableStream.on("end", () => {
  console.log("end");
});
