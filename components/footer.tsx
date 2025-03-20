export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">Benjamin Otieno</h2>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/80">&copy; {currentYear} All Rights Reserved</p>
            <p className="text-white/60 text-sm mt-1">Full Stack Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

