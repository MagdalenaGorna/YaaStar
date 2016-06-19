

	function draw()
		{
			var canvas = document.getElementById('rect');
			var context = canvas.getContext('2d'); 
			context.beginPath();
			context.moveTo(0,0);
			context.lineTo(285,7);
			context.lineTo(278,312);
			context.lineTo(15,322);
			context.lineTo(0,0);
			context.fillStyle = 'rgb(228, 236, 255)';
			context.fill();

		}