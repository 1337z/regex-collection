<h1 align="center"> REGEX-COLLECTION </h1>
<p align="center"> 
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT license">
</p>



> Useful regex patterns and functions to test them.

Currently using `67` tests for `6` functions to ensure accurate results!

## Supported patterns for:
- Hex color codes
- Telephone numbers
- Email addresses

#### [Documentation](https://1337z.github.io/regex-collection/)

---

## Install

```
npm i regex-collection
```

## Usage

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