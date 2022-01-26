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
    TableName: 'FoodCalStack-TableCD117FA1-EEMACW6TQKDG',
    Item: {
        'mealId': { S: food + author + calories },
        'mealName': { S: 'Jacket Potato' },
        'calories': { N: calories },
        'recipe': {
            M: {
                'ingredients': { L: [{S:"potato"}, {S:"beans"}, {S:"cheese"}] },
                'measurements': { L: [{S:"300g"}, {S:"250g"}, {S:"100g"}] }
            },
        },
        'imageURL': { S: 'https://images.pexels.com/photos/10435040/pexels-photo-10435040.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
        'inMyMeal': { BOOL: false }
    }
};

// Call DynamoDB to add the item to the table
// ddb.putItem(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data);
//     }
// });

ddb.deleteItem({TableName: 'FoodCalStack-TableCD117FA1-EEMACW6TQKDG', Key: {'mealId' : {S : food + author + calories}}}, function (err, data) {
    if (err) {
        console.log("Error", err);
        // res.status(500).send('You Fucked it Mate');
    } else {
        console.log("Success", data);
        // res.status(200).send('Success');
    }
})

// let readParams = {
//     TableName: 'CdkStack-TableCD117FA1-4Q0EUAS6DNQM',
// };

// ddb.scan(readParams, function(err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data)
//         console.log(data.Items[0].Recipe.S);
//     }
// })