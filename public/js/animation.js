// The image list of the hime page
var url = baseURL + "/public/img/";
var imgList = [url + "home.jpg",
url + "ideapad300.jpg",
url + "e420.jpg",
url + "flex2.jpg",
url + "z70.jpg",
url + "ideapad100.jpg",
url + "new2016.jpg",
url + "prehigh.jpg",
url + "y700.jpg",
url + "u31.jpg",
url + "yoga2.jpg",
url + "yoga.jpg"];

var current_row = 3;
var search_box_string;

// Changing image function for detail page
function change(opa, pic) {
	var main = document.getElementById("large-picture");
	main.src = pic;
	$("#detail1").css("opacity", 0.3);
	$("#detail2").css("opacity", 0.3);
	$("#detail3").css("opacity", 0.3);
	$("#detail4").css("opacity", 0.3);
	$("#detail5").css("opacity", 0.3);
	$("#detail6").css("opacity", 0.3);
	document.getElementById(opa).style.opacity = 1;
}

$(document).ready(function(){
	$('.default').each(function(){
		$(this).css("opacity", 1);
	});

	$('#orange').click(function(){
		$('#orange').css("opacity", 1);
		$('#silver').css("opacity", 0.3);
	});

	$('#silver').click(function(){
		$('#silver').css("opacity", 1);
		$('#orange').css("opacity", 0.3);
	});

	$('#256G').click(function(){
		$('#256G').css("opacity", 1);
		$('#512G').css("opacity", 0.3);
	});

	$('#512G').click(function(){
		$('#512G').css("opacity", 1);
		$('#256G').css("opacity", 0.3);
	});

	$('#G8').click(function(){
		$('#G8').css("opacity", 1);
		$('#G16').css("opacity", 0.3);
	});

	$('#G16').click(function(){
		$('#G16').css("opacity", 1);
		$('#G8').css("opacity", 0.3);
	});

	/* Side bar filters */

	// by default, check all the boxes
	$('input[name="size"]').each(function(){
		$(this).prop("checked", true); // check the box
	});

	$('input[name="price"]').each(function(){
		$(this).prop("checked", true); // check the box
	});

	$('input[name="hd"]').each(function(){
		$(this).prop("checked", true); // check the box
	});

	$('input[name="speed"]').each(function(){
		$(this).prop("checked", true); // check the box
	});

	$('input[name="weight"]').each(function(){
		$(this).prop("checked", true); // check the box
	});

	$('input[name="item"]').each(function(){
		$(this).prop("checked", true); // check the box
	});

	$('input[name="brand"]').click(function(){
		$('div.product').hide();

		$('input[name="brand"]:checked').each(function(){
			var checkedVal = $(this).val();

			switch(checkedVal) {
				case 'Lenovo':
				$('div.product.lenovo').show();
				break;
				case 'Dell':
				$('div.product.dell').show();
				break;
			}
		});
	});

	$('input[name="item"]').click(function(){
		$('div.product').hide();

		$('input[name="item"]:checked').each(function(){
			var checkedVal = $(this).val();

			switch(checkedVal) {
				case 'I1':
				$('div.product.sbl').show();
				break;
				case 'I2':
				$('div.product.sbd').show();
				break;
			}
		});
	});

	// event handler for checkboxes with name "size"
	$('input[name="size"]').click(function(){
		// by default, hide everything
		$('div.product').hide();

		// iterate through only the checked checkboxes
		$('input[name="size"]:checked').each(function(){
			var checkedVal = $(this).val(); // value of checked box

			// show products matching that value
			switch(checkedVal) {
				case 'l11inches':
				$('div.product.11inches').show(); // show the Small items
				break;
				case '11inches':
				$('div.product.12inches').show();
				break;
				case '13inches':
				$('div.product.14inches').show();
				break;
				case '16inches':
				$('div.product.16inches').show();
				break;
			}
		});
	});

	$('input[name="price"]').click(function(){
		// by default, hide everything
		$('div.product').hide();

		// iterate through only the checked checkboxes
		$('input[name="price"]:checked').each(function(){
			var checkedVal = $(this).val(); // value of checked box

			// show products matching that value
			switch(checkedVal) {
				case 'p0':
				$('div.product.Under$500').show(); // show the Small items
				break;
				case 'p500':
				$('div.product.$500to$800').show();
				break;
				case 'p800':
				$('div.product.$800to$1000').show();
				break;
				case 'p1000':
				$('div.product.Above$1000').show();
				break;
			}
		});
	});

	$('input[name="hd"]').click(function(){
		// by default, hide everything
		$('div.product').hide();

		// iterate through only the checked checkboxes
		$('input[name="hd"]:checked').each(function(){
			var checkedVal = $(this).val(); // value of checked box

			// show products matching that value
			switch(checkedVal) {
				case 'mhd':
				$('div.product.Mechanical').show(); // show the Small items
				break;
				case 'ssd':
				$('div.product.SSD').show();
				break;
				case 'h-d':
				$('div.product.Hybrid').show();
				break;
			}
		});
	});

	$('input[name="speed"]').click(function(){
		// by default, hide everything
		$('div.product').hide();

		// iterate through only the checked checkboxes
		$('input[name="speed"]:checked').each(function(){
			var checkedVal = $(this).val(); // value of checked box

			// show products matching that value
			switch(checkedVal) {
				case '1.5ghz':
				$('div.product.Speed1').show(); // show the Small items
				break;
				case '1.6ghz':
				$('div.product.Speed2').show();
				break;
				case '2ghz':
				$('div.product.Speed3').show();
				break;
				case '3ghz':
				$('div.product.Speed4').show();
				break;
			}
		});
	});

	$('input[name="weight"]').click(function(){
		// by default, hide everything
		$('div.product').hide();

		// iterate through only the checked checkboxes
		$('input[name="weight"]:checked').each(function(){
			var checkedVal = $(this).val(); // value of checked box

			// show products matching that value
			switch(checkedVal) {
				case '2p':
				$('div.product.2Pounds').show(); // show the Small items
				break;
				case '3p':
				$('div.product.3Pounds').show();
				break;
				case '4p':
				$('div.product.4Pounds').show();
				break;
				case '5p':
				$('div.product.5Pounds').show();
				break;
				case '6p':
				$('div.product.6Pounds').show();
				break;
				case '7p':
				$('div.product.7Pounds').show();
				break;
			}
		});
	});

	$("#box").focus(function() {
		search_box_string = $(this).val();
		$(this)
		.val("");
	});

	$("#box").blur(function() {
		if ($(this).val() == "") {
			$(this)
			.val(search_box_string);
		}
	});

	$(".unimplemented").click(function() {
		window.alert("This page is not implemented in this prototype.");
	});

	$("#update").click(function() {
		window.scrollTo(0, 0);
		window.alert("The page will be updated.");

	});

	/* Recommendation button */
	$("#reco").click(function() {
		$("#main-picture").attr("src", url + "home.jpg");
		if ($("#recon-result").length == 0) {
			$("#main-page")
			.append("<h3 id='recon-result'> This Lenovo Yoga 900 is our recommendation!</h3>");
		}
	});

	/* Add a new item button */
	$(".new").click(function() {
		if (current_row == 3 ) {
			$("#l3r1").removeClass("new");
			$("#l3r1").html("<a href='#'>Apple MacBook Pro</a>");
			$("#l3r2").text("160908851");
			$("#l3r3").text("Active");
			$("#l3r4").html("<a href='#'>Actions</a>");
			$("#l3r5").text("Not available now");
			current_row++;
		}
	});
});

/* Pre and Next functions for the home page pictures */

/* Settings of the opacity of the main image */
function setOpa(object, opacity) {
	object.style.MozOpacity = opacity / 100;
	object.style.opacity = opacity / 100;
}

/* Changing the opacity of the main image */
function changeOpa(id, d, s, from, to) {
	var element = document.getElementById(id);
	var opacity = element.style.opacity * 100;
	var time = (new Date()).getTime();
	opacity = from + (to - from) * (time - s) / d;
	if (opacity < 0)
	setOpa(element, 0);
	else if (opacity > 100)
	setOpa(element, 100);
	else {
		setOpa(element,opacity);
		element.timer = window.setTimeout("changeOpa('" + id + "'," + d + "," + s + "," + from + "," + to + ")",1);
	}
}

/* The fade effect of the image */
function fadeInImage(front, newImage, back) {
	var p1 = document.getElementById(front);
	if (back)
	{
		var p2 = document.getElementById(back);
		if (p2)
		{
			p2.style.backgroundImage = 'url(' + p1.src + ')';
			p2.style.backgroundRepeat = 'no-repeat';
		}
	}
	setOpa(p1,0);
	p1.src = newImage;
	if (p1.timer) window.clearTimeout(p1.timer);
	var start = (new Date()).getTime();
	p1.timer = window.setTimeout("changeOpa('" + front + "',1000," + start + ",0,100)",10);
}

/* Switch to previous image */
function pre() {
	var curr = $('#main-picture').attr('src');
	var pos = imgList.indexOf(curr);
	var next;
	if (pos == 0) {
		next = imgList[11];
	}
	else {
		pos = pos - 1;
		next = imgList[pos];
	}
	fadeInImage('main-picture', next,'box2');
	if ($("#recon-result").length != 0) {
		$("#recon-result")
		.remove();
	}
}

/* Switch to next image */
function next() {
	var curr = $('#main-picture').attr('src');
	var pos = imgList.indexOf(curr);
	var next;
	if (pos == 11) {
		next = imgList[0];
	}
	else {
		pos = pos + 1;
		next = imgList[pos];
	}
	fadeInImage('main-picture', next,'box2');
	if ($("#recon-result").length != 0) {
		$("#recon-result")
		.remove();
	}
}
