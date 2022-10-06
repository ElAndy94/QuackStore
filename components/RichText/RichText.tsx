import Typography from './../Typography/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const RichText = ({ bodyCopy }: { bodyCopy: any }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (children: any) => (
        <Typography variant="p">{children}</Typography>
      ),
      [BLOCKS.UL_LIST]: (node: { content: any }) => <li>{node.content}</li>,
    },
  };
  return documentToReactComponents(bodyCopy.json, options);
};
export default RichText;
