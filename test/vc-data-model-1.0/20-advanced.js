/*global describe, it*/
const config = require('../../config.json');
const chai = require('chai');
const {expect} = chai;
const util = require('./util');

// setup constants
const uriRegex = /\w+:(\/?\/?)[^\s]+/;
const iso8601Regex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/

// configure chai
const should = chai.should();
chai.use(require('chai-as-promised'));

describe('Advanced Documents', () => {
  const generatorOptions = {
    generator: config.generator,
    args: ""
  };

  // https://w3c.github.io/vc-data-model/#semantic-interoperability
  describe('Extensibility - Semantic Interoperability', () => {

    describe('JSON-based processor', () => {
      // TODO: https://github.com/w3c/vc-data-model/issues/371
      it.skip('MUST process the `@context` property; ensure credential `type` value exists', async () => {});
      it.skip('expected `type` values MUST be in expected order', async () => {});
      it.skip('expected order MUST be defined by human-readable extension specification', async () => {});
    });

    describe ('JSON-LD-based processor', () => {
      // TODO: currently, JSON-LD processors would not trigger this error; needs discussion
      it.skip('MUST produce an error when a JSON-LD context redefines any term in the active context.', async () => {});
    });
  });

  // https://w3c.github.io/vc-data-model/#data-schemas
  describe('Data Schemas', () => {
    it.skip('`credentialSchema` MUST provide one or more data schemas', async () => {
      // test that `credentialSchema` is either an array or an object
    });
    describe('each object within `credentialSchema`...', () => {
      // if there are multiple objects, loop these tests
      it.skip('MUST specify a `type` property with a valid value', async () => {
        // test for `type` property exitence
      });
      it.skip('value of `type` MUST be defined in the active context / term dictionary', async () => {
        // test for `type`'s value existence in the active context / term dictionary
      });
      it.skip('MUST specify an `id` property', async () => {
        // test for `id` property existence
      });
      it.skip('value of `id` MUST be a URI identifying a schema file', async () => {
        // test that `id`'s value is a valid URI
        // TODO: https://github.com/w3c/vc-data-model/issues/381
      });
    });
  });

  // https://w3c.github.io/vc-data-model/#refreshing
  describe('Refreshing', () => {
    it.skip('`refreshService` MUST provide one or more refresh services', async () => {
      // test that `refreshService` is either an array or an object
    });
    describe('each object within `refreshService`...', () => {
      // if there are multiple objects, loop these tests
      it.skip('MUST specify a `type` property with a valid value', async () => {
        // test for `type` property exitence
      });
      it.skip('value of `type` MUST be defined in the active context / term dictionary', async () => {
        // test for `type`'s value existence in the active context / term dictionary
      });
      // TODO: consider changing `serviceEndpoint` to `id`: https://github.com/w3c/vc-data-model/issues/380
      it.skip('MUST specify an `serviceEndpoint` property', async () => {
        // test for `serviceEndpoint` property existence
      });
      it.skip('value of `serviceEndpoint` MUST be a URL identifying a service endpoint', async () => {
        // test that `serviceEndpoint`'s value is a valid URL
        // TODO: https://github.com/w3c/vc-data-model/issues/381
        // (possibly) attempt to dereference the service endpoint to validate it's "locator-ness" (i.e. URL vs. URI)
      });
    });
  });
});
