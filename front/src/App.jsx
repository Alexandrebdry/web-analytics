import AuthProvider from "./providers/AuthProvider.jsx";
import Router from "./router/Router.jsx";
function App() {


  return (
    <AuthProvider>
        <Router></Router>
    </AuthProvider>
  )
}

export default App
