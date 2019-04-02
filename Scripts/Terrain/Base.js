
var Terrain = {
	
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
	
	/**
	 * Get the basic tile ids for the current map tileType
	 * 
	 * @return object
	 */
	GetTiles: function() {
				
		switch(Map.getTileType()) {
			
			case TileTypes.Jungle:
				return Terrain.Jungle.Tiles;
			
			case TileTypes.Desert:
			case TileTypes.Ice:
			case TileTypes.Moors:
			case TileTypes.Interior:
			case TileTypes.AmigaFormat:
				return Terrain.Jungle.Tiles;
			default:
				return Terrain.Jungle.Tiles;;
		}
	},
	
	/**
	 * Create a random map layout
	 */
	Randomize: function() {

		// TODO: Rotate through available random functions
		pScale = Map.getRandomFloat(0.01, 0.1);
		pLacunarity = Map.getRandomFloat(0.1, 0.5);
		pPersistance = Map.getRandomFloat(0.1, 1.);	// higher produces more trees
		return this.RandomSimplexNoise(pScale, pLacunarity, pPersistance, 5 );
		
		pRoughness = Map.getRandomFloat(0.01, 0.3);
		pScale = Map.getRandomFloat(0.01, 0.1);
		pSeed = Map.getRandomInt(1, 500);
		return this.RandomSimplexIslands(pRoughness, pScale, pSeed, 5, true, 0.08);
	},
	
	/**
	 * Create random simplex islands, with basic tiles
	 * 
	 * @param {number} pRoughness 
	 * @param {number} pScale 
	 * @param {number} pSeed 
	 * @param {number} pOctaves 
	 * @param {boolean} pRadialEnabled 
	 */
	RandomSimplexIslands: function(pRoughness, pScale, pSeed, pOctaves, pRadialEnabled) {
		Tiles = this.GetTiles();
		noises = Map.SimplexIslands(pOctaves, pRoughness, pScale, pSeed, pRadialEnabled);
		
		for( y = 0; y < Map.getHeight(); ++y) {
			for( x = 0; x < Map.getWidth(); ++x ) {
				
				noise =  noises[x][y];
				TileID = 0;

				if (noise < 0.100) {
					TileID = Tiles.Water;
				}
				else if (noise < 0.500) {
					TileID = Tiles.Land;
				}
				else {
					TileID = Tiles.Tree;
				}

				Map.TileSet( x, y, TileID );
			}
		}
	},

	/**
	 * Create a random simplex noise map, with basic tiles
	 * 
	 * @param {number} pFrequency 
	 * @param {number} pLacunarity 
	 * @param {number} pPersistance 
	 * @param {number} pOctaves 
	 */
	RandomSimplexNoise: function(pFrequency, pLacunarity, pPersistance, pOctaves ) {
		Tiles = this.GetTiles();

		print("SimplexNoise. frequency: " + pFrequency + " lac: " + pLacunarity + " per: " + pPersistance + " octaves:" + pOctaves);
		noises = Map.SimplexNoise(pOctaves, pFrequency, pLacunarity, pPersistance);
		
		for( y = 0; y < Map.getHeight(); ++y) {
			for( x = 0; x < Map.getWidth(); ++x ) {
				noise = noises[x][y];
				TileID = 0;

				if (noise < -0.500) {
					TileID = Tiles.Water;
				}
				else if (noise < -0.020) {
					TileID = Tiles.Water;
				}
				else if (noise < -0.000) {
					TileID = Tiles.Land;
				}
				else if (noise < 0.005) {
					TileID = Tiles.Land;
				}
				else if (noise > 0.300 && noise < 0.400) {
					TileID = Tiles.Land;// TileQuickSand;
				}
				else if (noise < 0.500) {
					TileID = Tiles.Land;
				}
				else if (noise < 0.700) {
					TileID = Tiles.Land;
				}
				else if (noise < 0.900) {
					TileID = Tiles.Tree;
				}
				else {
					TileID = Tiles.Tree;
				}

				Map.TileSet( x, y, TileID );
			}
		}
	}
	
};
