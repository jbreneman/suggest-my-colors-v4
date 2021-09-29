const hex2rgb: Function = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
              rgb:
                  parseInt(result[1], 16) +
                  ', ' +
                  parseInt(result[2], 16) +
                  ', ' +
                  parseInt(result[3], 16),
          }
        : null;
};

const rgbComponentToHex: Function = (component: number) => {
    const hex = component.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
};

const rgbToHex: Function = (r: number, g: number, b: number) => {
    return `#${rgbComponentToHex(r)}${rgbComponentToHex(g)}${rgbComponentToHex(
        b,
    )}`;
};

//function that changes any number to the range of 0 < x < 255. Keeps iterating until within this range
const zeroTo255: Function = (number: number) => {
    if (number > 255) {
        number -= 255;
        if (number > 255) {
            number = zeroTo255(number);
        }
    }

    if (number < 0) {
        number += 255;
        if (number < 0) {
            number = zeroTo255(number);
        }
    }
    return number;
};

//the meat of the app. takes a color and returns a mutated color
export const mutateColor: Function = (
    color: string,
    addR: number,
    addG: number,
    addB: number,
    increment: number,
    amount: number,
    isOpposite: boolean,
) => {
    //split into separate rgb channels
    const startRGB = hex2rgb(color);

    //save the current data in mutate, and set the mutate increment to the initial data
    let mutate = {
        r: addR + increment,
        g: addG + increment,
        b: addB + increment,
    };
    const mutateBy = { r: mutate.r, g: mutate.g, b: mutate.b };
    const output = [];

    for (var i = 1; i <= amount; i++) {
        var insideColor = '';

        if (isOpposite) {
            insideColor = rgbToHex(
                addR > 0 ? 255 - startRGB.r : startRGB.r,
                addG > 0 ? 255 - startRGB.g : startRGB.g,
                addB > 0 ? 255 - startRGB.b : startRGB.b,
            );
        } else {
            insideColor = rgbToHex(
                zeroTo255(startRGB.r + mutate.r),
                zeroTo255(startRGB.g + mutate.g),
                zeroTo255(startRGB.b + mutate.b),
            );
        }

        output.push(insideColor);
        mutate = {
            r: mutate.r + mutateBy.r,
            g: mutate.g + mutateBy.g,
            b: mutate.b + mutateBy.b,
        };
    }
    return output;
};
