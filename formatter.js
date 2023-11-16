// Accept SQL DATETIME STRING
// Return UNIX TIMESTAMP (seconds)
// Example: 2017-01-01 00:00:00 => 1483228800
// Example: 2017-01-01 00:00:00.000 => 1483228800

function main(params) {
    var date = new Date(params.date);
    console.log("date: " + date)
    return date.getTime() / 1000;
}

module.exports = main;