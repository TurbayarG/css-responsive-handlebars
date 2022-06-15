const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.static('public'));

// Configure template Engine and Main Template File
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
    res.render('home', { home:'class'} );
});
app.get('/about-me', (req, res) => {
    res.render('about-me' , { aboutMe:'class'} );
});

app.get('/recent-posts', (req, res) => {
    res.render('recent-post', { recentPost:'class'} );
});

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
