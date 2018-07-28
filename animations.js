function animations(){

  function navLoading(){

      function navMenuLoad(){
        var navCounter = 0; // this is the starting child node number for navMenu

        for(i=0; i < navMenu.children.length; i++){

          var child = navMenu.children[i];

          child.style.filter = "opacity(0)";

            child.style.animationName = 'fadeIn';
            child.style.animationDelay = i*.5 + 's';
            child.style.animationDuration = '5s';

        }; // closes FOR statement

        function navMenuChild(){
          navMenu.children[navCounter].style.filter = "opacity(100)";
          navCounter++;
          return navCounter;
        };

        for(i=0; i < navMenu.children.length; i++){
          setTimeout(navMenuChild, 5000);
        };
      };
      navMenuLoad();


      logo.style.marginLeft = "-50%";
      function logoLoad(){
        logo.style.animationName = "logoLoad";
        logo.style.animationDuration = "3s";
        logo.style.animationDelay = '3s';

        setTimeout(function(){
          logo.style.marginLeft = "6.25%";
        },6000);

      };
      logoLoad();

  } // closes navLoading
  navLoading();




  function main1Loading(){
    var main1LeftCol = document.getElementById("main1-left-col");
    var m1C= 0; // this is the starting child node number for main1LeftCol


      for(i=0; i < main1LeftCol.children.length; i++){

        var child = main1LeftCol.children[i];

        child.style.filter = "opacity(0)";

          child.style.animationName = 'fadeIn';
          child.style.animationDelay = i*.5 + 's';
          child.style.animationDuration = '5s';

      }; // closes FOR statement


      function main1LeftColChild(){

        main1LeftCol.children[m1C].style.filter = "opacity(100)";
        m1C++;
        return m1C;
      };


      for(i=0; i < main1LeftCol.children.length; i++){

        setTimeout(main1LeftColChild, i*500);
      };

      //book.style.filter = "opacity(0)";
      setTimeout(function(){
        book.style.animationName = 'fadeIn';
        book.style.animationDuration = '5s';
        setTimeout(function(){
          book.style.filter = "opacity(100)";
        }, 5000);
      }, 3000);


  } // closes main1Loading


  main1Loading();
  // end of main1Loading();

  function main1Standing(){

  };
  main1Standing();
  // end of main1Standing() | these are the animations post load, example "click";










}// CLOSES GLOBAL ANIMATION FUNCTION.

animations();

// THIS IS THE LAST LINE OF THE DOCUMENT!!
