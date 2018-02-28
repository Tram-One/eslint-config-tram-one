# eslint-config-tram-one
This is the eslint config (used in tandem with xo) for the Tram-One Project

This config is supposed to be useful for both frameworks written for Tram-One, and web-apps using Tram-One.

## Installation and Usage
First install xo and the lint config:
```bash
npm install --save-dev xo eslint-config-tram-one
```

Then, add the following to your `package.json` under scripts:
```json
"lint": "xo"
```
and add the following at the end of the `package.json`:
```json
"xo": {
  "extends": [
    "tram-one"
  ]
}
```

Finally, to use, run:
```bash
npm run lint
```
