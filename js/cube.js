








$(window).load(function(){
	
	
	var angle = 0;
	var number = 1;
	var scale = 0;
	var div = $('.cube');
	var myInterval = setInterval(rotate , 50);
	var reangle = 20;

	function rotate(){
		angle=angle+number;				
		if(angle <=360){
			 $('.cube').css('transform', 'rotate(' + reangle + 'deg)' + 'rotateX(' + angle + 'deg)' + 'rotateY(' + angle + 'deg)', 'scale('+ scale + ')');
		}else{
			angle=0;
		}		
	}
	var bodyOffset = $('body').offset();
	$(window).scroll(function() {
		if ($(document).scrollTop() > bodyOffset.top) {
			$('.mv').addClass('active'); // 애니메이션이 시작되는 거 알려주는 클래스 add
			setTimeout(function(){ // 일정 시간뒤에 큐브가 돌아감
				clearInterval(myInterval); // 기존 시간을 제거
				number = 10; // 앵글 각도 간격을 크게 줘서 빠르게 돌아가는 것 처럼 보이게 함
				reangle = 300; // 앵글 리셋
				angle = 0;
				myInterval = setInterval(rotate , 1); // 인터벌 시간 재설정
			}, 550);

			setTimeout(function(){ // 빠르게 돌다가 멈추는 타이머
				clearInterval(myInterval); // 기존 인터벌 삭제
				reangle = 300; // 앵글 리셋
			}, 800);
			
	
		} else {
			$('.mv').removeClass('active');
		}
	});
})
