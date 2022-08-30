import React from 'react'
import TopHeader from './TopHeader'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Index = () => {
  return (
    <header class="pb-md-4 pb-0">
        <TopHeader/>
        <SearchBar/>
        <NavBar/>
    </header>
  )
}

export default Index