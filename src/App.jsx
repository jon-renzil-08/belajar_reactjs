import React from "react"

class Button extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold bg-black text-white rounded-md">Buy Now</button>
    )
  }
}


function App() {
  return (
    <div className="bg-lime-200 min-h-screen flex items-center justify-center">
      <div className="flex gap-4">
        <Button  />
        <Button />
        <Button />
      </div>
    </div>
   
  )
}

export default App