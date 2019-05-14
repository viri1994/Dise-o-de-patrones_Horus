'use strict'

const Pag1=require('../controllers/pag1');

const url=require('url');

const router=(req, resp)=>{
	if(req.url .startsWith('/pag1')){
		var result=Pag1(req);
		resp.end(result);
}   else if (req.url==='search'){
	
}


procesaGet(req);	
	
};

function procesaGet(peticion){
		console.log(peticion.url);
		let miURL=url.parse(peticion.url, true);
			if(miURL.query.func==='alta'){
				let nuevoRegistro={
					nombre: miURL.query.n,
					apellido_paterno:miURL.query.ap,
					apellido_Materno: miURL.query.am
				}

				modelo.push(nuevoRegistro);
			}
		}


	module.exports=router;
	
	
