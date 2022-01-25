const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');
const dynamodb = require('aws-cdk-lib/aws-dynamodb')
const cdk = require('@aws-cdk/core')
const s3 = require('aws-cdk-lib/aws-s3')


class CdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'SamQueue', {
      visibilityTimeout: Duration.seconds(300)
    });


    // 👇 create Dynamodb table
    const table = new dynamodb.Table(this, 'Table', {
      partitionKey: { name: 'mealId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // S3 Bucket Creation
    const bucket = new s3.Bucket(this, 'bucket', {
      bucketName: 'food-cal-bucket',
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

  }
}

module.exports = { CdkStack }
