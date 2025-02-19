import "./App.css";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewThreadForm } from "./components/thread/NewThreadForm";
import { ThreadList } from "./components/thread/ThreadList";
import { Thread } from "./components/thread/Thread";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<NewThreadForm />} />
          <Route path="/threads/:id" element={<Thread />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
