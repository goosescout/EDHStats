import { Route, Routes } from "react-router-dom"

export default function AppRouter() {
  return (
    <Routes>
      <Route index Component={() => <>Hello world!</>} />
      <Route path="/test" Component={() => <>Test</>} />
    </Routes>
  )
}
