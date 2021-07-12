// variable_name = value

var studentName = "AJIT"; // String
var rollNo = 10; // Number
var sport = true; // Boolean - true/false
var student = { // Object
    studentName: "XYZ",
    rollNumber: 10,
    sport: false,
    subject: {
        english: 20,
        hindi: 30
    },
    getName: function () {
        return this.studentName + " == " + this.rollNumber;
    }
}

var arr = [ // Array
    10,
    true,
    "AJIT",
    { addressLine1: "Pune"},
    50,
]

// var myName; // undefined --- Undefined
var string1 = ""; // String
var number1 = 0; // Number
var bool = true;
var obj1 = null;
function function1() { // Function
    // document.getElementsByTagName("h1")[0].innerHTML = student.getName();
    // document.getElementsByTagName("h1")[0].innerHTML = arr[2];
    document.getElementsByTagName("h1")[0].innerHTML = myName;
}
function1()
