$(document).ready(function() {

	function observeStars() {
		$('.tube').velocity({
			rotateZ: '30deg',
			rotateX: '-20deg',
			translateY: '210%'
		},{
			duration:0
		}).velocity({
			translateY: ['150%', '210%']
		},{
			duration:1000
		}).velocity({
			rotateZ: ['-40deg','30deg'],
			rotateX: ['20deg','-20deg']
		},{
			duration:3000
		});
	}

	setTimeout(function(){
		observeStars();
	},5500);

	setTimeout(function(){
		starGenerate();
	},6000);

    $(".night-day").delay(1500).fadeOut(5500);
    $(".intro-cloud").delay(6000).fadeIn(5500);

	// var skyGradientTwilight = ['#ffeecc','#e29ae5','#869cee','#509aee','#4988e5'];
	//
	// var skyGradientEvening = ['#05257d','#03287d','#02389d','#0247c6','#015cc9'];
	//
	// var skyGradientNight = ['#05154d','#030005','#020005','#010005','#010005'];

	var skyGradientNight = ['#fff','#f8eec6','#aae8f7','#509aee','#4988e5'];

	var skyGradientEvening = ['#05257d','#03287d','#02389d','#0247c6','#015cc9'];

	var skyGradientTwilight = ['#05154d','#030005','#020005','#010005','#010005'];

	$('#SVGID_1_ stop').each(function(index){
		$(this).velocity({
			stopColor: skyGradientTwilight[index]
		},{
			easing:'easeOutQuart',
			duration:3000
		});
	}).each(function(index){
		$(this).velocity({
			stopColor: skyGradientEvening[index]
		},{
			easing:'linear',
			duration:3500
		});
	}).each(function(index){
		$(this).velocity({
			stopColor: skyGradientNight[index]
		},{
			easing:'linear',
			duration:2000
		});
	});

	$('#Hills_in_Distance_1 path').velocity({
		fill: '#F3E1CF'
	},{
		easing:'linear',
		delay:900,
		duration:5500
	});

	$('#Hills_in_Distance_2 path').velocity({
		fill: '#A7B0B7'
	},{
		easing:'linear',
		delay:900,
		duration:5500
	});

    $('#backleft1 path').velocity({
        fill: '#626458'
    },{
        easing:'linear',
        delay:1400,
        duration:4500
    });

    $('#backleft2 path').velocity({
		fill: '#87897D'
	},{
		easing:'linear',
		delay:1400,
		duration:4500
	});
    $('#backright2 path').velocity({
		fill: '#6E838E'
	},{
		easing:'linear',
		delay:1900,
		duration:3550
	}).velocity({
		fill: '#868C6D'
	},{
		easing:'easeIn',
		delay:5500,
		duration:2500
	}).velocity({
		fill: '#B2B08A'
	},{
		easing:'easeIn',
		delay:7500,
		duration:2500
	});

    $('#backright1 path').velocity({
		fill: '#4C5F6A'
	},{
		easing:'linear',
		delay:1900,
		duration:3550
	}).velocity({
		fill: '#6E7256'
	},{
		easing:'easeIn',
		delay:5500,
		duration:2500
	}).velocity({
		fill: '#7A7C60'
	},{
		easing:'easeIn',
		delay:7500,
		duration:2500
	});
    $('#backmiddle path').velocity({
		fill: '#384042'
	},{
		easing:'linear',
		delay:1900,
		duration:3550
	});
    $('#frontleft path').velocity({
        fill: '#57562E'
    },{
        easing:'linear',
        delay:1900,
        duration:3550
    });
    $('#front path').velocity({
        fill: '#272D0E'
    },{
        easing:'linear',
        delay:1900,
        duration:3550
    });


	$('#Distant_Left_Ridge path').velocity({
		fill: '#19130D'
	},{
		easing:'linear',
		delay:1000,
		duration:550
	}).velocity({
		fill: '#4C3325'
	},{
		easing:'easeIn',
		delay:1500,
		duration:2500
	}).velocity({
		fill: '#593F2A'
	},{
		easing:'linear',
		duration:1000
	});

	// var sunGradient = ['#FFEE80','#FFC261','#FF5121','#05257d','#005cc9'];

	var sunGradient = ['#FCFFC7','#05257d','#FF5121','#FFC261','#FFEE80'];

	$('#SVGID_2_ stop').velocity({
		stopColor: sunGradient[2]
	},{
		easing:'linear',
		duration:2250,
		delay:700
	}).velocity({
		stopColor: sunGradient[3]
	},{
		easing:'linear',
		duration:4000
	}).velocity({
		stopColor: sunGradient[3]
	},{
		easing:'linear',
		duration:3250
	}).velocity({
		stopColor: sunGradient[0]
	},{
		easing:'linear',
		duration:1250
	});

	//river gradient animations
	$('#SVGID_3_ stop').velocity({
		stopColor: '#04182b'
	},{
		easing:'linear',
		duration:2250,
		delay:700
	}).velocity({
		stopColor: '#1e2a35'
	},{
		easing:'linear',
		duration:300,
	}).velocity({
		stopColor: '#1e2a35'
	},{
		easing:'linear',
		duration:800,
		delay:700
	}).velocity({
		stopColor: '#233c49'
	},{
		easing:'linear',
		duration:1250,
		delay:700
	});

	$('#Sun circle, #SVGID_2_').velocity({
		cy: '-=400',
		cx: '+=400'
	},{
		easing:'easeOut',
		duration:14000
	});

});
