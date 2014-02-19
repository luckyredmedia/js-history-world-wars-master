function Point(x,y) 
{
    this.x = x || 0;
    this.y = y || 0;
  
  this.translateX = function(x) 
  {
    return this.x += x; 
  }
  this.translateY = function(y) 
  {
    return this.y += y;
  }
  this.clone = function()
  {
    return new Point(this.x,this.y);
  }
}