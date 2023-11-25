
const Header = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 bg-ryuhow-blue w-full z-50">
        <div className="p-1 flex items-center">
          <img src="art.png" alt="" className="w-14 block" />
          <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-white font-bold w-full"></h1>
        </div>
      </div>
    </header>
  )
}

export default Header;