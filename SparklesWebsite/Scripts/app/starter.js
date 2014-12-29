var app = angular.module('app', [
]);

app.controller('TutorialsController', ['$scope',
    function ($scope) {
        $scope.tutorials = [{
            "Name": "Video One",
            "Description": "Video One Description",
            "Thumbnail": "img/portfolio/img1.jpg"
        },
        {
            "Name": "Video Two",
            "Description": "Video Two Description",
            "Thumbnail": "img/portfolio/img2.jpg"
        },
        {
            "Name": "Video Three",
            "Description": "Video Three Description",
            "Thumbnail": "img/portfolio/img3.jpg"
        },
        {
            "Name": "Video Four",
            "Description": "Video Four Description",
            "Thumbnail": "img/portfolio/img4.jpg"
        },
        {
            "Name": "Video Five",
            "Description": "Video Five Description",
            "Thumbnail": "img/portfolio/img5.jpg"
        },
        {
            "Name": "Video Six",
            "Description": "Video Six Description",
            "Thumbnail": "img/portfolio/img6.jpg"
        }];

    }]);

app.directive('contactform', ['$http',
    function ($http) {
        return {
            restrict: 'E',
            templateUrl: '../Partials/Contact.html',
            link: function ($scope, $element, attr) {
                $("input,textarea").jqBootstrapValidation({
                    preventSubmit: true,
                    submitError: function ($form, event, errors) {
                        // additional error messages or events
                    },
                    submitSuccess: function ($form, event) {
                        event.preventDefault(); // prevent default submit behaviour
                        // get values from FORM
                        console.log($scope.name + ':' + $scope.email);
                        $http.get('api/feedback').then(function () {
                            // Success message
                            $('#success').html("<div class='alert alert-success'><strong>Your message has been sent. </strong><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button></div>");

                            //clear all fields
                            $('#contactForm').trigger("reset");
                        },
                            function () {
                                // Fail message
                                $('#success').html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Sorry it seems that the server is not responding. Please try again later!");

                                //clear all fields
                                $('#contactForm').trigger("reset");
                            }
                        );
                    },
                    filter: function () {
                        return $(this).is(":visible");
                    },
                });

                $("a[data-toggle=\"tab\"]").click(function (e) {
                    e.preventDefault();
                    $(this).tab("show");
                });
            }
        }
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

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});