import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = 3000;

app.get('/', (req, res) => {
    res.render('new', { isShow: true })
});

app.listen(port, () => {
    console.log('Server is running in port', port);
})