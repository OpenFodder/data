
Helicopters = {
	
	Human: {
		
		/**
		 *  Add a homing missile helicopter at a random X/Y
		 *   in a path which is accessible on foot to the player
		 */
		Add_Random_Homing: function() {
			Attempts = 0;
			Distance = [];
			
			print("Placing helicopter");

			// Find a position which can be accessed by walking
			do {
				Position = Map.getRandomXYByTerrainType(TerrainType.Land, 1);
				Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, Position, Session.HumanPosition);
				++Attempts;
			} while(Distance.length < 10 && Attempts < 100);

			if(Attempts == 100)
				print("Failed finding location for rescue helicopter, placing anyway");
			
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
