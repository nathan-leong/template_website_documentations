const AWS = require('aws-sdk')

const getList = () => new Promise((resolve,reject) => {
    
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});
    
    var params = {
        Bucket: "template-website"
    };
    s3.listObjects(params, function(err, data) {
       if (err) reject(err); // an error occurred
       else     {
           console.log(data)
           resolve(data.Contents.map(item => item.Key));           // successful response
       }
    });
})

module.exports = getList