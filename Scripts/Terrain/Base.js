
Terrain = {
	
	Jungle: {
		
		Tiles: {
			Water: 326,
			QuickSand: 167,
			Land: 123,
			Tree: 82
		}
	},

	Desert: {
	
	},
	
	Ice: {
		
	},

	Moors: {
		
	},
	
	Interior: {
		
	},
	
	AmigaFormat: {
		
	},
	
	
	
	RandomTiles: function() {

		// TODO: Rotate through available random functions
		
		switch(Map.getTileType()) {
			
			case TileTypes.Jungle:
				return Terrain.Jungle.RandomSimplexNoise();
			
			default:
				return;
		}
	}
	
			
};
