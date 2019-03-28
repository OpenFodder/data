
StartingPositions = {
	
	RandomXY: function(pCount) {
		position = Map.getRandomXYByTerrainType(TerrainType.Land, 5);

		for(var count = 0; count < pCount; ++count) {
			Map.SpriteAdd( SpriteTypes.Player, position.x, position.y );
			
			if(count / 1)
				position.x += 16;
			else
				position.y += 16;
		}
	}
};