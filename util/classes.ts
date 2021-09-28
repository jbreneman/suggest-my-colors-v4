export const buildClasses = (classes: Array<string | undefined>) => {
    return classes.filter(Boolean).join(' ');
};
