const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold tracking-wide">墨爾本之旅</div>
        <div className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
          <a href="/" className="hover:text-yellow-400">首頁</a>
          <a href="/Info" className="hover:text-yellow-400">旅遊資訊</a>
          <a href="/trips" className="hover:text-yellow-400">行程列表</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
