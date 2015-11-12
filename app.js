$( document ).ready(function() {

	var photobox = {
		// infinite: true,
		dots: true,
	  slidesToShow: 1,
  };

  $('#photobox').slick(photobox);

  identifier = function(str){
    switch(str) {
      case "navbar-about-icon":
        source = "face";
        break;
      case "navbar-product-icon":
        source = "chip";
        break;
      case "navbar-operations-icon":
        source = "bus";
        break;
      case "navbar-community-icon":
        source = "community";
        break;
      case "navbar-education-icon":
        source = "synapse";
        break;
      }
  }

  changeImg = function(item){
    var img = $(item).find('img')[0]
    identifier(img.id)
    img.src = "assets/png/"+source+"_hover.png"
  }

  reverseChangeImg = function(item){
    var img = $(item).find('img')[0]
    identifier(img.id)
    img.src = "assets/png/"+source+".png"
  }

});
