type MDXContentProps = {
  content: string;
};

export const MDXContent = ({ content }: MDXContentProps) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
