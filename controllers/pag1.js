const modelP1=require('../models/modelPag1.js');
const url = require('url');
const pag1=(req)=>{
	var result=modelP1();
	procesaGet(req, result);
		return(JSON.stringify(result));
}




module.exports=pag1;

//dar de alta, baja y modificar dat