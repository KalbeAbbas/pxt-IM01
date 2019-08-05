//% weight=50 color=#081620 icon="O" block="BM11_led"
namespace BM11_led {

    export enum STATE {
        //% block="TRUE"
        TRUE = 0,
        //% block="FALSE"
        FALSE = 1,
    }

    export enum LED {
        //% block="RED"
        RED = 0,
        //% block="GREEN"
        GREEN = 1,
        //% block="BLUE"
        BLUE = 2,
        //% block="WHITE"
        WHITE = 3,
        //% block="YELLOW"
        YELLOW = 4,
        //% block="PINK"
        PINK = 5,
        //% block="PURPLE"
        PURPLE = 6,
        //% block="BROWN"
        BROWN = 7,
        //% block="BLACK"
        BLACK = 8,
    }

    //% blockId="show_color_on_led" block="Turn On %led| with intensity level %intensity| %state=1"
    //% weight=30 blockGap=8
    //%intensity.min=1 intensity.max=10
    export function show_color_on_led(led: LED, intensity: number, state: STATE) {

        if (led == LED.RED) {
            if(state == STATE.TRUE){
                pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            }
        }

        if (led == LED.GREEN) {
            if(state == STATE.TRUE){
                pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            }
        }

        if (led == LED.BLUE) {
            if(state == STATE.TRUE)
            {
                pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(255 / intensity, 0, 1023, 0, 255))
            }
        }

        if (led == LED.YELLOW) {
            if(state == STATE.TRUE){
                pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            }
        }

        if (led == LED.PINK) {
            if(state == STATE.TRUE)
            {
                pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(192 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(203 / intensity, 0, 1023, 0, 255))
            }
        }

        if (led == LED.PURPLE) {
            if(state == STATE.TRUE)
            {
                pins.analogWritePin(AnalogPin.P2, pins.map(238 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(130 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(238 / intensity, 0, 1023, 0, 255))
            }
        }

        if (led == LED.BROWN) {
            if(state == STATE.TRUE)
            {
                pins.analogWritePin(AnalogPin.P2, pins.map(165 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(42 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(42 / intensity, 0, 1023, 0, 255))
            }
        }

        if (led == LED.WHITE) {
            if(state == STATE.TRUE)
            {
                pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
                pins.analogWritePin(AnalogPin.P16, pins.map(255 / intensity, 0, 1023, 0, 255))
            }
        }
    }

    //% blockId="blink_led" block="Blink LED %led| with period of %interval| ms and intensity level %intensity"
    //% weight=30 blockGap=8
    //%intensity.min=1 intensity.max=10
    export function blink_led(led: LED, interval: number, intensity: number) {

        if (led == LED.RED) {
            pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.GREEN) {
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.BLUE) {
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }


        if (led == LED.YELLOW) {
            pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.PINK) {
            pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(192 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(203 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.PURPLE) {
            pins.analogWritePin(AnalogPin.P2, pins.map(238 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(130 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(238 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.BROWN) {
            pins.analogWritePin(AnalogPin.P2, pins.map(165 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(42 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(42 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.WHITE) {
            pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P8, pins.map(0, 0, 1023, 0, 255))
            pins.analogWritePin(AnalogPin.P16, pins.map(0, 0, 1023, 0, 255))
            basic.pause(interval)
        }
    }
}