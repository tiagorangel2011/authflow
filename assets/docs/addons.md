# Addons

Other ways to use the Authflow API

## Button API

The Button API allows you to implement a simple login button on your website. To use it, use the Button API instead of the normal API and create a `button` element.

```html
<!-- Start by using the AuthFlow element -->
<authflow
  data-app_name="App name"
  data-redirect_url="https://coolwebsite.org/redirect"
></authflow>
<!-- Install the button API before the closing </body> -->
<script
  src="https://jscdn.glitch.me/cdn/authflow.button.js"
  crossorigin="anonymous"
></script>
```

Note: If you use CORS, you will need to enable iframes from the origin `authflow.glitch.me`.

## Authflow instant

Authflow Instant makes it easy to add a login with Google button to your page. When a user clicks the button, a popup opens, the user selects their account, and the information is sent to your page via an iframe.

The information is handled in a callback, allowing you to process it in your own way.

With Authflow Instant, you can quickly and easily add a login with Google button to your page, providing a convenient way for users to log in.

```html
<!-- Add the instant button and adjust the callback -->
<authflow-instant data-callback="myCallback"></authflow-instant>
<!-- Add this to the closing </body> -->
<script src="https://jscdn.glitch.me/cdn/authflow.instant.js"></script>
```

```javascript
function myCallback(jwt) {
  // Do something with the JWT token
}
```

Note: If you use CORS, you will need to enable iframes from the origin `authflow.glitch.me`.

## Using Python

If you need to use Python, you can use the `webbrowser` library and `webbrowser.open(url)` to open the following URL: (<a href="https://authflow.glitch.me/flow?client=QXV0aEZsb3cgUHl0aG9uIExvZ2lu&callback=aHR0cHM6Ly9hdXRoZmxvdy5nbGl0Y2gubWUvcGFnZXMvcHl0aG9uLXV0aWwuaHRtbA%3D%3D&channel_id=cHl0aG9" target="_blank">run</a>)

```text
https://authflow.glitch.me/flow?client=QXV0aEZsb3cgUHl0aG9uIExvZ2lu&callback=aHR0cHM6Ly9hdXRoZmxvdy5nbGl0Y2gubWUvcGFnZXMvcHl0aG9uLXV0aWwuaHRtbA%3D%3D&channel_id=cHl0aG9
```
