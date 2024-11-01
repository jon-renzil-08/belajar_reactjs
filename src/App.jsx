

const Button = (props) => {
  const { children = "Default Button", variant = "bg-orange-600" } = props;
  return (
    <button className={`h-10 px-6 ${variant} text-white rounded-md`}>
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="bg-lime-500 min-h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <Button variant="bg-orange-600">Login</Button>
        <Button variant="bg-blue-600">Logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
