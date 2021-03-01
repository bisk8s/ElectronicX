import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

const MaterialTheme = createMuiTheme({
  palette: createPalette({
    type: 'light',
  }),
});

export default MaterialTheme;
