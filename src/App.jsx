import Button from "./components/Elements/Button";
function App() {
  return (
    <div className="bg-lime-500 min-h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <Button color="bg-red-500" >Login</Button>
        <Button color="bg-blue-500" >Register</Button>
        <Button color="bg-green-500" >Logout</Button>
      </div>
    </div>
  );
}

export default App;
