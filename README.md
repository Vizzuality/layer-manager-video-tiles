This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Layer Manager Video Tiles
Prototype for visualizing video-tiles

The main thing you need to understand is that we are using a fork from mapbox that implements a new source called 'video-tiled' and a video specific layer manager

```
"vizzuality-mapbox-gl": "^2.0.0"
"layer-manager": "^3.0.0-video",
```

Mapbox that implements new source
- https://www.npmjs.com/package/vizzuality-mapbox-gl
- https://github.com/mbarrenechea/mapbox-gl-js/blob/master/src/source/video_tile_source.js

Layer manager that implements video tiles
- https://www.npmjs.com/package/layer-manager/v/3.0.0-video
- https://github.com/Vizzuality/layer-manager/blob/feature/video/src/plugins/plugin-mapbox-gl/video-layer-mapbox-gl.js


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy` Deployment

It will deploy it to GH pages
