const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
        'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case']],
        'body-max-line-length': [0, 'always', ['Infinity']],
        'footer-max-line-length': [0, 'always', ['Infinity']],
    },
};

// eslint-disable-next-line no-undef
module.exports = Configuration;
