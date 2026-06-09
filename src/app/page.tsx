import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to India Tech Bulletin</h1>
        <p>The premier source for trending technology news, controversial tech updates, AI summits, and startup events globally and in India.</p>
      </section>

      <section id="latest">
        <div className="news-grid">
          {articles.map((article) => (
            <article key={article.id} className="news-card">
              <span className="news-date">{article.date}</span>
              <h2 className="news-title">{article.title}</h2>
              <p className="news-excerpt">{article.excerpt}</p>
              <a href={`/article/${article.id}`} className="read-more">Read Full Article</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
