import Student from "./Student";

function App() {
  return (
    <>
    <Student name="Haider Ali" age="30" isStudent={true} />
    <Student name="Usman Khan" age={27} isStudent={false} />
    <Student />
    </>
  );
}

export default App
