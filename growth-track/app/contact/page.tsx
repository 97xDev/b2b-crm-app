export default function Contact() {
  return (
    <div className="px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg text-gray-400">
          Have questions? Fill out the form below and we&apos;ll get back to you
          as soon as possible.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-12 max-w-xl sm:mt-16"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-200"
            >
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="mt-2 w-full rounded-md bg-gray-700 px-3.5 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-lime-600"
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-200"
            >
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="mt-2 w-full rounded-md bg-gray-700 px-3.5 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-lime-600"
            />
          </div>
          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-200"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="mt-2 w-full rounded-md bg-gray-700 px-3.5 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-lime-600"
            />
          </div>
          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full rounded-md bg-gray-700 px-3.5 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-lime-600"
            />
          </div>
          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-gray-200"
            >
              Phone number
            </label>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              placeholder="123-456-7890"
              className="mt-2 w-full rounded-md bg-gray-700 px-3.5 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-lime-600"
            />
          </div>
          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-md bg-gray-700 px-3.5 py-2 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-lime-600 resize-none"
              placeholder="Write your message here..."
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-md bg-lime-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-lime-700 focus:ring-2 focus:ring-lime-600"
          >
            Let&apos;s Talk
          </button>
        </div>
      </form>
    </div>
  );
}
