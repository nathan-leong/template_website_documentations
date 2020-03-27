const getList = require('./getList')

exports.handler = async (event) => {
    // TODO implement
    const list = await getList()
    const response = {
        statusCode: 200,
        body: JSON.stringify(list),
        headers:{
            'Access-Control-Allow-Origin': '*' 
        }
    };
    return response;
};
