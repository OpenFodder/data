
Helicopters = {
	
	Human: {
		
		/**
		 *  Add a homing missile helicopter at a random X/Y
		 *   in a path which is accessible on foot to the player
		 */
		Add_Random_Homing: function() {
			// Find a position which can be accessed by walking
			do {
				Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
				Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, Position, Session.HumanPosition);

			} while(Distance.length == 0);

			Map.SpriteAdd( SpriteTypes.Helicopter_Homing_Human, Position.x, Position.y );

			return Position;
		},
			
		/**
		 * Add a random helicopter
		 */
		RandomXY: function() {
			Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);

			// TODO
		}
	}
	

};
