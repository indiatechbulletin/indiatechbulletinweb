import { getArticleById, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-container">
      <header className="article-header">
        <span className="news-date">{article.date}</span>
        <h1>{article.title}</h1>
      </header>
      <div className="article-content">
        {article.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
