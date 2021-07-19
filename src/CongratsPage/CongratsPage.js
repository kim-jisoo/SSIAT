import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Banner from '../data/_images/congrats.png';

import './CongratsPage.css'
function CongratsPage() {
    return (
        <div className="congrats-container">
            <img src={Banner} className="congrats-banner" />
            <title className="congrats-title"> Congratulations! </title>
        </div>
    )
}

export { CongratsPage };