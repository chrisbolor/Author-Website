// JavaScript Document

// JavaScript Document


// THE FOLLOWING DISPLAYS COLUMN AND GUTTER WIDTH PERCENTAGES //

function compute(){

	// the following variables are called again to compute the window and bg widths again before adjusting the CSS
	// must be here to obtain most recent change to properly scale and adjust
	var myBgWidth = window.getComputedStyle(innerWrapper, null).getPropertyValue("width").replace('px', '');
	var myBgHeight = window.getComputedStyle(innerWrapper, null).getPropertyValue("height").replace('px', '');

	var innerWrapperWidth = window.innerWidth;
	var innerWrapperHeight = window.innerHeight;

	innerWrapper.style.height = innerWrapperHeight + 'px';
	innerWrapper.style.width = innerWrapperWidth + 'px';

	myWindow.style.height = innerWrapperHeight + 'px';
	myWindow.style.width = innerWrapperWidth + 'px';

	bgWrapper.style.height = innerWrapperHeight + 'px';
	bgWrapper.style.width = innerWrapperWidth + 'px';

	//console.log(window.getComputedStyle(bgWrapper).getPropertyValue("height"));
	//console.log(window.getComputedStyle(bgWrapper).getPropertyValue("width"));

	nav.style.height = navMenuItem.getPropertyValue("height").replace('px', '') + 'px';
	navMenu.style.height = navMenuItem.getPropertyValue("height").replace('px', '') + 'px';


	// THIS WILL COMPUTE MULTIPLE FIXED QUANTITY COLUMNS + VARIABLE QUANTITY GUTTERS AND GENERATE THE CSS CODE //
	for(s=0; s<13; s++){
		for(i=0; i<13; i++){

			// THIS FOLLOWING SUB-FUNCTION DETERMINES WHICH GRID CLASSES ARE PRESENT IN THE DOCUMENT, AND HOW MANY ITEMS WITH THAT CLASS DESIGNATION THERE ARE
			for(x=0; x<13; x++){
				classes[x] = document.getElementsByClassName(s + "cols-" + i + "guts");

				if(classes[x].length > 0){

					for(d=0; d<13; d++){
						// THIS SETS THE WIDTH OF THE CURRENTLY SELECTED CLASS; OVER AND OVER; DYNAMICALLY
						if(classes[x].item(d)){
							classes[x].item(d).style.width = (((s*6.25)+(i*2.27))/100)*(innerWrapperWidth) + "px";
							//console.log(classes[x].item(d));
						}
					}
				}
			}
		}
	}


	for(v=0; v < mainContainer.length; v++){
		if(mainContainer[v]){

			mainContainer[v].style.width = innerWrapperWidth + 'px';
			mainContainer[v].style.height = (innerWrapperHeight-window.getComputedStyle(nav, null).getPropertyValue("height").replace('px', ''))  + 'px';
		}

			bgWrapper.style.height = innerWrapperHeight + 'px';
			bgWrapper.style.width = innerWrapperWidth + 'px';
	}

	//THE FOLLOWING STATEMENT CHECKS IF THE SCREEN IS ORIENTED LANDSCAPE AND WILL ARRANGE THE HTML OBJECTS ACCORDINGLY
	if((innerWrapperWidth/innerWrapperHeight) > "1.125"){

		if(window.devicePixelRatio >= 2) {
  			/* retina display */
  			//console.log("RETINA");
  			innerWrapper.style.fontSize = '18pt';
		}

		bgWrapper.style.height = innerWrapperHeight + 'px';
		bgWrapper.style.width = innerWrapperWidth + 'px';

		for(p=0; p < mainLeftCols.length; p++){


		}








	}





// THE FOLLOWING SCRIPT CENTERS THE SECTIONS LEFT AND RIGHT COLUMNS WITHIN THE SECTION, NOT THE ENTIRE WINDOW. KEEPS THINGS LOOKING GOOD


/*
	for(y=0; y < mainContainer.length; y++){


		if(mainLeftCols[y]){
			//console.log(mainLeftCols[y].style.width);
			//console.log(window.getComputedStyle(mainLeftCols[y], null).getPropertyValue("height"));

			selectedLeftCol = window.getComputedStyle(mainLeftCols[y], null).getPropertyValue("height").replace('px', '');
			mainLeftCols[y].style.marginTop = 	((mainContainer[0].style.height.replace('px', '')*(.5)) - (selectedLeftCol)*(.5)) + 'px';
			//console.log(mainLeftCols[y].style.marginTop);
		}

		if(mainRightCols[y]){
			//console.log(mainRightCols[y].style.width);
			//console.log(window.getComputedStyle(mainRightCols[y], null).getPropertyValue("height"));

			selectedRightCol = window.getComputedStyle(mainRightCols[y], null).getPropertyValue("height").replace('px', '');
			mainRightCols[y].style.marginTop = 	((mainContainer[0].style.height.replace('px', '')*(.5)) - (selectedRightCol)*(.5)) + 'px';
			//onsole.log(mainRightCols[y].style.marginTop);
		}
	}
*/







	// THE FOLLOWING STATEMENT CHECKS IF IT IS TIME TO RE-ORIENT/RE-ORDER THE HTML ELEMENTS TO FIT THE RESIZED SCREEN FOR PORTRAIT/MOBILE
	if((innerWrapperWidth/innerWrapperHeight) < "1.125"){

		if(window.devicePixelRatio >= 2) {
  			innerWrapper.style.fontSize = '18pt';
		}

		bgWrapper.style.height = innerWrapperHeight + 'px';
		bgWrapper.style.width = innerWrapperWidth + 'px';

		var reorientedContainer = window.getComputedStyle(mainContainer[0], null).getPropertyValue("height");

		for(p=0; p < mainLeftCols.length; p++){
			if(mainLeftCols[p]){
				selectedLeftCol = window.getComputedStyle(mainLeftCols[p], null).getPropertyValue("height").replace('px', '');
				mainLeftCols[p].style.marginTop = (reorientedContainer.replace('px', '')*(.5)) - ((selectedLeftCol)*(.5)) + 'px';
			}
			if(mainRightCols[p]){
			selectedRightCol = window.getComputedStyle(mainRightCols[p], null).getPropertyValue("height").replace('px', '');
			mainRightCols[p].style.marginTop = 	((mainContainer[0].style.height.replace('px', '')*(.5)) - (selectedRightCol)*(.5)) + 'px';

			}
		}
	}

mainContainer[0].style.marginTop = window.getComputedStyle(document.getElementById("logo")).getPropertyValue("height");




}
compute();


/*
setInterval(function(){
	mainContainer[0].scrollTop = 550;
}, 1250);

*/



// END COMPUTING FOR COLUMN + GUTTER WIDTH PERCENTAGES, PIXELS & CSS CODE GENERATION //
