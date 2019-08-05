//% weight=50 color=#081620 icon="O" block="BM11_led"
namespace BM11_led {

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

    //% blockId="blink_led" block="Blink LED %led| with period of %interval| ms and intensity %intensity level"
    //% weight=30 blockGap=8
    //%intensity.min=1 intensity.max=10
    export function blink_led(led: LED, interval: number, intensity: number) {

        if (led == LED.RED) {
            pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P2, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.GREEN) {
            pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P8, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.BLUE) {
            pins.analogWritePin(AnalogPin.P16, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
            pins.analogWritePin(AnalogPin.P16, pins.map(255 / intensity, 0, 1023, 0, 255))
            basic.pause(interval)
        }

        if (led == LED.YELLOW) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(interval)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            basic.pause(interval)
        }

        if (led == LED.YELLOW) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(interval)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
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
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
            basic.pause(interval)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
            basic.pause(interval)
        }
    }
}