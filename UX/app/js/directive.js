app.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: false,
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    };
});

app.directive("myDirective1", function(){
    return {
        restrict: "EA",
        scope: true,
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    };
});

app.directive("myDirective2", function(){
    return {
        restrict: "EA",
        scope: {},
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name'/>"
    };
});

app.directive("myDirective3", function(){
    
    return {
        restrict: "EA",
        scope: {
            name: "@",
            color: "=",
            reverse: "&"
        },
        template: [
            "<div class='line'>",
            "Name : <strong>{{name}}</strong>;  Change name:<input type='text' ng-model='name' /><br/>",
            "</div><div class='line'>",
            "Color : <strong style='color:{{color}}'>{{color|uppercase}}</strong>;  Change color:<input type='text' ng-model='color' /><br/></div>",
            "<br/><input type='button' ng-click='reverse()' value='Reverse Name'/>"
        ].join("")    
    };
});

/*Link and Post link function*/

app.directive('dad', function () {
    return {
        restrict: 'EA',
        template: '<div>{{greeting}}{{name}}</div>',

        link: function(scope,elem,attr){
            scope.name = 'Paul';
            scope.greeting = 'Hey, I am ';
        }
    };
});

app.directive('dad1', function () {
    return {
        restrict: 'EA',
        template: '<div>{{greeting}}{{name}}</div>',
        link: {
            post: function(scope,elem,attr){
                scope.name = 'Paul';
                scope.greeting = 'Hey, I am ';
            }
        }
    };
});

/*Problem with child directives*/

app.directive('dad2', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{fathergreeting}}{{fathername}}'+
        '<son></son>'+
        '</div>',
        link: function(scope,elem,attr){
            scope.fathername = 'Paul1';
            scope.fathergreeting = 'Hey, I am ';
        }
    };
});
app.directive('son', function () {
    return {
        restrict: 'EA',
        template: '<div class="son">{{sonSays}}</div>',
        link: function(scope,elem,attr){
            scope.sonSays = 'Hey, I am son, and my dad is '+ scope.fathername;
        }
    };
});

/*Prelink in Directives*/

app.directive('dad3', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{CorrectGreeting}}{{correctName}}'+
        '<son1></son1>'+
        '</div>',
        link: {
            pre: function(scope,elem,attr){
                scope.correctName = 'Paul';
                scope.CorrectGreeting = 'Hey, I am ';
            }
        }
    };
});
app.directive('son1', function () {
    return {
        restrict: 'EA',
        template: '<div class="son">{{son1Says}}</div>',
        link: function(scope,elem,attr){
            scope.son1Says = 'Hey, I am son, and my dad is '+ scope.correctName;
        }
    };
});

/*Controller in Directives*/

app.directive('dad4', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{newGreeting}}{{newName}}'+
        '<son2></son2>'+
        '</div>',
        controller: function(){
            this.name = 'Paul'
        },
        link: function(scope,elem,attr,ctrl){
            scope.newName = ctrl.name;
            scope.newGreeting = 'Hey, I am ';
        }
    };
});
app.directive('son2', function () {
    return {
        restrict: 'EA',
        require: '^dad4',
        template: '<div class="son">{{son2Says}}</div>',
        link: function(scope,elem,attr,ctrl){
            scope.son2Says = 'Hey, I am son, and my dad is '+ ctrl.name;
        }
    };
});