var Player = Parse.Object.extend('Player');
var Team = Parse.Object.extend('Team');

var q = new Parse.Query('Player');
q.limit(1000);
q.descending('dateOfBirth');
q.first()
    .then(function(player){
        console.log('The youngest player is ' + player.get('name'));
    });


var q = new Parse.Query('Player');
q.limit(1000);
q.descending('jerseyNumber');
q.first()
    .then(function(player){
        console.log('Player with the highest jersey number is ' +
        player.get('jerseyNumber') + ' and his name is ' + player.get('name'));
    });

var q = new Parse.Query('Player');
q.equalTo('position', 'Keeper');
q.equalTo('nationality', 'Wales');
q.find()
    .then(function(players) {
        console.log('There are ' + players.length + ' Welsh keepers');
});

var q = new Parse.Query('Player');
q.descending('marketValue');
q.skip(10);
q.limit(3);
q.find()
    .then(function(players){
        console.log('The 11th, 12th and 13th most expensive players are:');
        for(var i = 0;i < players.length; i++) {
            console.log(players[i].get('name') + ' who cost ' + players[i].get('marketValue'));
        }
    });

var q = new Parse.Query("Player");
q.notContainedIn("teamCode", ["MCFC", "SCFC", "LFC"]);
q.count()
    .then(function(count){
        console.log(count + " players are not playing for MCFC, SCFC or LFC");
    });

var q1 = new Parse.Query('Player');
q1.lessThan('jerseyNumber', 10);

var q2 = new Parse.Query('Player');
q2.greaterThan('jerseyNumber', 50);

var queriedPlayers = [];

var compoudQuery = Parse.Query.or(q1, q2);
compoudQuery.find()
    .then(function(players){
        console.log('Players whose number is less than 10 or more than 50 are:');
        for(var i = 0; i < players.length; i++){
            console.log(players[i].get('name') + ' ('+ players[i].get('jerseyNumber')+ ')');
            queriedPlayers.push(players);
        }
    });

console.log(queriedPlayers);


var teamQ = new Parse.Query('Team');
teamQ.startsWith('name', 'Man');
teamQ.find()
    .then(function(teams){
       console.log(teams.length);
    });

var playerQ = new Parse.Query('Player');
playerQ.equalTo('position', 'Keeper');
playerQ.matchesQuery('team', teamQ);
playerQ.limit(1000);
playerQ.find()
    .then(function(players){
        for(var i = 0; i < players.length; i++){
            console.log(players[i].get('name') + ' (' + players[i].get('teamCode') + '), ' + players[i].get('position'));
        }
    });

