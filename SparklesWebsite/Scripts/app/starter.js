var app = angular.module('app', ['ui.bootstrap'
]);

app.controller('FooterController', ['$scope', '$http',
    function ($scope, $http) {        
        $scope.alerts = [];

        $scope.socialUrls = {
            facebook: 'https://www.facebook.com/pizzicatopeeps',
            twitter: 'https://twitter.com/PizzicatoPeeps',
            pinterest: '#',
            instagram: 'http://instagram.com/pizzicatopeeps/',
            youtube: '#'
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.subscribe = function () {
            if (validateEmail($scope.email)) {
                $http.get('api/feedback').then(
                    function () {
                        addAlert(true, 'Thanks! Please check your inbox for an email to confirm your subscription');
                        $scope.email = undefined;
                    },
                    function () {
                        addAlert(false, 'Sorry it seems that the server is not responding. Please try again later!');
                        $scope.email = undefined;
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
        $scope.tutorials = [{
            "Name": "Video One",
            "Description": "Video One Description",
            "Thumbnail": "img/portfolio/img1.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Two",
            "Description": "Video Two Description",
            "Thumbnail": "img/portfolio/img2.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Three",
            "Description": "Video Three Description",
            "Thumbnail": "img/portfolio/img3.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Four",
            "Description": "Video Four Description",
            "Thumbnail": "img/portfolio/img4.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Five",
            "Description": "Video Five Description",
            "Thumbnail": "img/portfolio/img5.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
        },
        {
            "Name": "Video Six",
            "Description": "Video Six Description",
            "Thumbnail": "img/portfolio/img6.jpg",
            "Href": "https://www.youtube.com/watch?v=OPf0YbXqDm0"
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