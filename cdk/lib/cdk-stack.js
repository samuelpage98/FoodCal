const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');
const dynamodb = require('aws-cdk-lib/aws-dynamodb')
const lambda = require('aws-cdk-lib/aws-lambda')
const apigw = require('@aws-cdk/aws-apigatewayv2-alpha')
const cdk = require('@aws-cdk/core')
const s3 = require('aws-cdk-lib/aws-s3')
const path = require('path')
const integrations = require('@aws-cdk/aws-apigatewayv2-integrations-alpha')

class CdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // 👇 create Dynamodb table
    const mealLibraryTable = new dynamodb.Table(this, 'MealLibraryTable', {
      partitionKey: { name: 'mealId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const calendarTable = new dynamodb.Table(this, 'CalendarTable', {
      partitionKey: { name: 'userID', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // S3 Bucket Creation
    /*
    const bucket = new s3.Bucket(this, 'bucket', {
      bucketName: 'food-cal-bucket',
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    */

    //lambda creation
    const fn = new lambda.Function(this, 'ServerLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
    });

    //api gateway
    const api = new apigw.HttpApi(this, "FoodCalApiGateway");
    api.addRoutes({
      path: "/{proxy+}",
      methods: [apigw.HttpMethod.ANY],
      integration: new integrations.HttpLambdaIntegration("FoodCalIntegration", fn)
    });

    mealLibraryTable.grantFullAccess(fn)
    calendarTable.grantFullAccess(fn)

  }
}

module.exports = { CdkStack }
