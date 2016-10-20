

Parse.initialize("fo234155135dgwefb");
Parse.serverURL = "https://parse-server-exmpl.herokuapp.com/parse";


// var Customer = Parse.Object.extend("Customer");
// var customer = new Customer();
//
// var data = {
//
//     'name': 'Primoz',
//     'surname': 'Cvenkelj',
//     'profession': 'js guru'
//
// };
//
// customer.save(data, {
//
//     success: function(user){
//
//         console.log("A new user with the id " + user.id + " was saved!");
//
//         var q = new Parse.Query("Customer");
//         q.get(user.id, {
//
//             success: function(user) {
//
//                 console.log("A user with the id " + user.id + " was retrieved!");
//
//                 user.set('name', 'Cecko');
//                 user.set('age', 30);
//
//                 user.save(null, {
//
//                     success: function(user) {
//
//                         console.log("A user with the id " + user.id + " was updated!");
//
//                         user.destroy({
//
//                             success: function(user) {
//
//                                 console.log('User ' +user.id +'was deleted');
//
//                             },
//                             error: function(err) {
//
//
//                             }
//                         });
//
//                     },
//
//                     error: function(user, err) {
//
//                         console.log(err);
//
//                     }
//
//                 });
//
//             },
//
//             error: function(user, err) {
//
//                 console.log(err);
//             }
//
//         });
//
//     },
//     error: function(user, err){
//
//         console.log(err);
//
//     }
//
// });

/*var Order = Parse.Object.extend('Order');
var order = new Order();

var orderData = {

    order_id: 'OI_1234',
    amount: 112.3,
    date: Date.now()

};

order.save(orderData)
    .then(function success(obj){
        console.log('You created the order' + obj.id+ '!');
    }, function error(obj, err){
        console.log(err);
});


var Item = Parse.Object.extend('Item');
var items = [

    {
        item_id: 1,
        name: 'hat',
        cost: 12.3,
        order: order

    },
    {
        item_id: 2,
        name: 'shoes',
        cost: 50,
        order: order

    },
    {
        item_id: 3,
        name: 'glove',
        cost: 50,
        order: order

    }


];

for(var i = 0; i < items.length; i++) {
    var item = new Item();
    item.save(items[i])
        .then(function success(item) {
            console.log('Item created with id' + item.id);
        }, function error(item, err) {
            console.log(err);
        });
}*/


function onComplete(){

    var promise = new Parse.Promise();

    setTimeout(function(){

        console.log('Timeout set');
        promise.resolve('Promise resolved');

    }, 2000);

    return promise;
};

onComplete()
    .then(function success(message){

        console.log(message);
        console.log('Now its time to go to work');

    });


