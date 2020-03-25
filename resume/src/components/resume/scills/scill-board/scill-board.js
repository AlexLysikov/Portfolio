import React, { Component } from 'react';
import ScillRank from './scill-rank/scill-rank';
import scills from '../scills';
import './scills.scss';


export default class Scills extends Component {
    
    state = scills;
    
    render() {
        return (
            <section className="scills-board">

                <h2 className="scills-board__name">My scills</h2>

                <section className="group-of-scills">
                    <h3 className="group-of-scills__name">Technical scills:</h3>
                    <div className="group-of-scills__content">
                        {this.state.technical.forEach(() => {
                            <ScillRank 
                                scillName={scillName} 
                                skillLevel={scllLevel} />
                        })}
                    </div>
                </section>

                <section className="scills-board__group-of-scills">

                    <h3>Soft scills:</h3>

                <ScillRank />

                </section>

            </section>
        );
    };
};