var secondarySlider = new Splide( '#secondary-slider' ).mount();
var primarySlider = new Splide( '#primary-slider' );
primarySlider.sync( secondarySlider ).mount();
			
			document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
		height      : 60,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.4,
		pagination : false,
		arrows     : false,
		cover      : true,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );



var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = {
		        center: new kakao.maps.LatLng(35.166218, 129.038937), // 지도의 중심좌표
		        level: 3, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 

		// 지도를 생성한다 
		var map = new kakao.maps.Map(mapContainer, mapOption); 

		// 지도에 마커를 생성하고 표시한다
		var marker = new kakao.maps.Marker({
		    position: new kakao.maps.LatLng(35.166218, 129.038937), // 마커의 좌표
		    map: map // 마커를 표시할 지도 객체
		});

var iwContent = <div style="padding:5px">수왕간판</div>
   

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 