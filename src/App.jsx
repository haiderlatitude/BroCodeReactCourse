import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} />
      <UserGreeting />
    </>
  );
}

export default App;
