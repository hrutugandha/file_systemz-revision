const app = require('./index');
const connect = require('./configs/db');

app.listen(5000, async() => {


    try {
        await connect();
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
  console.log('Server is running on port 5000');
  
})