var config = {
    apiKey: "AIzaSyACfX0Swr7rHxyRXBF5bR5ZhFlYalO-hXI",
    authDomain: "https://enactushacks-1b6b8.firebaseapp.com",
    databaseURL: "https://enactushacks-1b6b8.firebaseio.com/",
    projectId: "enactushacks-1b6b8",
    storageBucket: "gs://enactushacks-1b6b8.appspot.com",
    messagingSenderId: "1081768023793"
};

firebase.initializeApp(config);

var database = firebase.database();

var ref = database.ref('patients');

ref.on('value', gotData, errData);

function gotData(data){

  var patients = data.val();
  var keys = Object.keys(patients);

  console.log(patients);
  console.log(keys);
}

function errData(err){
  console.log("Error");
  console.log(err);
}


