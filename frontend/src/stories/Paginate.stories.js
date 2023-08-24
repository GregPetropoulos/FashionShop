import Paginate from '../../src/components/Paginate';
import { withActions } from '@storybook/addon-actions/decorator';
// TODO mock the keyword result to a linked page
// admin false,if keyword is true the `/search/${keyword}/page/${x + 1}`
//else do this`/page/${x + 1}`
//if admin true then `/admin/productlist/${x + 1}`
export default {
  title: 'Components/Paginate',
  component: Paginate,
  tags: ['autodocs'],
  args: { page: 1, pages: 2 },
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
  decorators: [withActions],
};

export const Default = (args) => <Paginate {...args} />;
