var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    flash = require('connect-flash'),
    nodemailer = require("nodemailer");

var app = express();

// mongoose.connect(process.env.DATABASEURL);
mongoose.connect("mongodb://admin:!1Mlab!1@ds119930.mlab.com:19930/portfolio_scott");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/Public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(require("express-session")({
    secret: "Zelda is a cutie",
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.get("/portfolio", function(req, res){
    res.render("portfolio");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.get("/resources", function(req, res){
    res.render("resources");
})

app.get("/contact", function(req, res){
    res.render("contact");
})

app.post('/contact', function(req, res){
    var output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.companyName}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.details}</p>
    `
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false, // true for 465, false for other ports
        auth: {
            user:  process.env.USERNAME, // generated ethereal user
            pass:  process.env.PASSWORD  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <inquery.selke@gmail.com>', // sender address
        to: 's.w.selke@gmail.com', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            req.flash("error", "Error Sending Email, Please Try Again");
            res.redirect('contact');
        } else {
            req.flash("success", "Email Sent!");
            res.redirect('contact');
        }
    });
})

//

app.listen(process.env.PORT || 27017, process.env.IP, function(){
    console.log("Server started...");
})
