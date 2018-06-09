
$(document).ready(() => {
	$("#imgThumbF1").click(function(){		                                        
		$("#imgFullP").attr("src","../img/freshHome.png");
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbF2").click(function(){		                                        
		$("#imgFullP").attr("src","../img/freshItemDetail.png");
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbF3").click(function(){		                                        
		$("#imgFullP").attr("src","../img/freshRecipe.png");
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbF4").click(function(){		                                        
		$("#imgFullP").attr("src","../img/freshRecipeList.png");
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbF5").click(function(){		                                        
		$("#imgFullP").attr("src","../img/freshScan.png");
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbF6").click(function(){		                                        
		$("#imgFullP").attr("src","../img/freshShoppingListRecipe.png");
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbC1").click(function(){                                        
		$("#imgFullP").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbC2").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbC3").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbC4").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbC5").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbC6").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbM1").click(function(){                                        
		$("#imgFullP").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbM2").click(function(){                                        
		$("#imgFullP").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbM3").click(function(){                                        
		$("#imgFullP").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbM4").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbM5").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbM6").click(function(){                                        
		$("#imgFullW").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgW").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgThumbR1").click(function(){                                        
		$("#imgFullP").attr('src',this.src);
	    $("#overlay").show();
	    $("#overlayImgP").show();
	    $('html, thumbs-list').css({
		    overflow: 'hidden',
		    height: '100%'
		});
	});

	$("#imgFullP").click(function(){
	    $("#imgFullP").attr("src", "");
	    $("#overlay").hide();
	    $("#overlayImgP").hide();
	    $('html, thumbs-list').css({
		    overflow: 'auto',
		    height: 'auto'
		});
	});

	$("#imgFullW").click(function(){
	    $("#imgFullW").attr("src", "");
	    $("#overlay").hide();
	    $("#overlayImgW").hide();
	    $('html, thumbs-list').css({
		    overflow: 'auto',
		    height: 'auto'
		});
	});
})



