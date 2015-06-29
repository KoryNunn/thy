# Thy

Allows for instance-based data storage of thy data

# What

`thy` is a tiny module for storing private data against object or function instances.

Each instance of `thy` encapsulates its own set of data per instance,
meaning you could, for example, create a `thy` for an object factory,
and only code with access to that `thy` will be able to get 'private'
information about factory instances.

# Usage

var thy = require('thy')();

var someObject = {};

// Set someObject's hidden 'things' to 'stuff'
thy(someObject).things = 'stuff';

// Both the key 'things' and it's value are only accessable via this instance of thy,
// And only if you have access to someObject