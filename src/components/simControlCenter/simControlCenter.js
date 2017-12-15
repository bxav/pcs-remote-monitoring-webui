// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';
import lang from '../../common/lang';
import PcsBtn from '../shared/pcsBtn/pcsBtn';
import simControlCenter from '../../assets/icons/SIMCenter.svg';

import './simControlCenter.css';

class SimControlCenter extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false };
    }

    showToolTip = () => this.setState({ isShow: true });

    hideToolTip = () => this.setState({ isShow: false });

    render() {
        return (
            <div className="sim-control-btn-container">
                <PcsBtn
                    svg={simControlCenter}
                    onMouseOver={this.showToolTip}
                    onMouseOut={this.hideToolTip}
                    value={lang.SIM_CONTROL_CENTER} />
                <div className={`sim-tooltip ${this.state.isShow ? 'show' : ''}`}>
                    {lang.COMING_SOON}
                </div>
            </div>
        );
    }
}

export default SimControlCenter;
