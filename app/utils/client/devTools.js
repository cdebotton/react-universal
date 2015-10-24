/* @flow */

import React from 'react';
import { render } from 'react-dom';

import {
  DevTools,
  DebugPanel,
  LogMonitor,
} from 'redux-devtools/lib/react';


export function createDevToolsWindow(store: Function): void {
  const win = window.open(
    null,
    'redux-devtools',
    'menubar=no,location=no,resizable=yes,scrollbars=no,height=960,width=480'
  );

  win.location.reload();

  setTimeout(() => {
    win.document.write('<div id="react-devtools-root"></div>');

    render(
      <DebugPanel
        top
        right
        bottom
        left
        key="debugPanel" >
        <DevTools
          store={store}
          monitor={LogMonitor} />
      </DebugPanel>
      , win.document.getElementById('react-devtools-root'));
  }, 10);
}
