// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'us-east-1' });

// Create the DynamoDB service object
let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

let food = 'bread';
let author = 'Sam';
let calories = '300'

let params = {
    TableName: 'CdkStack-TableCD117FA1-4Q0EUAS6DNQM',
    Item: {
        'mealId': { S: food + author + calories },
        'Recipe': { S: food },
        'Calories': { N: calories }
    }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});