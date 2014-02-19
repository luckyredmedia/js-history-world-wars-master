ImageUrls = {};

ImageUrls.getUrlByContinent = function(country)
{
	switch(country)
	{
		case "africa": return "images/Africa.svg";
		case "asia": return "images/Asia.svg";
		case "europe-asia": case "asia-europe": return "images/Euro-Asia.svg";
		case "europe": return "images/Europe2.svg";		
		case "north america": return "images/NorthAmerica.svg";
		case "south america": return "images/SouthAmerica.svg";
		case "multiple": case "global": return "images/Global.svg";
	}
}