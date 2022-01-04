import React from 'react'
import {Pagination} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({pages, page, isAdmin=false}) => {
  return (
    <div className='pagin'>
      {pages>1 && (
        <Pagination>
          {[...Array(pages).keys()].map(x=>(
            <LinkContainer key={x+1} to={isAdmin? `/admin/productlist/${x+1}`:`/page/${x+1}`}>
              <Pagination.Item active={x +1 === page}> {x+1} </Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      )}
    </div>
  )
}

export default Paginate
