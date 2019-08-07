<h1 align="center"> REGEX-COLLECTION </h1>
<p align="center"> 
  <img alt="NPM" src="https://img.shields.io/npm/l/regex-collection?style=flat-square">
  <img alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/1337z/regex-collection?style=flat-square">
  <img alt="Travis (.org)" src="https://img.shields.io/travis/1337z/regex-collection?style=flat-square">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/1337z/regex-collection?style=flat-square">
  <img alt="npm" src="https://img.shields.io/npm/dt/regex-collection?style=flat-square">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/regex-collection?style=flat-square">
</p>



> Useful regex patterns and functions to test them.

Currently using `266` tests for `8` functions to ensure accurate results!

## :white_check_mark: Supported patterns for:
- CSS comments
- Email addresses
- Full numbers / Integer
- Full numbers / Integer (Negative)
- Full numbers / Integer (Positive)
- Hex color codes
- IP addresses
- Telephone numbers

#### [Documentation :clipboard:](https://1337z.github.io/regex-collection/)

---

## :package: Install

```
npm i regex-collection
```

## :clipboard: Usage

### Importing
#### JavaScript
```javascript
const search = require('regex-collection')
```

#### TypeScript
```typescript
import * as search from 'regex-collection'
```

### Syntax
> The syntax is the same for JavaScript and TypeScript

#### `get` Get all occurrences of regex
```javascript
const text = "Hello World contact@example.com Bye World hello@world.com"

let result = search.getEmailAddress(text)
// => ["contact@example.com", "hello@world.com"]
```

#### `is` Check if a string matches to a regex
```javascript
const text = "Hello World contact@example.com Bye World hello@world.com"

let result = search.isEmailAddress(text)
// => false
```

```javascript
const text = "contact@example.com"

let result = search.isEmailAddress(text)
// => true
```