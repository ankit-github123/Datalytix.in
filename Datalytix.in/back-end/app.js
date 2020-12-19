const express = require('express');
const bodyParser = require('body-parser');
const subsriberRoute = require('./routes/subsribers-route')
const HttpError = require('./models/http-error');
const mongoose =require('mongoose');
const fs = require('fs');
const path = require('path');
const app = express();
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')

const razorpay = new Razorpay({
	key_id: 'rzp_test_iYDyQvt41W8b78',
	key_secret: 'VcjKUDkR4cuCAC5jUPlslgJO'
})

app.use(cors())
app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    next();
  })
app.use('/subscriber',subsriberRoute);

app.use((req,res,next)=>{
    return next(new HttpError("Could not find the route !",404))
})

app.use((error,req,res,next)=> {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred"});
});



//Razorpay
app.post('/verification', (req, res) => {
	// do a validation
	const secret = '@8JbkadX#ap6AG2'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
		res.status(502);
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 100
	const currency = 'INR'

	const options = {
		amount: amount,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

const url =process.env.MONGO_URL;
// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jkw0s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(url).then(()=>{
    app.listen(process.env.PORT || 5000);

}).catch(()=>{
    console.log('OOPS! database not connected !');
});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/', (req, res, next) => {
//     res.send(
//       '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
//     );
//   });
// app.post('/user', (req, res, next) => {
//   res.send('<h1>User: ' + req.body.username + '</h1>');
// });
