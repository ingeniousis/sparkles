var app = angular.module('app', ['ui.bootstrap'
]);

app.controller('FooterController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.alerts = [];
        $scope.subscribeInProgress = false;

        $scope.socialUrls = {
            facebook: 'https://www.facebook.com/pizzicatopeeps',
            twitter: 'https://twitter.com/PizzicatoPeeps',
            pinterest: 'https://www.pinterest.com/pizzicatopeeps/',
            instagram: 'http://instagram.com/pizzicatopeeps/',
            youtube: 'https://www.youtube.com/channel/UCL1gwfk2moAszPELmLNENyw/videos',
            email: 'mailto:info@pizzicatopeeps.com'
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.subscribe = function () {
            if (validateEmail($scope.email)) {
                $scope.subscribeInProgress = true;
                $http({
                    url: '/api/subscribe?email=' + $scope.email,
                    method: 'POST',
                    data: {}
                }).then(
                    function (data) {
                        if (data.status == 200) {
                            addAlert(true, $scope.email + ' is already subscribed to receive email from us.');
                        }
                        else {
                            addAlert(true, 'Thanks! Please check your inbox for an email to confirm your subscription');
                        }

                        $scope.email = undefined;
                        $scope.subscribeInProgress = false;
                    },
                    function (data) {
                        addAlert(false, 'Sorry it seems that the server is not responding. Please try again later!');
                        $scope.email = undefined;
                        $scope.subscribeInProgress = false;
                    }
               );
            }
            else {
                addAlert(false, 'Please enter a valid email address');
            }
        };

        function addAlert(success, message) {
            $scope.alerts = [];
            $scope.alerts.push({ msg: message, type: (success ? 'success' : 'danger') });
        }

        function validateEmail(email) {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        }
    }]);

app.controller('AboutController', ['$scope',
    function ($scope) {
        $scope.beginProfile = 
        {
            "Name": "Begin Scarseth",
            "Description": "Begin Scarseth is an active performer and teacher in the Seattle area. She is the concertmaster of the Seattle Rock Orchestra and plays in the Tacoma Symphony.  Begin recieved her Bachelors of Musical Arts degree from Pacific Lutheran University in 2004.  Since then, she has established large private teaching studios and does outreach work through the Seattle Youth Symphony Orchestras. Begin teaches hundreds of students every week both in her work in the public schools and her private lessons. She strongly believes that having music in one's life helps with self-esteem, lifelong friend making and a general positive outlook on life.  Begin is a mother of two young daughters and enjoys working in her garden, dancing and cooking. ",
            "Thumbnail": "img/team/begin.jpg"
        };

        $scope.rachelProfile = 
        {
            "Name": "Rachel Nesvig",
            "Description": "Orchestra teacher by day, violinist by night - Rachel plays the violin in the Tacoma Symphony, Yakima Symphony, Seattle Rock Orchestra and other local groups.  She has coached camps such as the Icicle Creek Summer Symphony, Seattle Rock Orchestra Summer Intensive, Evergreen Music Festival and the Kenya National Youth Orchestra. She graduated from St. Olaf College with a double major in Music and Norwegian, followed by her K-12 Teaching Certificate and Masters in Violin Performance from the Central Washington University.  Although violin takes up a lot of time, Rachel also enjoys being in nature, bike riding, rock climbing, traveling, sunshine, drinking coffee, playing the Hardanger Fiddle and being silly!",
            "Thumbnail": "img/team/rachel.jpg"
        };

        $scope.dhruvProfile = 
        {
            "Name": "Dhruv Sood",
            "Description": "A user experience program manager at Microsoft, Dhruv is also a violinist and performs in the intermediate orchestra at WSCO. Passionate about both music and tech, he founded Pizzicato Peeps and is our director and content producer.",
            "Thumbnail": "img/team/dhruv.jpg"
        };

        $scope.sonalProfile = 
        {
            "Name": "Sonal Gandhi",
            "Description": "Sonal is the data whiz and number cruncher for Pizzicato Peeps. She is listening to every comment we get on our videos via YouTube and social media, learning how we can make our videos more useful and grow the Pizzicato Peeps community. In her other life, she is a Software Developer and an amateur pianist.",
            "Thumbnail": "img/team/sonal.jpg"
        };

        $scope.pranipProfile = 
        {
            "Name": "Pranip Borah",
            "Description": "Music Lover, technophile, and startup enthusiast. As our 'Chief Technology Officer', Pranip is in charge of the website and other tech stuff at Pizzicato Peeps. ",
            "Thumbnail": "img/team/pranip.jpg"
        };

    }]);


app.controller('TutorialsController', ['$scope', '$modal',
    function ($scope, $modal) {

        $scope.tutorials = [
        // {
        //     "Name": "5 exercises to perfect your bow hold",
        //     "Description": "Learn one of the most important parts of playing the violin - the bow hold. In this video, we teach you how to hold your bow, and show you 5 exercises to strengthen your bow hold. Practice on and perfect your bow hold.",
        //     "Thumbnail": "img/portfolio/video4-close.png",
        //     "Id": "jAh99ic71_g"
        // },
        // {
        //     "Name": "How to put on your shoulder rest",
        //     "Description": "Learn shoulder rest basics. In this video, we'll teach you how to put one on the right way, knowing when it's wrong and adjusting your shoulder rest to make it more comfortable.",
        //     "Thumbnail": "img/portfolio/video1-close.png",
        //     "Id": "M4xqz5GioLk"
        // },        
        {
            "Name": "How to loosen and tighten your bow",
            "Description": "Learn why you need to loosen and tighten your bow. In this video, we'll teach you a neat pencil trick to know how much to tighten your bow. You will also learn what happens if you tighten or loosen too much, and what to do if your frog falls off!",
            "Thumbnail": "img/portfolio/video2-close.png",
            "Id": "ao2rb2xNOD4"
        },
        {
            "Name": "7 Pitiful Posture Problems",
            "Description": "Learn how to hold the violin and how to fix common problems with holding the violin. In this video, we will show you 7 pitiful posture problems. Watch out for these when you are playing and try your best to get them perfect.",
            "Thumbnail": "img/portfolio/video3-close.png",
            "Id": "hPOUfgN_2vo"
        },
        {
            "Name": "How to play Happy Birthday on the violin",
            "Description": "Learn how to play Happy Birthday on the violin with this special, karaoke-style, play along version. Watch till the end where Rachel & Begin perform a fancied-up version of Happy Birthday.",
            "Thumbnail": "img/portfolio/video5-close.png",
            "Id": "usVyI455YfY"
        }];

        $scope.tutorials.forEach(function (tutorial) {
            tutorial.Href = String.format("https://www.youtube.com/embed/{0}?badge=0&amp;autoplay=1&amp;html5=1", tutorial.Id);            
        });

        var length = $scope.tutorials.length;
        $scope.featuredVideo = $scope.tutorials[length - 1];
        $scope.earlierVideos = $scope.tutorials.slice(0, length - 1);
        
        $scope.open = function (item) {
            $modal.open({
                templateUrl: '../Partials/ModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'md',
                resolve: {
                    video: function () {
                        return item;
                    }
                }
            });
        };
    }]);

app.controller('ModalInstanceCtrl', ['$scope', '$sce', '$modalInstance', 'video', function ($scope, $sce, $modalInstance, video) {
    $scope.video = video;
    $scope.url = $sce.trustAsResourceUrl(video.Href);

    var shareUrls = {};
    shareUrls.facebook = String.format("https://www.facebook.com/sharer.php?u=http://y2u.be/{0}", video.Id);
    shareUrls.twitter = String.format("https://twitter.com/share?url=http://y2u.be/{0}&text={1}&hashtags=pizzicatopeeps", video.Id, video.Name);
    shareUrls.google = String.format("https://plus.google.com/share?url=http://y2u.be/{0}", video.Id);
    shareUrls.email = String.format("mailto:?Subject={0}&Body=I%20saw%20this%20and%20thought%20of%20sharing%20with%20you!%20 https://www.youtube.com/watch?v={1}", video.Name, video.Id);
    $scope.shareUrls = shareUrls;

    $scope.close = function () {
        $modalInstance.dismiss('close');
    };
}]);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// Extends String class with format method
if (!String.prototype.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}