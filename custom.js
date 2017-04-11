$(document).ready(function () {
	$(".image").hide().eq(0).show();

	$("a").on("click", function() {
		var $clicked = $(this);
		var indOld = $("a.active").index("a");
		var indNew = $clicked.index("a");

		var $images = $(".image");
		$images.eq(indOld).slideUp(800, function() {
			$images.eq(indNew).slideDown(800);
		});

		$("a").removeClass("active")
		.eq(indNew).addClass("active");

		return false;
	});
});