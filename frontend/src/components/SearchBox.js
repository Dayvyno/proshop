import React from 'react'
import {useSearchParams} from 'react-router-dom'

const SearchBox = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
    <label className='text-light'>search: </label>
    {' '}<input
      className='rounded'
      value={searchParams.get("search") || ""}
      placeholder='search products...'
      onChange={event => {
        let search = event.target.value;
        if (search) {
          setSearchParams({search});
        } else {
          setSearchParams({});
        }
      }}
      />
    </>
  )
}

export default SearchBox
