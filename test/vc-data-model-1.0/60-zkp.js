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

// https://w3c.github.io/vc-data-model/#zero-knowledge-proofs
describe('Zero-Knowledge Proofs (optional)', () => {
  const generatorOptions = {
    generator: config.generator,
    args: ""
  };

  describe('A verifiable credential...', () => {
    it.skip('MUST contain a credential definition', async () => {
      // test for one or more valid `credentialSchema`
    });
    it.skip('MUST contain a proof', async () => {
      // test for one or more valid `proof`
    });
  });
  describe('A verifiable presentation...', () => {
    // TODO: these 3 tests are "fuzzy"; non-data-model tests--the 3 following have specifics
    it.skip('All derived verifiable credentials MUST contain a reference to the credential definition used to generate the derived proof.', async () => {

    });
    it.skip('All derived proofs in verifiable credentials MUST NOT leak information that would enable the verifier to correlate the holder presenting the credential.', async () => {

    });
    it.skip('MUST contain a proof enabling verification that all credentials were issued by the same holder (without PII leakage', async () => {
      /* "The verifiable presentation MUST contain a proof enabling the
       * verifier to ascertain that all verifiable credentials in the
       * verifiable presentation were issued to the same holder without
       * leaking personally identifiable information that the holder did not
       * intend to share." */
    });
    // TODO: these 3 tests MAY be more testable--but may not test the "spirit" of the above requirements...
    it.skip('MUST be a valid `VerifiablePresentation`', async () => {
      // test `type` contains `VerifiablePresentation`
    });
    it.skip('MUST have a `verifiableCredential` member', async () => {
      // test `verifiableCredential` exists (and is valid? or is that an additional test?)
    });
    it.skip('the `verifiableCredential` MUST have a `proof` member', async () => {
      // test that `proof` exists on the embedded credential (and that it's valid?)
    });
    it.skip('MUST have a direct `proof` member (on the presenation)', async() => {
      // test that `proof` exists on the top-leve presentation (and that it's valid?)
    });
  });
});
