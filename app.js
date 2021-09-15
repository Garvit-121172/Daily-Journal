//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Daily Journal is the world’s most popular blogging platforms.Started in 2020, Daily Journals now powers more than 42% of all websites on the internet. Daily Journal is an open source free blogging platform that allows you to build your posts or blog within minutes.It is a self-hosted solution.Daily Journal is a great option if you love to read and write blogs.";
const aboutContent = "We are THE DAILY JOURNALS working on your intersts and mood.We believe in conveyin your mood and expereinces to the world out there.Learning from other's mistake is the best learing and prevention too.So Keep posting and journaling here,Good Luck!👍";
const contactContent = "We are a Gurgaon Based StartUp under the sheer captaincy of Mr.Garvit Khurana we have made records and will be the no 1 in the market soon. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
var Posts = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(8000, function () {
  console.log("Server started on port 3000");
});
app.get("/", function (req, res) {
  res.render("home.ejs", { Hcont: homeStartingContent, AllPosts: Posts });

})
app.get("/:ab", function (req1, res1) {
  res1.render(req1.params.ab, { Acontent: aboutContent, Ccontent: contactContent });
});
app.get("/posts/:nm", function (req, res5) {
  tofind = req.params.nm
  var i = 0;
  for (i = 0; i < Posts.length; i++) {
    if (Posts[i].title == tofind) {
      console.log("match Found!");
      break;
    }
  }
  res5.render("posts.ejs", { Pname: Posts[i].title, Pbody: Posts[i].body });
})

app.post("/", function (req3, res3) {
  var PostBody = req3.body.NewPost;
  var PostTitle = req3.body.NewTitle;
  var Post = {
    title: PostTitle,
    body: PostBody
  }
  Posts.push(Post);
  res3.redirect("/");
})
