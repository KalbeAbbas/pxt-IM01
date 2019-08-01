//% weight=50 color=#081620 icon="O" block="BM11_led"
namespace BM11_led {

    export enum LED {
        //% block="GREEN"
        GREEN = 0,
        //% block="BLUE"
        BLUE = 1,
    }

    //% blockId="blink_led" block="Blink LED %led| with period of %interval| ms"
    //% weight=30 blockGap=8
    export function blink_led(led: LED, interval: number) {
        if (led == LED.GREEN) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(interval)
            pins.digitalWritePin(DigitalPin.P8, 0)
            basic.pause(interval)
        }

        if (led == LED.BLUE) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(interval)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(interval)
        }
    }
}