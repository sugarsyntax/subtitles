import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './App';
import * as serviceWorker from './serviceWorker';
import office from './assets/office.mp4'
import cap from './assets/my_captions.vtt'

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: office,
    type: 'video/mp4'
  }],
  track: [{
    kind: 'captions',
    src: cap,
    srclang: 'en',
    label: 'english'
  }],
  mode: 'showing'
}

ReactDOM.render(
  <React.StrictMode>
    <VideoPlayer {...videoJsOptions}
      width="720"
      height="600"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
