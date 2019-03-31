
/**
 * @return Session
 */
function CreateSession() {
    return {

        /**
         * @var array[cPosition]
         */
        HostageGroupPositions: [],
        
        /**
         * @var cPosition
         */
        RescueTentPosition: new cPosition(0, 0),

        /** 
         * @var sSprite 
         */
        RescueHelicopter: null,

        /**
         * @var cPosition
         */
        HumanPosition: new cPosition(0, 0)
    }
};
