Colours = {}
	
Colours.getContinent = function(country)
{
	switch(country)
	{
		case "africa": return "#af0301";
		case "asia": return "#fa0100";
		case "asia-europe": return "#fdf230";
		case "europe": return "#ff8702";		
		case "north america": return "#b514a0";
		case "south america": return "#fd58b4";
		case "global": return "#807e71";
	}
}

