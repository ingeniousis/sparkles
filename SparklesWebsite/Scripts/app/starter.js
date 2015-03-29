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

app.controller('TutorialsController', ['$scope', '$modal',
    function ($scope, $modal) {

        $scope.tutorials = [
        {
            "Name": "How to put on your shoulder rest",
            "Description": "Learn shoulder rest basics. In this video, we'll teach you how to put one on the right way, knowing when it's wrong and adjusting your shoulder rest to make it more comfortable.",
            "Thumbnail": "img/portfolio/video1-close.png",
            "Id": "M4xqz5GioLk"
        },        
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