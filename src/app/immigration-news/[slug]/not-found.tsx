import { ArticleError } from "@/components/common/ArticleView";

export default function NewsArticleNotFound() {
  return (
    <ArticleError
      title="Article Not Found"
      message="The requested article could not be found."
      backHref="/immigration-news"
      backLabel="Back to News"
    />
  );
}
