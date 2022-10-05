import Typography from './../Typography/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import { useState, useEffect, ReactNode } from 'react';

const MarkdownRichText = ({ bodyCopy }: any) => {
  const [document, setDocument] = useState<Document | undefined>(undefined);

  useEffect(() => {
    const richTextFromMarkdownAsync = async () => {
      const data = await richTextFromMarkdown(bodyCopy);
      // @ts-ignore
      setDocument(data);
    };
    richTextFromMarkdownAsync();
  }, [bodyCopy]);

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (children: ReactNode) => (
        <Typography variant="h2">{children}</Typography>
      ),
      [BLOCKS.HEADING_3]: (children: ReactNode) => (
        <Typography variant="h3">{children}</Typography>
      ),
      [BLOCKS.HEADING_4]: (children: ReactNode) => (
        <Typography variant="h4">{children}</Typography>
      ),
      [BLOCKS.HEADING_5]: (children: ReactNode) => (
        <Typography variant="h5">{children}</Typography>
      ),
      [BLOCKS.HEADING_6]: (children: ReactNode) => (
        <Typography variant="h6">{children}</Typography>
      ),
      [BLOCKS.PARAGRAPH]: (children: ReactNode) => (
        <Typography variant="p">{children}</Typography>
      ),
      [BLOCKS.UL_LIST]: (node: { content: ReactNode }) => <li>{node.content}</li>,
    },
  };

  if (!document) return null;
  //@ts-ignore
  return documentToReactComponents(document, options);
};
export default MarkdownRichText;
