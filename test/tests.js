const camelify = require("../index.js"),
  assert = require("assert");

var log = console.log.bind(console);

suite("Camelifies recursively", function() {
  test("Camelifies an API output correctly", function() {
    var original = {
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

    var output = camelify(original);

    var expected = {
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

    assert.deepEqual(output, expected);
  });
});
