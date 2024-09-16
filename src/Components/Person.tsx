import React from 'react'

interface Props{
    name: string;
}

const Person = ({name}:Props) => {
  return (
      <div>Name is {name}</div>
  )
}

export default Person