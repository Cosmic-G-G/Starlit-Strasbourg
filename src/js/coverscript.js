export function easeInOutQuad(t) { //TODO:  Convert to TypeScript
    if (0 <= t <= 1) return t < 0.5 ? 0.5*t**2 : 1-(-0.5*t+0.5)**2;
    return 0
}