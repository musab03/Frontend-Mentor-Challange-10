import bgPattern from './images/pattern-background-desktop.svg'
import hero from './images/illustration-hero.svg'
import musicIcon from './images/icon-music.svg'

function App() {
  return (
    <div className="relative">
      <img src={bgPattern} alt="" className="w-full" />
      <div className="bg-white flex flex-col w-full sm:max-w-xs md:max-w-sm  mx-auto rounded-xl overflow-hidden absolute top-20 left-1/2 transform -translate-x-1/2">
        <img src={hero} alt="" className="w-full" />
        <div className="p-4 sm:p-6">
          <h2 className="text-center font-bold text-xl sm:text-2xl text-blue-950">Order Summary</h2>
          <p className="text-center my-4 text-gray-500 font-medium sm:font-semibold">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>

          <div className="bg-[#f8f9fe] flex flex-col sm:flex-row items-center justify-between px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
            <div className="flex flex-row gap-x-4">
              <img src={musicIcon} alt="" className="w-12 h-12" />
              <div className="flex flex-col">
                <h2 className="font-bold text-blue-900 text-lg">Annual Plan</h2>
                <p className="text-gray-500 font-normal text-sm">$59.99/year</p>
              </div>
            </div>
            <div className="text-purple-800 font-semibold underline hover:cursor-pointer mt-3 sm:mt-0">Change</div>
          </div>

          <button className="bg-[#382ae1] hover:bg-[#766cf1] my-6 sm:my-8 px-4 sm:px-6 w-full py-2 text-white rounded-xl shadow-2xl shadow-[#382ae1]">
            Proceed to Payment
          </button>
          <button className="w-full text-gray-500 rounded-xl font-bold">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
