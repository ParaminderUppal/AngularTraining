app.service('MathService', function() {
    this.add = function(a, b) { return a + b };
    
    this.subtract = function(a, b) { return a - b };
    
    this.multiply = function(a, b) { return a * b };
    
    this.divide = function(a, b) { return a / b };
});

app.service('CalculatorService', function(MathService){
    
    this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };

});


app.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        	'name': 'Puppal',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];
    
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }

    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
    
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});


app.factory ('Model', function () {
    var data = [
        {id:0, title:'Doh', detail:"A dear. A female dear."},
        {id:1, title:'Re', detail:"A drop of golden sun."},
        {id:2, title:'Me', detail:"A name I call myself."},
        {id:3, title:'Fa', detail:"A long, long way to run."},
        {id:4, title:'So', detail:"A needle pulling thread."},
        {id:5, title:'La', detail:"A note to follow So."},
        {id:6, title:'Tee', detail:"A drink with jam and bread."}
    ];
    return {
        notes:function () {
            return data;
        },
        get:function(id){
          return data[id];
        },
        add:function (note) {
            var currentIndex = data.length;
            data.push({
                id:currentIndex, title:note.title, detail:note.detail
            });
        },
        delete:function (id) {
            var oldNotes = data;
            data = [];
            angular.forEach(oldNotes, function (note) {
                if (note.id !== id) data.push(note);
            });
        }
    }
});
