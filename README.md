# nestjs-lambda-template

NestJS based template for API lambdas. (suited for CloudpayAPI refactoring)

# Usage

1. update package.json name, description, urls
2. update dependencies
3. update serverless.yaml 'service' field
4. run husky install before first commit to enable it's functionality

## Packaging the Functions

First install the build dependencies

```shell
    npm install
```

If you encounter issues with accessing any of the package libraries:

-   acquire PAT from github (with at least packages:read access)
-   edit your ~/.npmrc file and add in the following lines with your token (from above):
    ```
    @streamamg:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=<add-token-from-above-here>
    ```
    Now simply run the package command

```shell
    npm run package
```

The packaged functions can be found in the .serverless folder

## Deployment

GitHub Actions perform the build and publish of the release versions to S3.
