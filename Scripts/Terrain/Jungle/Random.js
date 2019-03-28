
Terrain.Jungle.Random = function() {

	scale = Map.getRandomFloat(0.01, 0.1);
	lacunarity = Map.getRandomFloat(0.1, 0.5);
	persistance = Map.getRandomFloat(0.1, 1.);	// higher produces more trees
	z = Map.getRandomFloat(0.1, 10);

	simplex = new SimplexNoise(scale, lacunarity, persistance);

	octaves = 5 + Math.log(scale);

	TileWater = 326;
	TileQuickSand = 167;
	TileLand = 123;
	TileBounce = 82;

	for( y = 0; y < Map.getHeight(); ++y) {

		for( x = 0; x < Map.getWidth(); ++x ) {
			
			noise = simplex.fractalXYZ(octaves, x, y, z);

			TileID = 0;

			if (noise < -0.500) {
				TileID = TileWater;
			}
			else if (noise < -0.020) {
				TileID = TileWater;
			}
			else if (noise < -0.000) {
				TileID = TileLand;
			}
			else if (noise < 0.005) {
				TileID = TileLand;
			}
			else if (noise > 0.300 && noise < 0.400) {
				TileID = TileLand;// TileQuickSand;
			}
			else if (noise < 0.500) {
				TileID = TileLand;
			}
			else if (noise < 0.700) {
				TileID = TileLand;
			}
			else if (noise < 0.900) {
				TileID = TileBounce;
			}
			else {
				TileID = TileBounce;
			}

			Map.TileSet( x, y, TileID );
		}
	}
};
