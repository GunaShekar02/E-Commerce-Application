const controller=require('./controller/buyer');
const express=require('express');
const app=express();
const db=require('./models');
const bodyParser=require('body-parser');
db.sequelize.sync({force : true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use('/', controller);

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log('Listening on port 3000');
});
