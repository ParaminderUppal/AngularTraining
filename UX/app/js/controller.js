// Login controller
app.controller("ContentCtrl", ['$scope', '$rootScope', '$location', '$resource', function($scope, $rootScope, $location, $resource){
    $scope.navigate = function(url){
        $location.path(url);
    }
}]);


app.controller("SettingsController2", function($scope, $rootScope){
    $scope.name = "John Smith";

    $scope.contacts = [{type:'phone', value:'408 555 1212'},
        {type:'email', value:'john.smith@example.org'} ];

    $scope.greet = function() {
        alert($scope.name);
    };

    $scope.addContact = function() {
        $scope.contacts.push({type:'email', value:'yourname@example.org'});
    };

    $scope.removeContact = function(contactToRemove) {
        var index = $scope.contacts.indexOf(contactToRemove);
        $scope.contacts.splice(index, 1);
    };

    $scope.clearContact = function(contact) {
        contact.type = 'phone';
        contact.value = '';
        
    };
});

app.controller("ContactController", function($scope, $rootScope){
    
    $scope.contacts = [
        { id:0, 'name': 'Viral',
          'email':'hello@gmail.com',
          'phone': '123-2343-44'
        }
    ];
    $scope.saveContact = function() {
        if($scope.newcontact.id == null) {
            //if this is new contact, add it in contacts array
            $scope.newcontact.id = $rootScope.uid++;
            $scope.contacts.push($scope.newcontact);
            } else {
            //for existing contact, find this contact using id
            //and update it.
            for(i in $scope.contacts) {
                if($scope.contacts[i].id == $scope.newcontact.id) {
                $scope.contacts[i] = $scope.newcontact;
                }
            }
        }
        //clear the add contact form
        $scope.newcontact = {};
    }
    $scope.delete = function(id) {
        //search contact with given id and delete it
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.contacts.splice(i,1);
                $scope.newcontact = {};
            }
        }
    }
    $scope.edit = function(id) { 
    //search contact with given id and update it 
        for(i in $scope.contacts) { 
            if($scope.contacts[i].id == id) { 
            //we use angular.copy() method to create //copy of original object 
                $scope.newcontact = angular.copy($scope.contacts[i]); 
            } 
        }
    }
});

angular.module('angularTraining')
    .controller('Customers', function() {
      
        this.data = {title:'Customers', names: [
            {name: 'Haley'}, {name: 'Ella'}, {name: 'Landon'}, {name: 'John'}
            ]};

        this.greet = function(name){
            alert(name);
        }
    }
);


app.controller("cacheCtrl", function($scope, $rootScope, $location, $resource,$http){

    $rootScope.userName = "";
    
    $scope.retrievePayload = function(userName){
        var fileName;
        var isfetch = true;
        if(userName === 'user1'){
            $rootScope.userName = 'user1';
            fileName = "images.json";
        }else if(userName === 'user2'){
            $rootScope.userName = 'user2';
            fileName = "images1.json";
        }

        if(localStorage.getItem($scope.userName) != undefined){
            debugger;
            $scope.payload = JSON.parse(localStorage.getItem($rootScope.userName)); 


            var timeDiff = Math.abs( new Date().getTime() - new Date($scope.payload.cacheStartDate).getTime()) ;   
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));  
            if(diffDays == $scope.payload.expireDays || diffDays > $scope.payload.expireDays){
                isfetch = true;
            }else{
                isfetch = false;
            }

        }
        


        if(isfetch){
            $resource('UX/datafile/' + fileName).get(function(data){
                debugger;
                console.log(data);
                $scope.payload = data;
                $scope.payload.cacheStartDate = new Date();
               // $scope.convertImage();
                //localStorage.setItem($rootScope.userName, JSON.stringify($scope.payload));
            });
        }
        
    }
});

app.controller("CarController", function($scope, $rootScope, $location, $resource){
    $scope.name = 'Car';
    $scope.type = 'Car';    

});

app.controller("BMWController", function($scope, $rootScope, $location, $resource){
    
    $scope.name = 'BMW';
});

app.controller("BMWMotorcycleController", function($scope, $rootScope, $location, $resource){
    
    $scope.name = 'BMWMotorade';
    $scope.type = 'Motorcycle';
});

app.controller('ExampleController', ['$scope', function($scope) {
  var friends = [
    {name: 'John',   phone: '555-1212',  age: 10},
    {name: 'Mary',   phone: '555-9876',  age: 19},
    {name: 'Mike',   phone: '555-4321',  age: 21},
    {name: 'Adam',   phone: '555-5678',  age: 35},
    {name: 'Julie',  phone: '555-8765',  age: 29}
  ];

  $scope.propertyName = 'age';
  $scope.reverse = true;
  $scope.friends = friends;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
}]);

app.controller("scopeController",function($scope){
    $scope.name = "Harry";
    $scope.color = "#333333";
    
    $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };
   
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
});

app.controller('CalculatorController', function($scope, CalculatorService) {

    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }

    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
});

app.controller('ContactController1', function ($scope, ContactService) {

    $scope.contacts = ContactService.list();

    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
});

app.controller('ListCtrl', function ($scope, Model) {

    $scope.items = Model.notes();
});


app.controller('DetailCtrl', function ($scope, Model, $routeParams){

    var id = $scope.itemId = $routeParams.itemId;
    $scope.item = Model.get(id);
});

app.controller("HelloController", function ($scope) {
    $scope.myName = "";
    $scope.greeting = "h";
    $scope.$watch("myName", function (newValue, oldValue) {
        if ($scope.myName.length > 5) {
            $scope.updated_info = "\"" + $scope.myName + "\" has length > 5";
        } else {
            $scope.updated_info = "\"" + $scope.myName + "\" has length <= 5";
        }
    });
});

    
