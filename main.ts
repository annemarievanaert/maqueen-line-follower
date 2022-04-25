basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.pause(2000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDLeft)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDLeft)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDRight)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDRight)
    basic.pause(1000)
})
