const selectorList = {
    parse() {
        return this.createSingleNodeList(
            this.SelectorList()
        );
    }
};

const selector = {
    parse() {
        return this.createSingleNodeList(
            this.Selector()
        );
    }
};

const identList = {
    parse() {
        return this.createSingleNodeList(
            this.Identifier()
        );
    }
};

const nth = {
    parse() {
        return this.createSingleNodeList(
            this.Nth()
        );
    }
};

const adblockRawParam = {
    parse() {
        return this.createSingleNodeList(
            this.AdblockRawParam()
        );
    }
};

const adblockXpathParam = {
    parse() {
        return this.createSingleNodeList(
            this.AdblockXpathParam()
        );
    }
};

export default {
    'dir': identList,
    'has': selectorList,
    'lang': identList,
    'matches': selectorList,
    'is': selectorList,
    '-moz-any': selectorList,
    '-webkit-any': selectorList,
    'where': selectorList,
    'not': selectorList,
    'nth-child': nth,
    'nth-last-child': nth,
    'nth-last-of-type': nth,
    'nth-of-type': nth,
    'slotted': selector,

    // Adblock
    '-abp-has': selector,
    '-abp-contains': adblockRawParam,
    'contains': adblockRawParam,
    'if-not': selector,
    'xpath': adblockXpathParam
};
