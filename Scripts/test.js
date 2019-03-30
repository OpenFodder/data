
/*
Map.Create(20, 20, TileTypes.Jungle, 0);
Map.CreateRandom();

noise = Map.SimplexIslands(5, 0.1, 0.2, 3, true);

for( x = 0; x < 20; ++x) {
	for( y = 0; y < 20; ++y) {
		print("" + noise[x][y] + " ");
	}
}*/

Map.Create(40, 30, TileTypes.Jungle, 0);
Terrain.RandomTiles();

StartingPosition.RandomXY(3);
Objectives.KillAllEnemy.Random(3);
Objectives.DestroyEnemyBuildings.Random(2);
Objectives.RescueHostages.Random(2, 1);




// RandomSprite.scriptCall("General/test.js");
	//if(Map.getTileType() == TileTypes.Jungle) {
		
		//position = Map.getRandomXYByTerrainType(TerrainType.Land, 5);

	//	Map.SpriteAdd( SpriteTypes.Enemy, position.x - 16, position.y );
		
	//	found_sprites = Map.getSpritesByType(SpriteTypes.Player);
	//	found_sprites.forEach(function(sprite) {
			
	//		print("Sprite X: " + sprite.x + " Y: " + sprite.y);

	// });
	//}