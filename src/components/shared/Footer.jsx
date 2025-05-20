

const Footer = () => {
  return (
    <footer className="bg-neutral">
      <footer className=" container mx-auto py-10">
        <div className="flex flex-col justify-center items-center border-b-2 pb-5 mb-8">
          <h2 className="font-bold text-3xl">Gadget Heaven</h2>
          <p className="text-gray-400 py-2">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="md:flex justify-between gap-8">
          <nav className="flex-1">
            <h6 className="text-white text-2xl font-bold">About Us</h6>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav className="flex-1">
            <h6 className="text-white text-2xl font-bold">Quick Links</h6>
            <li className="text-gray-400">Home</li>
            <li className="text-gray-400">Contact</li>
            <li className="text-gray-400">About</li>
            <li className="text-gray-400">Services</li>
          </nav>
          <nav className="flex-1">
            <h6 className="text-white text-2xl font-bold">Subscribs</h6>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-xl py-2 px-2  max-w-xs mt-2"
            />
            <input
              className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-2 rounded-r-xl"
              type="button"
              value="Subscribe"
            />
          </nav>
        </div>
      </footer>
    </footer>
  )
}

export default Footer