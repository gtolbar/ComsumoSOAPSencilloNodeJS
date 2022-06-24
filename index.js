var valor = process.argv.slice(2);

console.log('Argumento 1:',valor[0]);

var soap=require('soap');
var url='https://www.dataaccess.com/webservicesserver/NumberConversion.wso?wsdl';
var args={dNum:valor[0]};
soap.createClient(url,function(err,client){
client.NumberConversion.NumberConversionSoap12.NumberToDollars(args,function(err,result){
	console.log(result);
});
});
