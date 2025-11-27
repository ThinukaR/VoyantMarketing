import Hero from "./components/Hero"

function App() {
  return (
    <main className="relative">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      <Hero />
    </main>
  )
}

export default App
