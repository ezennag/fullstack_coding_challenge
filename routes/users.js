var express = require('express');
var router = express.Router();

/* GET users listing. */
contacts = [
            {name: 'Kanye', age:15, imgUrl: 'http://assets.vg247.com/current//2015/02/kanye-west.jpg'},
            {name: 'West', age:18, imgUrl: 'http://assets.rollingstone.com/assets/2013/article/how-kanye-west-came-to-harvard-20131119/13521/_original/1035x672-111913-kanye-west-1800-1384897712.jpg'},
            {name: 'Donald', age:69, imgUrl: "http://www.theharwoodinstitute.org/wp-content/uploads/2015/07/trump.jpg"},
            {name: 'Barack', age:54, imgUrl: "http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNzg5ODI4MTEw.jpg"},
            {name: 'Bill', age:69, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/44_Bill_Clinton_3x4.jpg/466px-44_Bill_Clinton_3x4.jpg" },
            {name: 'Sean', age:27, imgUrl:"http://vni.s3.amazonaws.com/141104084453293.png"},
            {name: 'Hillary', age:67, imgUrl:"http://i.telegraph.co.uk/multimedia/archive/02831/Clinton1web_2831249b.jpg"}

        ]
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/people', function(req, res){
	res.send(contacts);
})

module.exports = router;
