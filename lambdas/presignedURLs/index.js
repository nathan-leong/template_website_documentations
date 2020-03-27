const AWS = require('aws-sdk')
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.handler = async (event) => {
    console.log(event.body)
    const body = JSON.parse(event.body)
    console.log(body)
    const url = s3.getSignedUrl('getObject', {
        Bucket: "template-website",
        Key: body.key,
        Expires: 15
    })
    console.log(url)
    const response = {
        statusCode: 200,
        body: JSON.stringify(url),
        headers:{
            'Access-Control-Allow-Origin': '*' 
        }
    };
    return response;
};
