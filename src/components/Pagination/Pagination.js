import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postPerPage, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <UnorderedList className="pagination">
                {pageNumbers.map((number) => {
                    return (
                        <ListItems key={number} className="page-item">
                            <a href="!#" className="page-link">
                                {number}
                            </a>
                        </ListItems>
                    );
                })}
            </UnorderedList>
        </div>
    );
};

export default Pagination;

const UnorderedList = styled.ul`
    padding: 0 !important;
    font-size: 2rem;
`;

const ListItems = styled.li`
    margin: 0 !important;
    padding: 0 !important;

    > a {
        background: #181818;
        color: #fff;
    }

    > a:hover {
        background: #000;
        color: #fff;
    }
`;
