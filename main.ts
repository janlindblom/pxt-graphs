/**
 * Provides functions and blocks that lets you draw graphs of data.
 */
//% color=190 weight=100 icon="\uf1ec" block="Graphs"
//% groups=['LED matrix']
namespace graphs {

    //% block
    //% blockId=graphs_bar_graph_horisontal
    //% block="bar|graph|horisontal|value %value|up|to %upTo|row %row"
    //% row.min=0 row.max=4
    export function barGraphHorisontal(value: number, upTo: number, row: number): void {
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

    //% block
    //% blockId=graphs_bar_graph_vertical
    //% block="bar|graph|vertical|value %value|up|to %upTo|column %column"
    //% column.min=0 column.max=4
    export function barGraphVertical(value: number, upTo: number, column: number): void {
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