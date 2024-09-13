
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import Prepares from './components/Prepares/Prepares'
import Recipe from './components/Recipe/Recipe'


function App() {
  let [recipes, setRecipes] = useState([])

  const [cooking, setCooking] = useState([])

  const handleAddReCipe =(cook)=>{
    const newRecipes = [...recipes, cook]
    setRecipes(newRecipes)
  }

  const handleAddCooking =(cooks)=>{
    const newCooking = [...cooking, cooks]
    setCooking(newCooking)
  }
  return (
    <>
    <div className='w-[1250px] mx-auto py-6'>
    <Header></Header>
    <Banner></Banner>
    <Recipe></Recipe>
    <main className='flex my-6'>
      <Cooks
      handleAddReCipe={handleAddReCipe}
      ></Cooks>
      <Prepares
      recipes={recipes}
      cooking={cooking}
      handleAddCooking={handleAddCooking}
      ></Prepares>
    </main>
    </div>
    </>
  )
}

export default App
