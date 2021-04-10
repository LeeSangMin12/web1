var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	    mapOption = {
	        center: new kakao.maps.LatLng(35.23075, 129.15289), // 지도의 중심좌표
	        level: 1, // 지도의 확대 레벨
	        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
	    };
	// 지도를 생성한다
	var map = new kakao.maps.Map(mapContainer, mapOption);
	// 지형도 타일 이미지 추가
	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
	// 지도 타입 변경 컨트롤을 생성한다
	var mapTypeControl = new kakao.maps.MapTypeControl();
	// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
	// 지도에 확대 축소 컨트롤을 생성한다
	var zoomControl = new kakao.maps.ZoomControl();
	// 지도의 우측에 확대 축소 컨트롤을 추가한다
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
	// 지도에 마커를 생성하고 표시한다
	var marker = new kakao.maps.Marker({
	    position: new kakao.maps.LatLng(35.23075, 129.15289), // 마커의 좌표
	    map: map // 마커를 표시할 지도 객체
	});
	// 마커 위에 표시할 인포윈도우를 생성한다
	var infowindow = new kakao.maps.InfoWindow({
        content : '<div style="padding:0.1rem; padding-left:1.8rem; font-size: 1.4rem; ">동경기획</div>' // 인포윈도우에 표시할 내용
	});
	// 인포윈도우를 지도에 표시한다
	infowindow.open(map, marker);
