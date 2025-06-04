const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const Handlebars = require('handlebars');

// Đăng ký helper limit
Handlebars.registerHelper('limit', function(array, limit) {
    return array.slice(0, limit);
});

// Cấu hình session
app.use(session({
    secret: 'your_secret_key',  // Chìa khóa bí mật để mã hóa session
    resave: false,              // Không lưu lại session nếu không có thay đổi
    saveUninitialized: true,    // Lưu session mới ngay cả khi chưa có giá trị
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // Thời gian sống của cookie (1 ngày)
    }
}));

const NVKTRoute = require("./src/routes/NVKT/indexRoutes");
const NVTNRoute = require("./src/routes/NVTN/indexRoutes");
const UnloginRoute = require("./src/routes/Unlogin/indexRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main', // Layout chính
    layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
    partialsDir: [
        path.join(__dirname, 'src', 'views', 'partials', 'Unlogin'),
        path.join(__dirname, 'src', 'views', 'partials', 'NVTN'),
        path.join(__dirname, 'src', 'views', 'partials', 'NVKT'),
    ]
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'))

app.use(express.static(path.join(__dirname, 'src', 'public')));

NVTNRoute(app);
NVKTRoute(app);
UnloginRoute(app);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
