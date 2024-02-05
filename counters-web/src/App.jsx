import './App.css'
import Navigation from './components/Navigation/Navigation'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/recipes`)
    .then(response => response.json())
    .then(data => setRecipes(data))
    .catch(err => console.error(err));
  }, [])

  return (
    <>
      <div className="text-gray-600 font-body">
        <div className="grid md:grid-cols-6">
          <Navigation />
          <main className="px-16 py-6 bg-gray-100 md:col-span-5">
            <div className="flex justify-center md:justify-end">
                <a className="transition ease-out duration-500 text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white" href="#">Log In</a>
                <a className="transition ease-out duration-500 text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white" href="#">Sign Up</a>
            </div>

            <Header />

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipies</h4>

                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
                    {/* cards go here */}
                    {recipes.map(recipe => {
                      return <Card key={recipe.recipeid} image={recipe.image} title={recipe.title} author={recipe.author} time={recipe.time}/>
                    })}
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
                <div className="mt-8">
                    {/* cards go here */}
                </div>

                <div className="flex justify-center">
                    <div className="transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 bg-secondary-100 text-secondary-200 btn hover:shadow-inner">Load More</div>
                </div>
            </div>
          </main>
        </div>
    </div>
    </>
  )
}

export default App
