const path = require('path');
const fs = require('fs');
const async = require('async');

const outObject = { files: [], dirs: [] };

async function getFiles(dirPath, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) return callback(err);
	if(outObject.dirs.length == 0){
		outObject.dirs.push(dirPath);
	}
    async.eachSeries(
      files,
      (fileName, eachCallback) => {
        const filePath = path.join(dirPath, fileName);

        fs.stat(filePath, (err, stat) => {
          if (err) return eachCallback(err);

          if (stat.isDirectory()) {
            getFiles(filePath, (err, subDirFiles) => {
              if (err) return eachCallback(err);

              outObject.dirs.push(filePath);
              eachCallback(null);
            });
          } else {
            if (stat.isFile()) outObject.files.push(filePath);

            eachCallback(null);
          }
        });
      },
      err => callback(err, outObject)
    );
  });
}

getFiles(process.argv[2],(err, files) => {
        console.log(files)
    })