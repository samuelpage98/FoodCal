// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');

// Set the region 
// AWS.config.update({ region: 'us-east-1' });

// Create the DynamoDB service object
let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });



const postMeal = (req, res) => {

    let food = 'eggyshit';
    let author = 'Sam';
    let calories = '300'

    let params = {
        TableName: 'CdkStack-TableCD117FA1-1E9HWY7BHP4NQ',
        Item: {
            'mealId': { S: food + author + calories },
            'mealName': { S: 'Jacket Potato' },
            'calories': { N: calories },
            'recipe': {
                'M': {
                    'ingredients': { S: food },
                    'measurements': { S: '200ml' }
                },
            },
            'imageURL': { S: 'https://images.pexels.com/photos/10435040/pexels-photo-10435040.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
            'inMyMeal': { BOOL: false }
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('You Fucked it Mate')
        } else {
            console.log("Success", data);
            res.status(200).send('Success')
        }
    });

}

module.exports = {
    postMeal
}