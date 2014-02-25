$('html').localScroll();
$('body').scrollspy({ target: '.navbar-default' })
$('span.grade').tooltip()
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});
var opts = {
  lines: 12,
  angle: 0.5,
  lineWidth: 0.08,
  pointer: {
    length: 0.71,
    strokeWidth: 0.024,
    color: '#000000'
  },
  limitMax: 'false',
  colorStart: '#DFEB44',
  colorStop: '#D0E040',
  strokeColor: '#E0E0E0',
  generateGradient: true
};
var target = document.getElementById('website-circle');
var gauge = new Donut(target).setOptions(opts);
gauge.maxValue = 100;
gauge.animationSpeed = 64;
gauge.set(90);

opts = {
	lines: 12,
	angle: 0.5,
	lineWidth: 0.08,
	pointer: {
		length: 0.71,
		strokeWidth: 0.024,
		color: '#000000'
	},
	limitMax: 'false',
	colorStart: '#2AC96A',
	colorStop: '#20C06A',
	strokeColor: '#E0E0E0',
	generateGradient: true
};
target = document.getElementById('photoshop-circle');
gauge = new Donut(target).setOptions(opts);
gauge.maxValue = 100;
gauge.animationSpeed = 64;
gauge.set(80);

opts = {
	lines: 12,
	angle: 0.5,
	lineWidth: 0.08,
	pointer: {
		length: 0.71,
		strokeWidth: 0.024,
		color: '#000000'
	},
	limitMax: 'false',
	colorStart: '#10A04E',
	colorStop: '#8FC0DA',
	strokeColor: '#E0E0E0',
	generateGradient: true
};
target = document.getElementById('other-circle');
gauge = new Donut(target).setOptions(opts);
gauge.maxValue = 100;
gauge.animationSpeed = 64;
gauge.set(85);
