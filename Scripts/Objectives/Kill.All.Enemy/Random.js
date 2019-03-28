
Objectives.KillAllEnemy.Random = function(pCount) {
	
	for(var count = 0; count < pCount; ++count) {
		
		position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
		Map.SpriteAdd( SpriteTypes.Enemy, position.x, position.y );
	}
};
