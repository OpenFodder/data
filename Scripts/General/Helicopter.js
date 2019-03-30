
Helicopters = {
	
	Human: {
		
		Add_Random_Homing: function() {
			
			// Find a position which can be accessed by walking
			do {
				Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
				Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, Position, StartingPosition.Position);
			} while(Distance.length == 0);

			Map.SpriteAdd( SpriteTypes.Helicopter_Homing_Human, Position.x, Position.y );
		},
			
		/* Add a random helicopter */
		RandomXY: function() {
			Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);

			// TODO
		}
	}
	

};
