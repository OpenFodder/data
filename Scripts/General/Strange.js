
Strange = {

	PlaceSpritesOnPath: function(pSpriteType, pFrom, pTo) {
        
        Distance = Map.calculatePathBetweenPositions(SpriteTypes.Player, pFrom, pTo);
        for(var count = 0; count < Distance.length; ++count) {
            Map.SpriteAdd( pSpriteType, Distance[count].x, Distance[count].y);
        }
    }
};

