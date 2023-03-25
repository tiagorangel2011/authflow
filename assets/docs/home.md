# Authflow Documentation

## Introduction

Authflow is a simple and easy way to implement a login system on your website.

## How it works

1.  You redirect your user to our login flow.
2.  We load the "Continue with Google" button on our website.
3.  The user logs in and we receive their information.
4.  We redirect the information to an intermediary page on your website that stores the user's information in cookies.
    - Note: We return the information in the `<URL>?authflow_token=<TOKEN>` format. Make sure your URL includes "https://" or "http://".
5.  The intermediary page, likely after adding the data to some kind of storage, redirects the user to the "logged in" page.
6.  When you need to access the user's information, you retrieve the data you stored and decode the JWT token using the provided information.
    - Tip: We hightly recommend you using the <a href="https://www.npmjs.com/package/@authflow-js/verify" target="_blank">official NPM module</a> to parse and verify the JWT toke correctly. If you don't need to verify it, you can use <a href="https://gist.github.com/tiagorangel2011/8db4ee6b9ef07624a66719861455332a" target="_blank">this code in JS</a> to only decrypt it.

## Installation

Installing Authflow is easy. Simply add the following script to your website:

```html
<script
  src="https://jscdn.glitch.me/cdn/authflow.js"
  crossorigin="anonymous"
></script>
```

To initiate the login process, use the following code:

```javascript
authflow.login({
  app_name: "App name",
  redirect: "your_redirect_url",
});
```
