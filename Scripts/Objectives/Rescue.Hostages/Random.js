
Objectives.RescueHostages.Random = function(pHostageGroups, pHostageCount) {
	HostageGroups = [];
	needHelicopter = false;
	
	if(pHostageGroups == 0)
		++pHostageGroups;
	if(pHostageCount == 0)
		++pHostageCount;

	// Place a number of 'groups' of hostages
	for(var GroupCount = 0; GroupCount < pHostageGroups; ++GroupCount) {
		
		HostageGroups[GroupCount] = Map.getRandomXYByTerrainType(TerrainType.Land, 2);
	
		// Place an amount of hostages near this group
		for(var count = 0; count < pHostageCount; ++count) {
			
			position = HostageGroups[GroupCount];
			position.x += (16 * count);
			
			Map.SpriteAdd( SpriteTypes.Hostage, position.x, position.y );
		}
	}	
	
	// Find a position for the tent which is more than 50 away from the first hostage group
	do {
		TentPosition = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
	} while( Map.getDistanceBetweenPositions(HostageGroups[0], TentPosition) < 50);
	
	
	print("Starting X: " + StartingPosition.Position.x + " Y: " + StartingPosition.Position.y);
	print("Tent Starting X: " + TentPosition.x + " Y: " + TentPosition.y);

	Map.SpriteAdd( SpriteTypes.Hostage_Rescue_Tent, TentPosition.x, TentPosition.y );

	// Ensure a walkable path between the humans and the tent
	Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, TentPosition, StartingPosition.Position);
	if(Distance.length == 0)
		needHelicopter = true;

	Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, TentPosition, StartingPosition.Position);
	print("Steps between Tent and Human Start: " + Distance.length);
	
	if(!needHelicopter) {
		for(var GroupCount = 0; GroupCount < pHostageGroups; ++GroupCount) {

			Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox,TentPosition, HostageGroups[GroupCount]);
			Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox,StartingPosition.Position, HostageGroups[GroupCount]);

			Distance = Map.calculatePathBetweenPositions(SpriteTypes.Hostage, TentPosition, HostageGroups[GroupCount]);
			if(Distance.length == 0) {
				needHelicopter = true;
				break;
			}
			
			print("Steps between tent and hostage group: " + Distance.length);
		}
	}

	if(needHelicopter) {
		Position = Helicopters.Human.Add_Random_Homing();
		Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, StartingPosition.Position, Position);
	}
};
