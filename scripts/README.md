This scripts are responsible for:

1. mapping the existing database to a data model defined by `mapper.js`
```sh
npm run gen:data
```
2. generating the candidate images that will be downloaded to user's device
```sh
npm run gen:images
```
**NOTE:** App server must be up on port 3000 when images are being generated for static assets lookup.

Dependencies must be installed via `npm install`
