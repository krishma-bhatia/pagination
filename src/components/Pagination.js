import React from 'react';

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    const totalPages = totalPosts/postsPerPage;
    for(let i=1;i<totalPages;i++)
    {
        pageNumbers[i-1] = i;
    }
    return (
        <nav>
            <ul className="pagination">
            {pageNumbers.map((pageNumber)=>{
                return(<li className="page-item"><a href="/#"className="page-link" onClick={()=>paginate(pageNumber)}>{pageNumber}</a></li>)
            })
             }
            </ul>          
        </nav>
    )
}
