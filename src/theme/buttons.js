import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const buttons = {
  '.btn': {
    padding: '.5rem 1rem',
    borderRadius: '.25rem',
    fontWeight: '600',
  },
  '.btn-blue': {
    backgroundColor: colors.blue[500],
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.blue[700],
    },
  },
  '.btn-red': {
    backgroundColor: colors.red[500],
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.red[700],
    },
  },
};

export default plugin(({ addComponents }) => {
  addComponents(buttons);
});
