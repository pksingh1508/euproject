import { ArticleError } from "@/components/common/ArticleView";

export default function BlogPostNotFound() {
  return (
    <ArticleError
      title="Blog Post Not Found"
      message="The requested blog post could not be found."
      backHref="/blog"
      backLabel="Back to Blog"
    />
  );
}
