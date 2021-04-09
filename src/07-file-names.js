/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const tempNames = names;
  const collection = {};
  for (let i = 0; i < tempNames.length; i++) {
    if (!Object.keys(collection).includes(tempNames[i])) collection[tempNames[i]] = 1;
    else {
      collection[tempNames[i]] += 1;
      tempNames[i] += `(${collection[names[i]] - 1})`;
      collection[tempNames[i]] = 1;
    }
  }
  return tempNames;
}

module.exports = renameFiles;
