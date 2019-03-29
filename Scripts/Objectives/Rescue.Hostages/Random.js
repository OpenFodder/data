
Objectives.RescueHostages.Random = function(pHostageGroups, pHostageCount) {
	HostageGroups = [];
	
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
	
	// Find a position for the tent which is more than 100 away from the first hostage group
	do {
		TentPosition = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
	} while( Map.getDistanceBetweenPositions(HostageGroups[0], TentPosition) < 100);
	
	Map.SpriteAdd( SpriteTypes.Hostage_Rescue_Tent, TentPosition.x, TentPosition.y );
	
	
	for(var GroupCount = 0; GroupCount < pHostageGroups; ++GroupCount) {
		// Todo check path between hostage sprites and tent
		
		// TentPosition HostageGroups[GroupCount]
	}
	
};
