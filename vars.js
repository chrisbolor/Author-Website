// JavaScript Document

// THE FOLLOWING VARIABLES COLLECT SCREEN & VIEWPORT INFORMATION
// ALSO SETS VARIABLES AND ARRAYS THAT WILL BE USED TO GENERATE AND CREATE CSS WIDTH UPDATES


var myWindow = document.getElementById("wrapper");
var innerWrapper = document.getElementById("inner-wrapper");
var invisible = document.getElementById("invisible");
var bgWrapper = document.getElementById("bgWrapper");

var myWindowWidth = window.innerWidth;
var myWindowHeight = window.innerHeight;

var myBgWidth = window.getComputedStyle(myWindow, null).getPropertyValue("width").replace('px', '');
var myBgHeight = window.getComputedStyle(myWindow, null).getPropertyValue("height").replace('px', '');

var mainContainer = new Array();
mainContainer[0] = document.getElementById("main1");
mainContainer[1] = document.getElementById("main2");
mainContainer[2] = document.getElementById("main3");
mainContainer[3] = document.getElementById("main4");

/*var leftCols = new Array();
leftCols[0] = document.getElementById("main1-left-col");
leftCols[1] = document.getElementById("main2-left-col");
leftCols[2] = document.getElementById("main3-left-col");
leftCols[3] = document.getElementById("main4-left-col");

var rightCols = new Array();
rightCols[0] = document.getElementById("main1-right-col");
rightCols[1] = document.getElementById("main2-right-col");
rightCols[2] = document.getElementById("main3-right-col");
rightCols[3] = document.getElementById("main4-right-col");*/

var mainLeftCols = new Array();
var mainRightCols = new Array();

for(k=0; k < mainContainer.length; k++){
	mainLeftCols[k] = document.getElementById('main' + k + '-' + 'left' + '-' + 'col');
	mainRightCols[k] = document.getElementById('main' + k + '-' + 'right' + '-' + 'col');
}

var timer1;
var timer2;
var timer3;

var logo = document.getElementById("logo");
var nav = document.getElementById("nav");
var navMenu = document.getElementById("nav-menu");
var navMenuItems = navMenu.getElementsByTagName("li");
var navMenuItem = window.getComputedStyle(navMenuItems[0], null);

var book = document.getElementById("book-cover");

var perentages = new Array();
var pixels = new Array();
var css = new Array();
var classes = new Array();
