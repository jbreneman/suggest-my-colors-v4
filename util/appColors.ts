import { mutateColor } from './colorShift';

export const getOpposites: Function = (hex: string) => {
    return [
        ...mutateColor(hex, 255, 0, 0, 0, 1, true),
        ...mutateColor(hex, 0, 255, 0, 0, 1, true),
        ...mutateColor(hex, 0, 0, 255, 0, 1, true),
        ...mutateColor(hex, 255, 255, 0, 0, 1, true),
        ...mutateColor(hex, 0, 255, 255, 0, 1, true),
        ...mutateColor(hex, 255, 0, 255, 0, 1, true),
        ...mutateColor(hex, 255, 255, 255, 0, 1, true),
    ];
};

export const getHalfOpposites: Function = (hex: string) => {
    return [
        ...mutateColor(hex, 128, -32, 0, 0, 1, false),
        ...mutateColor(hex, 0, 128, -32, 0, 1, false),
        ...mutateColor(hex, -32, 0, 128, 0, 1, false),
        ...mutateColor(hex, 128, 128, 0, 0, 1, false),
        ...mutateColor(hex, 0, 128, 128, 0, 1, false),
        ...mutateColor(hex, 128, 0, 128, 0, 1, false),
        ...mutateColor(hex, 128, 128, 128, 0, 1, false),
    ];
};

export const getRedShift: Function = (hex: string) => {
    return mutateColor(hex, 32, 0, 0, 0, 7, false);
};

export const getGreenShift: Function = (hex: string) => {
    return mutateColor(hex, 0, 32, 0, 0, 7, false);
};

export const getBlueShift: Function = (hex: string) => {
    return mutateColor(hex, 0, 0, 32, 0, 7, false);
};
