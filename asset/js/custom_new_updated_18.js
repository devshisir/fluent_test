function getBrowserName() {
	return navigator.userAgent.indexOf("Edge") > -1 && navigator.appVersion.indexOf("Edge") > -1 ? "Edge" : -1 != navigator.userAgent.indexOf("Opera") || -1 != navigator.userAgent.indexOf("OPR") ? "Opera" : -1 != navigator.userAgent.indexOf("Chrome") ? "Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "IE" : "unknown"
}
var wasSubmitted = !1;
$(document).ready(function () {
	{
		var a = $(window);
		$("html, body")
	}
	$(".formula_areaContent_slider").owlCarousel({
		items: 1,
		margin: 30,
		smartSpeed: 450,
		autoplay: !0,
		autoplayTimeout: 3e3,
		loop: !1,
		nav: !0,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	}), $("select").niceSelect({}), $("#inputNext").on("click", function () {
		$(".form_3_input1").addClass("hide"), $(".form_3_input2").addClass("show"), $("#phone").focus(), $("#phone").click(), $("#progressBar2").animate({
			width: "33.33%"
		}, 300)
	}), $("#inputNext2").on("click", function () {
		$(".form_3_input2").removeClass("show"), $(".form_3_input3").removeClass("show"), $(".form_3_input4").addClass("show"), $("#progressBar4").animate({
			width: "66.66%"
		}, 300)
	}), a.on("scroll", function () {
		a.scrollTop() > 200 ? $("#form_area").addClass("animated slideInDown fix") : $("#form_area").removeClass("animated slideInDown fix")
	}), $("#inputNext4").on("click", function () {
		if ("0" == $("#drop_val").val()) return void mdtoast("Please select an option", {
			type: "info"
		});
		if ($("#send_spinner").show(), console.log("before: " + wasSubmitted), $(this).val("Please wait ...").attr("disabled", "disabled"), !wasSubmitted) {
			wasSubmitted = !0, console.log("after: " + wasSubmitted);
			var a = $("#name").val(),
				b = "-",
				c = "+91" + $("#phone").val(),
				d = $("#source").val(),
				e = "Current Browser : " + getBrowserName(),
				f = $("#drop_val").val(),
				g = new Date,
				i = (g.getTime(), new Date),
				j = String(i.getDate()).padStart(2, "0"),
				k = String(i.getMonth() + 1).padStart(2, "0"),
				l = i.getFullYear();
			i = j + "_" + k + "_" + l;
			var m = "";
			a && c && b && f && d && $.ajax({
				method: "POST",
				url: "https://api.ufaber.com/api/leads-submit/fetch-lead/",
				data: {
					name: a,
					email: b,
					phone: c,
					do_what: f,
					source: d,
					otp_value: m,
					device_info: e + "  ***  " + navigator.userAgent
				}
			}).done(function (a) {
				mdtoast("Your form has been submitted successfully!", {
					type: "success"
				}), "success" == a.message ? window.location.replace("https://thefluentlife.com/online/aimwithpersonalmentor/thanks/") : "all_fields" == a.message ? alert("Fields are missing, not all fields are selected") : "otp_match" == a.message ? alert("OTP value doesn't match, please make sure that you are entering the correct OTP") : "no_otp" == a.message && alert("Please enter the OTP, without that your enquiry cannot be processed")
			}).fail(function () {
				alert("error")
			})
		}
	})
});