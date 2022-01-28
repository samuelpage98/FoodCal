// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');

const mealTableName = 'FoodCalStack-MealLibraryTableC4E0AFE5-ML6P2Y7MW8DC'
const calendarTableName = 'FoodCalStack-CalendarTable1570142F-WHFONICZQH3R'

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
    let description = req.body.description;
    let method = req.body.method;
    let isVegan = req.body.isVegan;
    let isVegetarian = req.body.isVegetarian;
    let isGlutenFree = req.body.isGlutenFree;
    let isPescatarian = req.body.isPescatarian;


    imageURL === "" ? imageURL = 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' : imageURL

    ingredients = ingredients.map(el => { return { S: el } })
    measurements = measurements.map(el => { return { S: el } })

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
            'inMyMeal': { BOOL: inMyMeal },
            'method': { S: method },
            'description': { S: description },
            'isVegan': { BOOL: isVegan },
            'isVegetarian': { BOOL: isVegetarian },
            'isGlutenFree': { BOOL: isGlutenFree },
            'isPescatarian': { BOOL: isPescatarian }
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
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

    let description = req.body.description;
    let method = req.body.method;
    let isVegan = req.body.isVegan;
    let isVegetarian = req.body.isVegetarian;
    let isGlutenFree = req.body.isGlutenFree;
    let isPescatarian = req.body.isPescatarian;

    ingredients = ingredients.map(el => { return { S: el } })
    measurements = measurements.map(el => { return { S: el } })

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
            'inMyMeal': { BOOL: inMyMeal },
            'method': { S: method },
            'description': { S: description },
            'isVegan': { BOOL: isVegan },
            'isVegetarian': { BOOL: isVegetarian },
            'isGlutenFree': { BOOL: isGlutenFree },
            'isPescatarian': { BOOL: isPescatarian }

        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
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
    let mealId = req.body.mealId;

    let params = {
        TableName: mealTableName,
        Key: {
            'mealId': { S: mealId },
        }
    };

    ddb.deleteItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
        } else {
            console.log("Success", data);
            res.status(200).send('Success');
        }
    })
}

const getMeals = (req, res) => {
    let readParams = {
        TableName: mealTableName,
    };

    ddb.scan(readParams, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data)
            res.send(data.Items);
        }
    })
}

const putMyMeals = (req, res) => {

    const mealData = req.body

    let params = {
        TableName: mealTableName,
        Item: mealData
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
        } else {
            console.log("Success", data);
            res.status(200).send('Successfully Updated inMyMeals');
        }
    });
}

const postMealSchedule = (req, res) => {
    let monB = req.body.monB
    let monL = req.body.monL
    let monD = req.body.monD
    let tueB = req.body.tueB
    let tueL = req.body.tueL
    let tueD = req.body.tueD
    let wedB = req.body.wedB
    let wedL = req.body.wedL
    let wedD = req.body.wedD
    let thuB = req.body.thuB
    let thuL = req.body.thuL
    let thuD = req.body.thuD
    let friB = req.body.friB
    let friL = req.body.friL
    let friD = req.body.friD
    let satB = req.body.satB
    let satL = req.body.satL
    let satD = req.body.satD
    let sunB = req.body.sunB
    let sunL = req.body.sunL
    let sunD = req.body.sunD

    let params = {
        TableName: calendarTableName,
        Item: {
            'userId': { S: 'One' },
            'monday': {
                M: {
                    'breakfast': { S: monB },
                    'lunch': { S: monL },
                    'dinner': { S: monD }
                }
            },
            'tuesday': {
                M: {
                    'breakfast': { S: tueB },
                    'lunch': { S: tueL },
                    'dinner': { S: tueD }
                }
            },
            'wednesday': {
                M: {
                    'breakfast': { S: wedB },
                    'lunch': { S: wedL },
                    'dinner': { S: wedD }
                }
            },
            'thursday': {
                M: {
                    'breakfast': { S: thuB },
                    'lunch': { S: thuL },
                    'dinner': { S: thuD }
                }
            },
            'friday': {
                M: {
                    'breakfast': { S: friB },
                    'lunch': { S: friL },
                    'dinner': { S: friD }
                }
            },
            'saturday': {
                M: {
                    'breakfast': { S: satB },
                    'lunch': { S: satL },
                    'dinner': { S: satD }
                }
            },
            'sunday': {
                M: {
                    'breakfast': { S: sunB },
                    'lunch': { S: sunL },
                    'dinner': { S: sunD }
                }
            },
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
        } else {
            console.log("Success", data);
            res.status(200).send('Success');
        }
    });
}

const putMealSchedule = (req, res) => {
    let monB = req.body.monB
    let monL = req.body.monL
    let monD = req.body.monD
    let tueB = req.body.tueB
    let tueL = req.body.tueL
    let tueD = req.body.tueD
    let wedB = req.body.wedB
    let wedL = req.body.wedL
    let wedD = req.body.wedD
    let thuB = req.body.thuB
    let thuL = req.body.thuL
    let thuD = req.body.thuD
    let friB = req.body.friB
    let friL = req.body.friL
    let friD = req.body.friD
    let satB = req.body.satB
    let satL = req.body.satL
    let satD = req.body.satD
    let sunB = req.body.sunB
    let sunL = req.body.sunL
    let sunD = req.body.sunD

    let params = {
        TableName: calendarTableName,
        Item: {
            'userId': { S: 'One' },
            'monday': {
                M: {
                    'breakfast': { S: monB },
                    'lunch': { S: monL },
                    'dinner': { S: monD }
                }
            },
            'tuesday': {
                M: {
                    'breakfast': { S: tueB },
                    'lunch': { S: tueL },
                    'dinner': { S: tueD }
                }
            },
            'wednesday': {
                M: {
                    'breakfast': { S: wedB },
                    'lunch': { S: wedL },
                    'dinner': { S: wedD }
                }
            },
            'thursday': {
                M: {
                    'breakfast': { S: thuB },
                    'lunch': { S: thuL },
                    'dinner': { S: thuD }
                }
            },
            'friday': {
                M: {
                    'breakfast': { S: friB },
                    'lunch': { S: friL },
                    'dinner': { S: friD }
                }
            },
            'saturday': {
                M: {
                    'breakfast': { S: satB },
                    'lunch': { S: satL },
                    'dinner': { S: satD }
                }
            },
            'sunday': {
                M: {
                    'breakfast': { S: sunB },
                    'lunch': { S: sunL },
                    'dinner': { S: sunD }
                }
            },
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
        } else {
            console.log("Success", data);
            res.status(200).send('Success');
        }
    });
}

const getMealSchedule = (req, res) => {
    let userId = req.body.userId

    var params = {
        TableName: calendarTableName,
        Key: {
            'userId': { S: userId }
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

const deleteMealSchedule = (req, res) => {
    let userId = req.body.userId;

    let params = {
        TableName: calendarTableName,
        Key: {
            'userId': { S: userId },
        }
    };

    ddb.deleteItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500).send('Error');
        } else {
            console.log("Success", data);
            res.status(200).send('Success');
        }
    })
}

module.exports = {
    postMeal,
    putMeal,
    getMeal,
    deleteMeal,
    getMeals,
    putMyMeals,
    postMealSchedule,
    putMealSchedule,
    getMealSchedule,
    deleteMealSchedule
}