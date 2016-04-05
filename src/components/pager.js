import React, {Component} from 'react';


export default class Pager extends Component {
    renderPagerText(loadPage, totalPages, pageNumber) {
        const pagersCount = 6;
        const pagers = [];
        for (let x = 1; x < pagersCount + 1; x++) {
            let text;
            if (pageNumber < 3) {
                text = x;
            } else if (pageNumber > totalPages - 4) {
                text = totalPages - 6 + x
            } else {
                text = pageNumber + x - 2
            }
            pagers.push(text);
        }
        return pagers
            .filter(x => x > 0 && x <= totalPages)
            .map((p, i) => {
                return (<li key={i} className={pageNumber === p - 1 ? 'current-page' : ''}
                            onClick={loadPage.bind(null, p - 1)}>{p}</li>)

            });
    }

    render() {
        const {loadPage, totalPages, pageNumber} = this.props;

        return (
            <div className="pager">
                <ul>
                    <li key="fast-backward"><i className="fa fa-fast-backward" onClick={loadPage.bind(null, 0)}/></li>
                    <li key="backward"><i className="fa fa-backward" onClick={loadPage.bind(null, pageNumber - 1)}/></li>
                    {this.renderPagerText(loadPage, totalPages, pageNumber)}
                    <li key="forward"><i className="fa fa-forward" onClick={loadPage.bind(null, pageNumber + 1)}/></li>
                    <li key="fast-forward"><i className="fa fa-fast-forward" onClick={loadPage.bind(null, totalPages - 1)}/></li>
                </ul>
            </div>

        );
    }
}