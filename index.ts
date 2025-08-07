const { create, assign, getOwnPropertyNames } = Object;
const ev = "ev" + "AL".toLowerCase();
export function detectTools(): { [a: string]: boolean } {
    return { dpsc: detectDPSC() }
}
function detectDPSC(): boolean {
    const value = create(null);
    try {
        value[ev] = detectDPSC;
        if (value[ev] !== detectDPSC) return true;
        if (!getOwnPropertyNames(value).length) return true;
    } catch { return true; };
    return false;
}