var express = require("express");
var app	= express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var art = [
		{name: "JP's Pug", image: "https://scontent-lhr3-1.cdninstagram.com/vp/d641519d9c340f86036e357f034152f4/5DD52B4E/t51.2885-15/e35/44217987_1904352233011768_8224387045356536279_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com", year: 2019},					
		{name: "Horse", image: "https://scontent-lhr3-1.cdninstagram.com/vp/74279edad795aa52c922e55f9e170d8e/5DD71EF7/t51.2885-15/e35/41834942_1994307950612706_1529622744327770941_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com", year: 2019},		
	{name: "Phoenix", image: "https://scontent-lhr3-1.cdninstagram.com/vp/e394be9e71eaf6d57d148450c2225e45/5DD6A788/t51.2885-15/e35/41158171_300734080717789_9083500843590996972_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com", year: 2018}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/art", function(req, res){
	
	res.render("art", {art: art});
});

app.post("/art", (req, res) => {
	//get data from form and add to arts array
	var name = req.body.name;
	var image = req.body.image;
	var year = req.body.year;
	var newArt = {name: name, image: image, year: year}
	art.unshift(newArt);
	//redirect back to arts page
	res.redirect("/art");
	});

app.get("/art/new", (req, res) => {
	res.render("new.ejs");	
	});
	   

app.listen(process.env.PORT || 3000, () => {
   console.log("jj Server from Goorm is listening");
});