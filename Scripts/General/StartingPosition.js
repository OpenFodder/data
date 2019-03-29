
StartingPosition = {
	Position: { x: 0, y: 0 },
	
	RandomXY: function(pCount) {
		this.Position = Map.getRandomXYByTerrainType(TerrainType.Land, 5);

		for(var count = 0; count < pCount; ++count) {
			Map.SpriteAdd( SpriteTypes.Player, this.Position.x, this.Position.y );
			
			if(count / 1)
				this.Position.x += 16;
			else
				this.Position.y += 16;
		}
	}
};