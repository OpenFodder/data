Objectives.RescueHostages.AddHelicopter = function() {
	
	if(Session.RescueHelicopter !== null) {print("Rescue X: " + Session.RescueHelicopter.x);
		return;}

	print("Starting X: " + Session.HumanPosition.x + " Y: " + Session.HumanPosition.y);
	print("Tent Starting X: " + Session.RescueTentPosition.x + " Y: " + Session.RescueTentPosition.y);

	// Ensure a walkable path between the humans and the tent
	Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, Session.RescueTentPosition, Session.HumanPosition);
	if(Distance.length == 0)
		needHelicopter = true;
	//Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, TentPosition, Session.HumanPosition);

	if(!needHelicopter) {
		print("Placing rescue helicopter");

		for( x = 0; x < Session.HostageGroupPositions.length; ++x) {
			//Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox,TentPosition, HostagePosition);
			//Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox,Session.HumanPosition, HostagePosition);

			Distance = Map.calculatePathBetweenPositions(SpriteTypes.Hostage, Session.RescueTentPosition, Session.HostageGroupPositions[x]);
			if(Distance.length == 0) {
				needHelicopter = true;
				break;
			}
			
		}
		print("Steps between tent and hostage group: " + Distance.length);
	}

	if(needHelicopter) {
		Session.RescueHelicopter = Helicopters.Human.Add_Random_Homing();
		//Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, Session.HumanPosition, HelicopterPosition);
	}
}

/**
 * Create a hostage rescue tent
 * 
 * @return cPosition
 */
Objectives.RescueHostages.CreateTent = function() {

	TentSprites = Map.getSpritesByType(SpriteTypes.Hostage_Rescue_Tent);
	if(TentSprites.length == 0) {

		// TODO: Loop all known groups
		// Find a position for the tent which is more than 50 away from the first hostage group
		do {
			Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
		} while( Map.getDistanceBetweenPositions(Session.HostageGroupPositions[0], Position) < 50);
		
		Session.RescueTentPosition = Position;
		Map.SpriteAdd( SpriteTypes.Hostage_Rescue_Tent, Position.x, Position.y );
	} else {
		Session.RescueTentPosition = TentSprites[0].getPosition();
	}

	return Session.RescueTentPosition;
}

/**
 * Add a random hostage, rescue tent and helicopter (if needed) to the map
 * 
 * @params pHostageCount How many hostages to place
 */
Objectives.RescueHostages.Random = function(pHostageCount) {
	needHelicopter = false;
	
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
	}	

	this.CreateTent();
	this.AddHelicopter();
};
