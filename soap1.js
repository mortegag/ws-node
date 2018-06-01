var soap = require('soap');
var url = 'http://10.252.76.120:51088/Service1.svc?wsdl';
var args = {name: 'value'};
soap.createClient(url, function(err, client) {
    client.MyFunction(args, function(err, result) {
        console.log(result);
    });
});