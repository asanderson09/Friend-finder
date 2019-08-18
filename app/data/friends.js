// DATA
// Below data will hold all choices of friends to be matched with.

var friendsArray = [
    {
        name: "Captain America",
        photo: "https://pbs.twimg.com/profile_images/685896589362216963/N2j7Rc9E.png",
        scores: [2,3,4,5,2,3,4,5,1,2]
    },{
        name: "Iron Man",
        photo: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/21832/square_thumb%402x.jpg",
        scores: [1,2,3,4,5,1,2,4,2,2]
    },{
		name: 'Beyonce Knowles',
		photo: 'http://www.billboard.com/files/styles/article_main_image/public/media/beyonce-feb-2014-billboard-650.jpg',
		scores: [5,4,4,2,4,4,3,2,3,3]
	},{
        name: "Mike Tyson",
        photo: "https://i.ytimg.com/vi/Vguo3zJPPjU/maxresdefault.jpg",
        scores: [1,3,4,5,2,5,4,5,1,2]
    },{
        name: "Cardi B",
        photo: "https://pbs.twimg.com/profile_images/685896589362216963/N2j7Rc9E.png",
        scores: [4,3,2,5,2,1,4,5,1,5]
    },{
        name: "Angelina Jolie",
        photo: "https://www.rollingstone.com/wp-content/uploads/2018/06/angelina-jolie-opens-up-about-life-after-pitt-divorce-45da5f38-e469-40a0-9540-a2b0cc41f321.jpg?resize=900,600&w=440",
        scores: [2,2,4,5,2,3,2,5,1,2]
    },{
        name: "Bruce Lee",
        photo: "https://www.thewrap.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-03-at-12.16.38-PM-e1530659833859.png",
        scores: [2,3,4,5,2,3,4,5,1,2]
    },{
        name: "Busted",
        photo: "https://media.istockphoto.com/vectors/busted-red-grunge-square-vintage-rubber-stamp-vector-id1125656952",
        scores: [1,1,1,1,1,1,1,1,1,1]
    },{
        name: "Cheater",
        photo: "http://bittersweetbreakups.com/wp-content/uploads/2013/04/cheater_Sticker.jpg",
        scores: [5,5,5,5,5,5,5,5,5,5]
    },{
        name: "Even Steven",
        photo: "https://imgix.bustle.com/elite-daily/2015/02/05173138/BernardBeansAranguren_elitedaily.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70",
        scores: [5,5,5,5,5,5,5,5,5,5]
    }
];


// How we export the array, makes it accessible to other files using require.
module.exports = friendsArray;
