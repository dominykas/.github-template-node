'use strict';

const GithubTemplateNode = require('..');


const { describe, it } = exports.lab = require('@hapi/lab').script();
const { expect } = require('@hapi/code');

describe('.github-template-node', () => {

    it('is not implemented', () => {

        expect(GithubTemplateNode).to.throw('Not implemented');
    });
});
