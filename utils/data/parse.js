const fs = require("fs").promises;

const readData = async url => {
  try {
    const data = await fs.readFile(url, "utf-8");
    return JSON.parse(data.toString());
  } catch (error) {
    if (error.name === "SyntaxError") {
      console.error("Ошибка чтения JSON-файла", error);
    } else {
      console.log(error);
    }
  }
};


const writeData = async (url, data) => {
  const json = JSON.stringify(data);
  await fs.writeFile(url, json);
};

module.exports = { readData, writeData };
