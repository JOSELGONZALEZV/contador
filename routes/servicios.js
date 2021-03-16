const { Router } = require('express');
const router = Router();



// rutas
router.get('/', (req,res)=> {
	if (req.session.count == undefined){
		req.session.count = 0;
	};
	req.session.count = req.session.count + 1;
	res.render('contador', {count: req.session.count});

});

router.get('/sumar2', (req,res)=>{

	req.session.count = req.session.count + 2;
	res.render('contador', {count: req.session.count});
});

router.get('/cero', (req,res)=> {
	req.session.count = req.session.count - req.session.count + 1;
	res.render('contador', {count: req.session.count});
});



module.exports = router;
