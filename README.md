# JS Element Move

Use JavaScript to move the elements correctly.

- mousedown
- mouseup
- mousemove

[Mouse Events Tutorial](https://www.tnado.com/blog/javascript-move-div-with-the-mouse/)

For touch devices use the touch events.

- touchstart
- touchend
- touchmove

First check if you are in a touch device. So you can act accordingly and initiate what is needed.

[Detect touch](https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript)

```js
function is_touch_device() {
    return 'ontouchstart' in window;
}
```

But the touch will not work on all devices with this calculation, there comes from me separately still a section here purely soon.

# Contribute

Please [file an issue](https://github.com/prod3v3loper/js-element-move/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Built with

[NetBeans](https://netbeans.org/) - NetBeans

[VSC](https://code.visualstudio.com/) - Visual Studio Code

# Authors

**Samet Tarim** - *All works*

# License

[MIT](https://github.com/prod3v3loper/js-element-move/blob/master/LICENSE) - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)