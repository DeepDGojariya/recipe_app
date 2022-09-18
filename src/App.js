// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "514c9f07"
  const APP_KEY = "1d8c8a38bccaa6cebae923f976c15872"
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query,setQuery] = useState('')
  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getRecipes = async () => {
    const response = await fetch(exampleRequest)
    const data = await response.json()
    setRecipes(data.hits)
  }

  useEffect(() => {
    getRecipes()
    // eslint-disable-next-line
  }, [query])

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={formSubmit}>
        <input type="text" className="search-bar" value={search} onChange={searchHandler} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes" style={{ margin: "10px" }}>
        {recipes.length <= 0 && <p>Nothing to show</p>}
        {recipes.map((recipe, index) => (
          <Recipe key={index}
           title={recipe.recipe.label}
           calories={recipe.recipe.calories} 
           image={recipe.recipe.image}
           ingredients = {recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default App;
