import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Pager from '../../src/components/pager';

describe('Pager component', function () {

    function renderPager(totalPages, pageNumber) {
        const component = ReactTestUtils.renderIntoDocument(
            (<Pager loadPage={() => { }}
                    totalPages={totalPages}
                    pageNumber={pageNumber}/>)
        );
        return component;
    }
    describe('display current page', function () {
        function assertCurrentPage(component, text) {
            const currentPage = ReactTestUtils.findRenderedDOMComponentWithClass(component, "current-page");
            currentPage.textContent.should.equal(text);
        }

        describe('for total pages of 3', function() {
            it('should display 1,2,3 for page 0,1,2"', function () {
                [0, 1, 2].forEach(x => {
                    const component = renderPager(3, x);
                    assertCurrentPage(component, String(x+1));
                });
            });
        });

        describe('for total pages of 6', function() {
            it('should display 1,2,3,4,5,6 for page 0,1,2,3,4,5"', function () {
                [0, 1, 2, 3, 4, 5].forEach(x => {
                    const component = renderPager(6, x);
                    assertCurrentPage(component, String(x+1));
                });
            });
        });
    });

    describe('display all page numbers', function() {
        it('should display [1,2,3] for total page 3 and page number 0', function () {
            const component = renderPager(3, 0);
            const pagers = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "li");
            pagers.length.should.equal(7);
        });
    });
});
