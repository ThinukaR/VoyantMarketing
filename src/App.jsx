import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <main className="relative">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      <Header />
      <Hero />
    </main>
  )
}

export default App
