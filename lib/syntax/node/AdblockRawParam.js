import { AdblockRawParam } from '../../tokenizer/index.js';

export const name = 'AdblockRawParam';
export const structure = {
    name: String
};

export function parse() {
    if (this.tokenType !== AdblockRawParam) {
        this.error('Invalid adblock raw parameter');
    }

    const value = this.source.substring(this.tokenStart, this.tokenEnd);

    this.eat(AdblockRawParam);

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
