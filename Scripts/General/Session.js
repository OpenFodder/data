
/**
 * @return Session
 */
function CreateSession() {
    return {

        HostageGroupPositions: [],
        
        RescueTentPosition: null,
        RescueHelicopter: null,

        HumanPosition: new cPosition(0, 0)
    }
};
