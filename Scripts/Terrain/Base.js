
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
	
	
	
	Random: function() {

		switch(Map.getTileType()) {
			
			case TileTypes.Jungle:
				return Terrain.Jungle.Random();
			
			default:
				return;
		}
	}
	
			
};
