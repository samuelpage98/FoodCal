// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');

const mealTableName = 'FoodCalStack-TableCD117FA1-EEMACW6TQKDG'

// Set the region 
// AWS.config.update({ region: 'us-east-1' });

// Create the DynamoDB service object
let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const postMeal = (req, res) => {
    let mealName = req.body.mealName;
    let calories = req.body.calories;
    let imageURL = req.body.imageURL;
    let inMyMeal = req.body.inMyMeal;
    let ingredients = req.body.ingredients;
    let measurements = req.body.measurements;

    let params = {
        TableName: mealTableName,
        Item: {
            'mealId': { S: mealName + calories },
            'mealName': { S: mealName },
            'calories': { N: calories },
            'recipe': {
                'M': {
                    'ingredients': { L: ingredients },
                    'measurements': { L: measurements }
                },
            },
            'imageURL': { S: imageURL },
            'inMyMeal': { BOOL: inMyMeal }
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('You Fucked it Mate');
        } else {
            console.log("Success", data);
            res.status(200).send('Success');
        }
    });

}

const putMeal = (req, res) => {
    let mealId = req.body.mealId
    let mealName = req.body.mealName;
    let calories = req.body.calories;
    let imageURL = req.body.imageURL;
    let inMyMeal = req.body.inMyMeal;
    let ingredients = req.body.ingredients;
    let measurements = req.body.measurements;

    let params = {
        TableName: mealTableName,
        Item: {
            'mealId': { S: mealId },
            'mealName': { S: mealName },
            'calories': { N: calories },
            'recipe': {
                'M': {
                    'ingredients': { L: ingredients },
                    'measurements': { L: measurements }
                },
            },
            'imageURL': { S: imageURL },
            'inMyMeal': { BOOL: inMyMeal }
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('You Fucked it Mate');
        } else {
            console.log("Success", data);
            res.status(200).send('Success');
        }
    });
}

const getMeal = (req, res) => {
    let mealId = req.body.mealId

    var params = {
        TableName: mealTableName,
        Key: {
            'mealId': { S: mealId }
        }
    };

    // Call DynamoDB to read the item from the table
    ddb.getItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.send("Error")
        } else {
            console.log("Success", data.Item);
            res.send(data.Item)
        }
    });
}

const deleteMeal = (req, res) => {

}

module.exports = {
    postMeal,
    putMeal,
    getMeal,
    deleteMeal
}