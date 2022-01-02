import React from 'react'
import {useSearchParams} from 'react-router-dom'
import {Form } from 'react-bootstrap'

const SearchBox = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
    <Form.Group className="mb-3 rounded" controlId="formBasicPassword">
      <Form.Label>search: {' '}</Form.Label>
      <Form.Control type="search" placeholder="search products..." 
        value = {searchParams.get("search") || ""}
      onChange = { event=>{
        let search = event.target.value
        if (search){
          setSearchParams({search})
        } else{
          setSearchParams({})
        }
      }

      }
      />
    </Form.Group>
    </>
  )
}

export default SearchBox
