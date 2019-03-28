
Terrain = {
	
	Jungle: {
		
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

		switch(Map.getTileType()) {
			
			case TileTypes.Jungle:
				return Terrain.Jungle.Random();
			
			default:
				return;
		}
	}
	
			
};
