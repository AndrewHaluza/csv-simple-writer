# [csv-simple-writer](https://github.com/AndrewHaluza/csv-simple-writer)

## Install

`npm install csv-simple-writer`

## Usage

```js
const CSV = require("csv-simple-writer");

/**
 * @method .write(path, data, options)
 * @param {string} path Absolute path to file
 * @param {Object[]} data Array of objects to write
 * @param {Object} [options={separator:';", encoding: 'utf-8'}] Flags parameters
 * 
 * @returns {Promise}
 */
await CSV.write("/home/nemo/documents/find.csv", [
  { index: "Index", name: "Name", email: "Email" },
  { index: 0, name: "Marlin", email: "marlin@email.com" },
  { index: 1, name: "Dory", email: "dory@email.com" },
  { index: 2, name: "Bruce", email: "bruce@email.com" },
  { index: 3, name: "Coral", email: "coral@email.com" },
]);
```

CSV output `find.csv`:
|Index|Name|Email|
|-|-|-|
|0|Marlin|marlin@email.com|
|1|Dory|dory@email.com|
|2|Bruce|bruce@email.com|
|3|Coral|coral@email.com|

# Note

- not sorted or grouping by fields. write as is
