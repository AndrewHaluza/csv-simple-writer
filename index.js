const {
  promises: { writeFile },
} = require("fs");

module.exports = class {
  static async write(path, data, { separator = ";", encoding = "utf-8" } = {}) {
    const dataLength = data.length;

    for (let dataIndex = 0; dataIndex < dataLength; dataIndex++) {
      const rowObject = data[dataIndex];
      const row = this.prototype.separate(rowObject, { separator });

      await writeFile(path, row, { flag: "a", encoding });
    }
  }

  separate(data, { separator }) {
    let row = "";

    Object.keys(data).forEach((el) => {
      row += `${data[el]}${separator}`;
    });

    return `${row}\n`;
  }
};
