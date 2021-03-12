var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(35.23075, 129.15289),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);