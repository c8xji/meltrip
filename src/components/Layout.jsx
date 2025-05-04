import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#111827] font-noto text-white">
      <Navbar />
      <main className="px-6 pt-24 max-w-screen-xl mx-auto">{children}</main>
    </div>
  )
}

export default Layout