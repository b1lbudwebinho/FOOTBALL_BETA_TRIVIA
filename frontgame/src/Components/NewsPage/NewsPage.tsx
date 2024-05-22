import { NavLink } from "react-router-dom";

export default function NewsPage() {
  return (
    <section className="w-full">
      <header className="bg-white text-zinc-900 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">News Site</div>
            <div className="space-x-4">
              <NavLink className="text-zinc-900 hover:text-zinc-700" to="#">
                Home
              </NavLink>
              <NavLink className="text-zinc-900 hover:text-zinc-700" to="#">
                Politics
              </NavLink>
              <NavLink className="text-zinc-900 hover:text-zinc-700" to="#">
                Business
              </NavLink>
              <NavLink className="text-zinc-900 hover:text-zinc-700" to="#">
                Tech
              </NavLink>
              <NavLink className="text-zinc-900 hover:text-zinc-700" to="#">
                Culture
              </NavLink>
              <NavLink className="text-zinc-900 hover:text-zinc-700" to="#">
                Sports
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                alt="Top Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">Top Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the top story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Politics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Business Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Business Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Business Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Tech Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Tech Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the tech story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Tech Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Tech Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the tech story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Tech Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Tech Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the tech story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Culture Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Culture Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Culture Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Culture Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Culture Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Culture Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Sports Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Sports Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the sports story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Sports Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Sports Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the sports story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
            <div>
              <img
                alt="Sports Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Sports Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the sports story. Click the link to read more.
              </p>
              <NavLink className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}