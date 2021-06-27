import React from 'react';
import Window1 from './Window1.js';
import Window2 from './Window2.js';
import App from './App.js';
import Grid from '@material-ui/core/Grid';
import './style.css';

function MainWIndow() {
  return (
    <>
      <div className="main-container">
        <div className="upper-container" flex>
          <div className="left-container" item xs={6}>
            <Window1></Window1>
          </div>
          <div className="right-container" item xs={6}>
            <Window2></Window2>
          </div>
        </div>
        <Grid item xs={12}>
          <div class="bottom-container">
            <App></App>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default MainWIndow;
