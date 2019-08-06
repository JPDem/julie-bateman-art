var express = require("express");
var app	= express();

app.set("view engine", "ejs");
app.get("/", function(req, res){
	res.render("landing");
});

app.get("/art", function(req, res){
	var arts = [
		{name: "JP's Pug", image: "https://scontent-lhr3-1.cdninstagram.com/vp/d641519d9c340f86036e357f034152f4/5DD52B4E/t51.2885-15/e35/44217987_1904352233011768_8224387045356536279_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com"},					
		{name: "Horse", image: "https://scontent-lhr3-1.cdninstagram.com/vp/74279edad795aa52c922e55f9e170d8e/5DD71EF7/t51.2885-15/e35/41834942_1994307950612706_1529622744327770941_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com"},		
	{name: "Phoenix", image: "https://scontent-lhr3-1.cdninstagram.com/vp/e394be9e71eaf6d57d148450c2225e45/5DD6A788/t51.2885-15/e35/41158171_300734080717789_9083500843590996972_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com"}
	]
	res.render("art", {arts: arts});
});

app.listen(process.env.PORT || 3000, () => {
   console.log("jj Server from Goorm is listening");
});