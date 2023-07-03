import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';

const app = express();
const port = 8888;
// set method iamge, css
app.use(express.static('src/public'))


app.engine('.hbs', engine({extname:'.hbs'}))
app.set('view engine', '.hbs');
app.set('views', './src/views')


routes(app)

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})