import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <section className="w-full">
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
                src="/images/polska-euro.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Polska odpada z turnieju!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Po dwóch porazkach, Polacy zeganja się z turniejem.
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
                src="/images/polska-holandia.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Przegrywamy z Holandią!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Po emocjonalnej końcówce, w której tracimy gola, kończymy mecz z 0 punktami.
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
                src="/images/euro2024.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Rozpoczynamy EURO 2024!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                W meczu otwarcia Niemcy podejmą zespół Szkocji.
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
                src="/images/pucharowa.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Juz niedlugo - faza finałowa EURO 2024</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Kończymy rozgrywki grupowe, które przyniosły nam wiele niespodzianek.
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
                src="/images/polska_start.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Polacy juz w drodze na ME 2024!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                W pierwszym meczu Polska reprezentacja zmierzy się z kadrą Holandii.
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
                src="/images/final.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Finał Ligi Mistrzów</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Czy Borussia Dortmund zaskoczy?
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
                src="/images/grosik.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Kamil Grosicki zegna się z reprezentacją!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Kamil Grosicki rozegrał ostatni mecz w kadrze narodowej! Tutaj znajdziesz wszystkie jego osiągnięcia.
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
                src="/images/debiut.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Debiutanci na EURO!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Euro 2024 to turniej w którym, poznamy wiele nowych twarzy. Przyglądamy się zawodnikom i ich karierom. Zobacz!
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
                src="/images/toni-kroos.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Toni Kroos odchodzi z Realu Madryt!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Wraz z finałem ligi mistrzów, niemiecki pomocnik ogłosił, ze zamierza opuścić stolicę Hiszpanii.
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
