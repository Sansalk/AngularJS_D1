/// <reference path="E:\Learning\AngularJS_D1\AngularJS_D1\angular.min.js" />


var myApp = angular.module("myModule", [])
                   .controller("myController", function ($scope) {
                       //$scope.message = "Angular By Sanjaya"

                       var employee = {
                           firstName: "Uthpala",
                           lastname: "Wijemanna",
                           gender: "Female"
                       }
                       $scope.employee = employee;
        });

       myApp.controller("myPlanController", function ($scope) {
      
                       var PlanObject = {
                           name: "Sri Lankan Air Line", Destination: "Colombo", Plan: "/aroplan.jpg", specialmessage: "Hello sanjaya bass"
                               };
                       $scope.PlanObject = PlanObject;


       });

       myApp.controller("myStudentController", function ($scope) {

           var StudentObject = {
               SfirstName: "Ben",
               SlastName: "Hastings",
               Sgender: "Male"
           };

           $scope.StudentObject = StudentObject;

       });
       myApp.controller("myCountriesController", function ($scope) {

           var CountryObject = [{ CountryName: "UK", County: "Cambridgeshire", City: "Cambridge" },
                                { CountryName: "UK", County: "Kent", City: "Dartford" }
           ];

           $scope.CountryObject = CountryObject;

       });

       myApp.controller("myTechnoController", function ($scope) {

           var technologies = [
                   { name: "C#", likes: 0, dislikes: 0 },
                   { name: "ASP.NET", likes: 0, dislikes: 0 },
                   { name: "SQL", likes: 0, dislikes: 0 },
                   { name: "AngularJS", likes: 0, dislikes: 0 }
           ];

           $scope.technologies = technologies;
           $scope.incrementLikes = function (technology) {
               technology.likes++
           }
           $scope.incrementDislikes = function (technology) {
               technology.dislikes++
           }

       });