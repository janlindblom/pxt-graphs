/**
 * Provides functions and blocks that lets you draw graphs of data.
 */
//% groups=['LED matrix']
namespace led {

    /**
     * Plot a value as a horisontal bar using a single row of LEDs.
     */
    //% block
    //% blockId=led_graphs_bar_graph_horisontal
    //% block="plot|horisontal|bar|graph|of %value|up|to %upTo|on|row %row"
    //% row.min=0 row.max=4 advanced=true
    //% parts="ledmatrix"
    //% icon="\uf080"
    export function plotSingleBarHorisontal(value: number, upTo: number, row: number): void {
        value = Math.abs(value)
        let mappedMax = Math.round(Math.map(value, 0, upTo, 0, 4))
        for (let x = 0; x <= mappedMax; x++) {
            led.plot(x, row)
        }
        if (mappedMax < 4) {
            for (let x = mappedMax + 1; x <= 4; x++) {
                led.unplot(x, row)
            }
        }
    }

    /**
     * Plot a value as a vertical bar using a single column of LEDs.
     */
    //% block
    //% blockId=led_graphs_bar_graph_vertical
    //% block="plot|vertical|bar|graph|of %value|up|to %upTo|on|column %column"
    //% column.min=0 column.max=4 advanced=true
    //% parts="ledmatrix"
    //% icon="\uf080"
    export function plotSingleBarVertical(value: number, upTo: number, column: number): void {
        value = Math.abs(value)
        let mappedMax = Math.round(Math.map(value, 0, upTo, 0, 4))
        for (let y = 0; y <= mappedMax; y++) {
            led.plot(column, 4 - y)
        }
        if (mappedMax < 4) {
            for (let y = mappedMax + 1; y <= 4; y++) {
                led.unplot(column, 4 - y)
            }
        }
    }
} 