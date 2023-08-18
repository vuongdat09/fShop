const Header = () => {
  return (
    <div>
      {" "}
      <nav className="flex items-center justify-between p-4 bg-blue-500">
        <div>
          <h1 className="text-xl font-semibold text-white">SALUD 360</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Bienvenido</span>
          <i className="text-2xl text-white fas fa-user-circle"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
