import React from 'react'

const contact = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-6 h-full">
      <div className="max-w-2xl w-full text-center">
        <section className="mb-6">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <div className="bg-white shadow-md rounded-lg p-6 shadow-black">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-green-500 transition w-full"
              >
                Drop Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default contact