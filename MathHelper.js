function nomalize(value, minimum, maximun)
{
    return (value - minimum) / (maximun - minimum);
}

function interpolate(normValue, minimum, maximun)
{
    return minimum + (maximun - minimum) * normValue;
}

function map(value, min1, max1, min2, max2)
{
    return interpolate(nomalize(value, min1, max1), min2 , max2);
}

function getRandom(min, max) 
{
  return Math.round(Math.random() * (max - min) + min);
}