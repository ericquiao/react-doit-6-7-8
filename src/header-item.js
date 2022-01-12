export const HeaderItem = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="bg-pink-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <nav className="flex items-center justify-between gap-3">
            <div>
              <a href="/" className="text-2xl">
                Simple website
              </a>
            </div>
            <nav className="flex justify-end items-center flex-wrap gap-2">
              <a href="/faq" className="px-2 hover:text-gray-200">
                FAQ
              </a>
              <a href="/terms-of-use" className="px-2 hover:text-gray-200">
                Terms of use
              </a>
              <a href="/about-us" className="px-2 hover:text-gray-200">
                About Us
              </a>
              <a href="/pricing" className="px-2 hover:text-gray-200">
                Pricing
              </a>
            </nav>
          </nav>
        </div>
      </div>
      <div className="text-gray-500">
        <div className="max-w-6xl mx-auto px-4 py-2 text-sm">
          <nav className="flex justify-end items-center flex-wrap gap-5">
            <a href="/tax-calculator" className="hover:text-pink-800">
              Tax Calculator
            </a>
            <a href="/bill-splitter" className="hover:text-pink-800">
              Bill Splitter
            </a>
            <a href="/tax-calculator-v2" className="hover:text-pink-800">
              Tax Calculator v2
            </a>
            <a href="/bill-splitter-v2" className="hover:text-pink-800">
              Bill Splitter v2
            </a>
            <a href="/tax-calculator-broken" className="hover:text-pink-800">
              Broken Tax Calculator
            </a>
            <a href="/pokemons" className="hover:text-pink-800">
              Pokemons
            </a>
            <a href="/careers" className="hover:text-pink-800">
              Careers
            </a>
            <a href="/marketplace" className="hover:text-pink-800">
              Marketplace
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
