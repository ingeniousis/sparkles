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
                        if (data.status == 200)
                        {
                            addAlert(true, $scope.email + ' is already subscribed to receive email from us.');
                        }
                        else
                        {
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

app.controller('TutorialsController', ['$scope',
    function ($scope) {
        $scope.featuredTutorial = {
            "Name": "How to loosen and tighten your bow",
            "Description": [
                " Why you need to tighten and loosen your bow", 
                " A neat pencil trick to know how much to tighten your bow", 
                " What happens if you tighten or loosen too much?",
                " What do you do if the frog falls off?"],
            "Thumbnail": "img/portfolio/video2-close.png",
            "Href": "https://www.youtube.com/watch?v=ao2rb2xNOD4"
        };

        $scope.tutorials = [{
            "Name": "How to put on your shoulder rest",
            "Description": [
                " Learn shoulder rest basics",
                " Why use a shoulder rest",
                " Putting one on the right way and knowing when it's wrong",
                " Adjusting your shoulder rest to make it more comfortable"],
            "Thumbnail": "img/portfolio/video1-close.png",
            "Href": "https://www.youtube.com/watch?v=M4xqz5GioLk"
        },
        {
            "Name": "How to loosen and tighten your bow",
            "Description": [
                " Why you need to tighten and loosen your bow",
                " A neat pencil trick to know how much to tighten your bow",
                " What happens if you tighten or loosen too much?",
                " What do you do if the frog falls off?"],
            "Thumbnail": "img/portfolio/video2-close.png",
            "Href": "https://www.youtube.com/watch?v=ao2rb2xNOD4"
        }];

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

$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});