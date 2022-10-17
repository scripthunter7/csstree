import { AdblockXpathParam } from '../../tokenizer/index.js';

export const name = 'AdblockXpathParam';
export const structure = {
    name: String
};

export function parse() {
    if (this.tokenType !== AdblockXpathParam) {
        this.error('Invalid adblock xpath parameter');
    }

    const value = this.source.substring(this.tokenStart, this.tokenEnd);

    this.eat(AdblockXpathParam);

    // Simply return as Raw
    return {
        type: 'Raw',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value
    };
}

export function generate(node) {
    this.tokenize(node.value);
}
