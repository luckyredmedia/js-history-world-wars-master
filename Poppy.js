function Poppy(continent, start, end, size)
{
	
	var continent = continent;
	var start = start;
	var end = end;
	var size = size;

	//console.log("++++" + size);

	var xstart = 10;
	var xend = 1500;
	var ystart = 700;
	var yend = 10;
	var smallestDeath = 10000;
	var biggestDeath = 50800000;
	var minScale = 10;
	var maxScale = 400;
	

	var isImageLoaded = false;

	var poppy;
	var curve;
	var lasted;

	var startxVal;
	var endxVal;

	var midx;
	var littlemidx;

	var startyVal;
	var endyVal;

	var midy;
	var littlemidy;

	var poppyPosition;



	function init()
	{
		lasted = end - start;

		size = Math.round(map(size, smallestDeath, biggestDeath, minScale, maxScale));

		startxVal = Math.round(map(start, 1890, 2015, xstart, xend));
		endxVal = Math.round(map(end, 1890, 2015, xstart, xend));

		midx = endxVal - startxVal;
		littlemidx = Math.round(midx /20);

		startyVal = Math.round(map(0, 0, 100, ystart, yend));

		var lastedlog = lasted> 0 ? (lasted == 1 ? Math.log( 1.3 ) : Math.log( lasted )) : 0;
		endyVal = Math.round(map(lastedlog, 0, 4.5, ystart, yend));
		//console.log(lasted + " , " + endyVal + " , " + lastedlog)

		midy = endyVal - startyVal;
		littlemidy = Math.round(midy /2);

		poppyPosition = new Point(endxVal - size/2, endyVal - size/2);

		poppyImage = ImageUrls.getUrlByContinent(continent);

		curve = new Curve(ctx, 
			new Point(startxVal,ystart), 
			new Point(endxVal,endyVal),
			new Point(startxVal+littlemidx,ystart+littlemidy), 
			new Point(endxVal-littlemidx,endyVal-littlemidy), 
			Colours.getContinent(continent));

		poppy = getImage(poppyImage) ;

	}

	function getImage(url)
	{
		var img = new Image();
		img.onload = function(){
			this.width = size;
			this.height = size;
		    drawPoppy(this, poppyPosition, size);
		    isImageLoaded = true;
		  }
		img.src = url;
		return img;
	}

	function drawPoppy(img, position, size)
	{
		ctx.drawImage(img, position.x, position.y, size, size);
	}


	this.update = function()
	{
		curve.update();
		if(isImageLoaded)
		{
			drawPoppy(poppy, poppyPosition, size);
		}
	}



	init();
}