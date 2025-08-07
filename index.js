const { create: $c3f6c693698dc7cd$var$create, assign: $c3f6c693698dc7cd$var$assign, getOwnPropertyNames: $c3f6c693698dc7cd$var$getOwnPropertyNames } = Object;
const $c3f6c693698dc7cd$var$ev = "ev" + "AL".toLowerCase();
function $c3f6c693698dc7cd$export$368f61e18cb5a633() {
    return {
        dpsc: $c3f6c693698dc7cd$var$detectDPSC()
    };
}
function $c3f6c693698dc7cd$var$detectDPSC() {
    const value = $c3f6c693698dc7cd$var$create(null);
    try {
        value[$c3f6c693698dc7cd$var$ev] = $c3f6c693698dc7cd$var$detectDPSC;
        if (value[$c3f6c693698dc7cd$var$ev] !== $c3f6c693698dc7cd$var$detectDPSC) return true;
        if (!$c3f6c693698dc7cd$var$getOwnPropertyNames(value).length) return true;
    } catch  {
        return true;
    }
    return false;
}


export {$c3f6c693698dc7cd$export$368f61e18cb5a633 as detectTools};
//# sourceMappingURL=index.js.map
