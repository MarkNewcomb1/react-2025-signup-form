import "./App.css";
import SignUpForm from "./components/SignupForm";
import type { FC } from 'react';

const App: FC = () => {
  return (
    <div className="App">
      <h1 className="mb-4 text-4xl font-extrabold">Signup Form</h1>
      <SignUpForm />
    </div>
  );
}

export default App;
