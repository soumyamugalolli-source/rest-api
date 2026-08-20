const fs = require("fs");

fs.stat("message.txt", (err, stats) => {

    if (err) {
        console.log("File not found");
    } else {
        console.log("File Information:");
        console.log("Size:", stats.size, "bytes");
        console.log("Is File:", stats.isFile());
        console.log("Is Directory:", stats.isDirectory());
    }

});