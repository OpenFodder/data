
Objectives.DestroyEnemyBuildings.Random = function(pCount) {
	
	for(var count = 0; count < pCount; ++count) {
		
		position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);

		Map.addBarracks( position.x, position.y );
	}
};
