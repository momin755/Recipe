
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

  const [time, setTime] = useState(0)

  const [caloriesCount, setCaloriesCount] = useState(0)

  const handleAddReCipe =(cook)=>{
    const newRecipes = [...recipes, cook]
    setRecipes(newRecipes)
  }

  const handleAddCooking =(id, cooks, fullTime, caloriesFull)=>{

    // Add Cooking
    const newCooking = [...cooking, cooks]
    setCooking(newCooking)

    // Add and Remove Before Cooking
    const clickPreparing = recipes.filter(recipe => recipe.id !== id)
    setRecipes(clickPreparing)

    // Total Time Functionality
    const totalTime = (parseFloat(fullTime) + time)
    setTime(totalTime)

    // Total Calories Functionality

    const totalCalories = (parseFloat(caloriesFull) + caloriesCount)
    setCaloriesCount(totalCalories)
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
      time={time}
      caloriesCount={caloriesCount}
      ></Prepares>
    </main>
    </div>
    </>
  )
}

export default App
