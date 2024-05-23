import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <section className="w-full">
      <header className="bg-white text-zinc-900 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">News Site</div>
            <div className="space-x-4">
              <Link className="text-zinc-900 hover:text-zinc-700" to="#">
                Home
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" to="/game">
                Bingo-Game
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" to="/vote">
                Vote
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" to="#">
                Premier League
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" to="#">
                Contact
              </Link>
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
                src="/images/robertlewandowski.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">Lewandowski zostaje w Barcelonie!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Polak zamierza walczyć o mistrzostwo w nadchodzącym sezonie.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Rozgrywki Europejskie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Rozgrywki Europejskie Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Rozgrywki Europejskie Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Rozgrywki Europejskie Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Rozgrywki Europejskie Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Rozgrywki Europejskie Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Rozgrywki Europejskie Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nadchodzące wydarzenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Nadchodzące wydarzenia Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Nadchodzące wydarzenia Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Nadchodzące wydarzenia Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Nadchodzące wydarzenia Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Nadchodzące wydarzenia Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Nadchodzące wydarzenia Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
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
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
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
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
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
              <Link className="text-blue-500 hover:text-blue-700 mt-4" to="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
