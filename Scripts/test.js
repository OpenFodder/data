
Session = CreateSession();

Map.Create(45, 40, TileTypes.Jungle, 0);
//Terrain.RandomTiles();
Terrain.Randomize();

Human.RandomXY(3);
Objectives.KillAllEnemy.Random(3);
Objectives.DestroyEnemyBuildings.Random(2);

Objectives.RescueHostages.Random(1);
Objectives.RescueHostages.Random(1);


// Some Fun
RandomLast = null;
/*
for(count = 0; count < 5; ++count) {
	Random = Map.getRandomXYByTerrainType(TerrainType.Land, 1);

	if(RandomLast != null)
		Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox,Random, RandomLast);

	Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, Random, Session.HumanPosition);
	RandomLast = Random;
}*/

for(count = 0; count < Session.HostageGroupPositions.length; ++count) {

	Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, Session.HostageGroupPositions[count], Session.HumanPosition);
	Strange.PlaceSpritesOnPath(SpriteTypes.GrenadeBox, Session.HostageGroupPositions[count], Session.RescueTentPosition);
}
