import React from 'react'
import Footer from './Footer/Footer.jsx';
import Blog from './MainPage/Blog/Blog.jsx';
import HeaderMain from './MainPage/headerMain/headerMain.jsx';
import SearchBar from './MainPage/SearchBar/SearchBar.jsx';
import TopCategorie from './MainPage/TopCategorie/TopCategorie.jsx';
import WordingMain from './MainPage/WordingMain/WordingMain.jsx';
function MainPage() {
  return (
    <div>
    <HeaderMain />
    <SearchBar />   
    <TopCategorie />
    <WordingMain />
    <Blog />
    <Footer />
    </div>
    
  )
}

export default MainPage