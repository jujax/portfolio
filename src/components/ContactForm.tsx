import React from "react";

export default function ContactForm() {
  return (
    <div className="overflow-x-auto w-full my-8 ">
      <form
        name="contact"
        method="post"
        className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg p-6 border border-gray-300 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="py-3 px-4 mb-6 rounded-t-lg -mx-6 -mt-6">
          <h3 className="text-xl font-semibold">Contact form</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-neutral-400 focus:border-gray-600 dark:focus:border-neutral-400 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-2"
            >
              Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-neutral-400 focus:border-gray-600 dark:focus:border-neutral-400 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-neutral-400 focus:border-gray-600 dark:focus:border-neutral-400 transition-colors"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="border border-gray-300 dark:border-neutral-700 rounded-[10px] px-6 py-3 text-base font-medium transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:ring-2 focus:ring-gray-600 dark:focus:ring-neutral-400 focus:border-gray-600 dark:focus:border-neutral-400"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
