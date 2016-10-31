## aframe-viewable-component

Restrict [A-Frame](https://aframe.io) camera rotation to a maximum horizontal/vertical number of degrees.

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|    maxyaw      |     The maximum horizontal distance the camera can rotate (in degrees)        |       null        |
|    maxpitch      |     The maximum vertical distance the camera can rotate (in degrees)        |       null        |

Camera rotation is reflected across the pivot point. E.G. for maxyaw=180, the camera can rotate to the left 180° and to the right 180°.

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.3.0/aframe.min.js"></script>
  <script src="https://rawgit.com//master/dist/aframe-viewable-component.min.js"></script>
</head>

<body>
    <a-scene>
      <a-sphere position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-box position="-1 0.5 1" rotation="0 45 0" width="1" height="1" depth="1"  color="#4CC3D9"></a-box>
      <a-cylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
      <a-entity position="0 -0.5 3.8">
        <!-- Limit viewable area to +/-20° vertically; +/-70° horizontally -->
        <a-camera look-controls viewable="maxyaw:20;maxpitch:70"></a-camera>
      </a-entity>
    </a-scene>
</body>



```

#### npm

Not currently released as a node package.
