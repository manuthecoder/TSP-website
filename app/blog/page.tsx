const articles = [
  {
    name: "Article #1",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    name: "Article #3",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    name: "Article #3",
    author: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto mb-10">
      <div className="text-center">
        <h1 className="font-heading heading text-4xl text-center mt-4">Blog</h1>
        <div className="border border-black w-20 mx-auto my-2 w-full max-w-lg flex mb-10 mt-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-0"
          />
          <button className="w-10 flex items-center hover:bg-gray-100 justify-center border-l border-black">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {/* Spotlight */}
        <div className="col-span-3">
          <h2 className="blog-category">Spotlight</h2>
          <div className="box h-96"></div>
          <h1 className="heading font-heading text-4xl mt-3 mb-2">
            {articles[0].name}
          </h1>
          <h2>{articles[0].description.substring(0, 300)}...</h2>
        </div>

        {/* Recent events */}
        <div className="col-span-2">
          <h2 className="blog-category">Recent events</h2>
          {articles.map((article) => (
            <div className="mb-4 flex gap-4">
              <div className="box h-36 w-36 shrink-0"></div>
              <div className="w-full">
                <h2 className="heading font-heading text-2xl my-1">
                  {article.name}
                </h2>
                <h2 className="text-lg text-gray-900">by {article.author}</h2>
                <h3 className="text-gray-800">
                  {articles[0].description.substring(0, 100)}...
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
