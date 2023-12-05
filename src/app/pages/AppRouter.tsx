import { Route, Routes } from "react-router-dom"

export default function AppRouter() {
  return (
    <Routes>
      <Route index Component={() => <>Hello world!</>} />
      <Route path="/commanders" Component={() => <>Commanders</>} />
      <Route path="/card-choices" Component={() => <>Card choices</>} />
      <Route path="*" Component={() => <>404</>} />
    </Routes>
  )
}
