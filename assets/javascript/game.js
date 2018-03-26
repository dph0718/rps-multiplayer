//whoever gets there first is first player. else, second player.


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaBVqSpRzZqvxA9liGx0vGdya6UIs8kjE",
    authDomain: "rockpaperscissors-5c541.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-5c541.firebaseio.com",
    projectId: "rockpaperscissors-5c541",
    storageBucket: "",
    messagingSenderId: "849374043440"
};
firebase.initializeApp(config);

var db = firebase.database();
var dbRef = db.ref();
var dbPresent = dbRef.child('playerPresent');

var thisPlayer;
var otherPlayer;
var playerPresent;

console.log(playerPresent);


dbRef.on('value', function (snapshot) {
    console.log("snapshot:", snapshot.val().playerPresent);
    var present = snapshot.val().playerPresent;
    if(!present){
        dbRef.set({
            playerPresent: false,
  
        })
    }
    if (present === false) {
        snapshot.set({
            playerPresent: true,
        })
        thisPlayer = 'player1';
        otherPlayer = 'player2';
    } else {
        thisPlayer = 'player2';
        otherPlayer = 'player1';
    }
    console.log('twit', snapshot.val().playerPresent);
    console.log(thisPlayer);

})

console.log('whizbang', db.ref().child("playerPresent").value);
console.log('player', thisPlayer);
var playerNum = db.ref('Player1').child('player');
playerNum.set({
    player: 1
})
console.log(playerNum);

//weapon object constructor
var Weapon = function (name, imageUrl) {
    this.name = name;
    this.image = imageUrl
    this.button = $('<img>').attr('src', imageUrl)
        .attr('class', 'weaponButton')
        .attr('id', this.name + 'Button')
        .data('weapon', this.name);
}

//weapon objects
var rock = new Weapon('rock', './assets/images/rock.png');
var paper = new Weapon('paper', './assets/images/paper.png');
var scissors = new Weapon('scissors', './assets/images/scissors.png');

//click on the weapon button, you are armed and your chosenWeapon is the thing you clicked on.
$(document).on('click', '.weaponButton', function () {
    if (armed === false) {
        chosenWeapon = $(this).data('weapon');
        armed = true;
        db.ref().set({
            'weapon': chosenWeapon
        })

        console.log('weapon', chosenWeapon);

    } else if (armed === true) {
        return;
    }
})

$('#rock').append(rock.button);
$('#paper').append(paper.button);
$('#scissors').append(scissors.button);


//push player's choice to firebase

var armed = false;
var chosenWeapon;
console.log('armed', armed, 'chosenweapon', chosenWeapon);



//logic for wins

//make the chat thing work.

