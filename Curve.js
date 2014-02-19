function Curve(c, s, e, a1, a2, col)
{
  var speed = .3;

  var colour = col;

  var context = c;
  var start = s;
  var end = e;
  var anchor1 = a1;
  var anchor2 = a2;
  var originAnchor1 = a1.clone();
  var originAnchor2 = a2.clone();

  var anchorTarget1 = getAnchorPoint(originAnchor1);
  var anchorTarget2 = getAnchorPoint(originAnchor2);

  function init()
  {
    
  }

  this.update = function()
  {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = colour;  
    context.moveTo(start.x, start.y);
    context.bezierCurveTo(anchor1.x, anchor1.y, anchor2.x, anchor2.y,end.x,end.y);
    context.stroke();
    context.closePath();
    

    
    //anchor2.translateX(1);

    if(anchor1.x < anchorTarget1.x)
    {
      anchor1.translateX(speed);
    }
    else if(anchor1.x > anchorTarget1.x)
    {
      anchor1.translateX(-speed);
    }

    if(anchor1.y < anchorTarget1.y)
    {
      anchor1.translateY(speed);
    }
    else if(anchor1.y > anchorTarget1.y)
    {
      anchor1.translateY(-speed);
    }    

    if(anchor1.y == anchorTarget1.y || anchor1.x > anchorTarget1.x )
    {
      anchorTarget1 = getAnchorPoint(originAnchor1);
    }

    // -------

    if(anchor2.x < anchorTarget2.x)
    {
      anchor2.translateX(speed);
    }
    else if(anchor2.x > anchorTarget2.x)
    {
      anchor2.translateX(-speed);
    }

    if(anchor2.y < anchorTarget2.y)
    {
      anchor2.translateY(speed);
    }
    else if(anchor2.y > anchorTarget2.y)
    {
      anchor2.translateY(-speed);
    }    

    if(anchor2.y == anchorTarget2.y || anchor2.x > anchorTarget2.x )
    {
      anchorTarget2 = getAnchorPoint(originAnchor2);
    }
  }


 

  function getAnchorPoint(anchor)
  {    
    var xmin, xmax, ymin, ymax;

    var diff = (start.y - end.y) < 20 ? (start.y - end.y) : 20;

    xmin = anchor.x - diff;
    xmax = anchor.x + diff;

    ymin = anchor.y - diff;
    ymax = anchor.y + diff;
  
    var p = new Point(getRandom(xmin, xmax), getRandom(ymin, ymax));
    return p;
  }
}