

Map.Create(45, 40, TileTypes.Jungle, 0);
//Terrain.RandomTiles();
Terrain.Randomize();

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