@vcard/vcard4-meta
==================
[![Build Status](https://img.shields.io/github/actions/workflow/status/vcard-js/vcard4-meta/ci.yaml?branch=main)](https://github.com/vcard-js/vcard4-meta/actions/workflows/ci.yaml)
[![npm Version](https://img.shields.io/npm/v/@vcard/vcard4-meta.svg)](https://www.npmjs.com/package/@vcard/vcard4-meta)
[![Node.js Version](https://img.shields.io/node/v/@vcard/vcard4-meta.svg)](https://nodejs.org/)
[![License Type](https://img.shields.io/github/license/vcard-js/vcard4-meta.svg)](LICENSE)

A [vCard 4](https://datatracker.ietf.org/doc/html/rfc6350) library which provides data about the format.

Install
-------
```sh-session
npm install @vcard/vcard4-meta
```

Usage
-----
**NOTE**: This library exports both [CJS](https://nodejs.org/api/modules.html) and [ESM](https://nodejs.org/api/esm.html) modules.

```js
import {
    EOL, // (CRLF)
    FOLD_CONTINUATION_CHARS, // An array of valid fold continuation characters (HORIZONTAL TAB and SPACE)
    HORIZONTAL_TAB, // (U+0009)
    MAX_OCTETS_PER_LINE, // 75
    PREFERRED_FOLD_CONTINUATION_CHAR, // The fold continuation character preferred by the vCard.js suite (SPACE)
    SEPARATOR, // (SEMICOLON)
    SPACE // (U+0020)
} from '@vcard/vcard4-meta';
```

Testing
-------
```sh-session
npm test
```

License
-------
The MIT License. See the [license file](LICENSE) for details.
