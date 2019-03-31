
Human = {

	RandomXY: function(pCount) {
		
		Session.HumanPosition = Map.getRandomXYByTerrainType(TerrainType.Land, 3);
		// TODO: Check for enemy within X range

		Position = new cPosition();
		Position.x = Session.HumanPosition.x;
		Position.y = Session.HumanPosition.y;

		for(var count = 0; count < pCount; ++count) {

			Map.SpriteAdd( SpriteTypes.Player, Position.x, Position.y );

			if(count / 1)
				Position.x += 16;
			else
				Position.y += 16;
		}
	}
};