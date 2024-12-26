const Header = () => {
  return (
      <header className="flex justify-between w-[300px] md:w-[575px] text-[40px] md:text-[56px] text-blue-700 text-center pb-4">
            <div className="relative group">
            <a
              href="https://simbad.cds.unistra.fr/simbad/"
              className="hover:animate-pulse "
              target="_blank"
              rel="noopener noreferrer"
            >
              SIMBAD
          </a>
          <div className="absolute hidden transition-opacity duration-300 transform -translate-x-1 top-0 group-hover:block px-2 py-1 text-black bg-gray-50/10 text-[8px] md:text-[14px]">Go to SIMBAD website</div> 
        </div>
        <h1>JSON ADAPTER</h1>
      </header>
  );
};
export default Header;
