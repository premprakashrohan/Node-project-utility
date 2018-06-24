# Node-project-utility

1. npm init -y
2. npm i -g typesript
 **compile typescript**
   tsc --sourceMap true app.ts
3. starting python server
    python -m SimpleHTTPServer 8080
4. Code linting for type script in visual studio
    npm i -g tslint
    <https://palantir.github.io/tslint/>
5. Use Grunt
   **Several packages available for Grunt and typeScript**
   a.Linting
   b.Transpilation
    npm install -g grunt-cli
    npm i --save-dev grunt grunt-ts grunt-tslint tslint typescript
6. Jasmine
    **Jasmine is a behaviorial design framework use in unit test**
    Commands:
    npm install jasmine
    **Work using suites and specs**
    jasmine init //to create jasmin.json
    after create spec test file
    run jasmine