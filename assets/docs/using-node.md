# Using node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side and is a popular choice for building web applications and APIs.

The easiest way to get started with Authflow in Node.js is by using the <a href="https://support.glitch.com/t/zarran-api-a-simple-api-on-glitch-that-was-written-partially-by-an-ai/58461?u=tiagorangel2011" target="_blank">"Zarran API"</a>, a feature-rich login API made by <a href="https://support.glitch.com/u/eris" target="_blank">@eris</a>. The Zarran API is available on Glitch, and you can remix it to create your own authentication and authorization server. The API is built using Express, which makes it easy to integrate with other node apps. 

You can also use the official <a href="https://www.npmjs.com/package/@authflow-js/verify" target="_blank">"Verify JWT" npm module</a> to verify your JWTs (btw, this is what _zarran api_ uses):

```bash
npm i @authflow-js/verify
```
```javascript
const authflow = require("@authflow-js/verify");

const token = "token"; // Put the token recieved from Authflow here

const payload = await authflow.verify(token);
console.log(payload);
```

The payload variable will contain the JSON object that is encoded in the JWT token. This object can include information about the user, including their name, email, etc.