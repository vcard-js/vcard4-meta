import { describe, expect, it } from 'vitest';
import {
    EOL,
    FOLD_CONTINUATION_CHARS,
    HORIZONTAL_TAB,
    MAX_OCTETS_PER_LINE,
    PREFERRED_FOLD_CONTINUATION_CHAR,
    SEPARATOR,
    SPACE
} from '../src/index.js';

describe('EOL', () => {
    it('is a CRLF', () => {
        expect(EOL).toEqual('\r\n');
    });
});

describe('FOLD_CONTINUATION_CHARS', () => {
    it('is an array', () => {
        expect(FOLD_CONTINUATION_CHARS).toBeInstanceOf(Array);
    });

    it('contains a space', () => {
        expect(FOLD_CONTINUATION_CHARS).toContain(' ');
    });

    it('contains a horizontal tab', () => {
        expect(FOLD_CONTINUATION_CHARS).toContain(String.fromCharCode(9));
    });
});

describe('HORIZONTAL_TAB', () => {
    it('is a horizontal tab', () => {
        expect(HORIZONTAL_TAB).toContain(String.fromCharCode(9));
    });
});

describe('SEPARATOR', () => {
    it('is a semi-colon', () => {
        expect(SEPARATOR).toEqual(';');
    });
});

describe('MAX_OCTETS_PER_LINE', () => {
    it('is 75', () => {
        expect(MAX_OCTETS_PER_LINE).toEqual(75);
    });
});

describe('PREFERRED_FOLD_CONTINUATION_CHAR', () => {
    it('is a space', () => {
        expect(PREFERRED_FOLD_CONTINUATION_CHAR).toEqual(' ');
    });
});

describe('SPACE', () => {
    it('is a space', () => {
        expect(SPACE).toEqual(' ');
    });
});
