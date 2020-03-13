import React, { Component } from 'react';
import ScillRank from './scill-rank/scill-rank';
import scills from '../scills';
import './scills.scss';


export default class Scills extends Component {
    state = scills;
    
    render() {
        return (
            <div className="scills-board">

                <h2>My scills</h2>

                <section className="scills-board__group-of-scills">
                    <h3>Technical scills:</h3>

                <ScillRank 
                    scillName={} />

                </section>

                <section className="scills-board__group-of-scills">

                    <h3>Soft scills:</h3>

                <ScillRank />

                </section>

            </div>
        );
    };
};