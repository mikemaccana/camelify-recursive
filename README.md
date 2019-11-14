# Recursively convert API responses to camelCase

Have an API response that doesn't use JavaScript-style casing?

Want to be able to use the data in the response without having to fix the case all the time?

Let camelify do the work.

Cwmelify-recursive will **recursively** convert all the keys in the object to camelCase, so you can use those keys directly in your JavaScript (or JSON database) and not have to worry about converting things manually all the time.

The word `ID` will always be in uppercase as you'd expect.

## Before

```javascript
{
  api_version: "0.3.2",
  results: {
    page: 1,
    per_page: 30,
    id: 123456,
    banana_id: 123,
    total_pages: 1,
    total_count: 0,
    filings: []
  }
};
```

## After

```javascript
{
  apiVersion: "0.3.2",
  results: {
    page: 1,
    perPage: 30,
    ID: 123456,
    bananaID: 123,
    totalPages: 1,
    totalCount: 0,
    filings: []
  }
};
```

## Usage

Just:

```javascript
const camelify = require('camelify-recursive')
```

Then, to fix the object `someObject`

```javascript
someObject = camelify(someObject)
```


