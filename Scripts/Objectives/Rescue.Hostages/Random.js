
/**
 * Create a helicopter to rescue hostages
 */
Objectives.RescueHostages.CreateHelicopter = function() {
	
	if(Session.RescueHelicopter !== null)
		return;

	// Check if a walkable path between the humans and the tent
	Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, Session.RescueTentPosition, Session.HumanPosition);
	if(Distance.length == 0)
		needHelicopter = true;
	else {
		// If its not required, give a random chance of placing it anyway
		if(Map.getRandomInt(0, 10) % 3) {
			needHelicopter = true;
		}
	}
	
	if(!needHelicopter) {
		// Check if any of the hostage groups cant walk to the rescue tent
		for( x = 0; x < Session.HostageGroupPositions.length; ++x) {
			Distance = Map.calculatePathBetweenPositions(SpriteTypes.Hostage, Session.RescueTentPosition, Session.HostageGroupPositions[x]);
			if(Distance.length == 0) {
				needHelicopter = true;
				break;
			}
		}
	}

	if(needHelicopter)
		Session.RescueHelicopter = Helicopters.Human.Add_Random_Homing();
};

/**
 * Create a hostage rescue tent
 * 
 * @return cPosition
 */
Objectives.RescueHostages.CreateTent = function() {

	TentSprites = Map.getSpritesByType(SpriteTypes.Hostage_Rescue_Tent);
	if(TentSprites.length == 0) {
		Attempts = 0;

		print("Placing rescue tent");
		// TODO: Loop all known groups
		// Find a position for the tent which is more than 50 away from the first hostage group
		do {
			Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
			++Attempts;
		} while( Map.getDistanceBetweenPositions(Session.HostageGroupPositions[0], Position) < 50 && Attempts < 10);
		if(Attempts == 10)
			print("Failed finding location for rescue tent, placing anyway");

		Session.RescueTentPosition = Position;
		Map.SpriteAdd( SpriteTypes.Hostage_Rescue_Tent, Position.x, Position.y );
	} else {
		Session.RescueTentPosition = TentSprites[0].getPosition();
	}

	return Session.RescueTentPosition;
};

/**
 * Add a random hostage, rescue tent and helicopter (if needed) to the map
 * 
 * @params pHostageCount How many hostages to place
 */
Objectives.RescueHostages.Random = function(pHostageCount) {
	needHelicopter = false;
	
	print("Placing hostages");

	if(pHostageCount == 0)
		++pHostageCount;

	// Place a number of 'groups' of hostages
	HostagePosition = Map.getRandomXYByTerrainType(TerrainType.Land, 2);
	Session.HostageGroupPositions.push(HostagePosition);

	// Place an amount of hostages near this group
	for(var count = 0; count < pHostageCount; ++count) {
		
		position = new cPosition();
		position.x = HostagePosition.x + (16 * count);
		position.y = HostagePosition.y;

		Map.SpriteAdd( SpriteTypes.Hostage, position.x, position.y );
		Map.SpriteAdd( SpriteTypes.Enemy, position.x + 8, position.y );
	}	

	this.CreateTent();
	this.CreateHelicopter();
};
