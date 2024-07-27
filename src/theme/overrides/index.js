import merge from 'lodash/merge';

 
import { alert } from './components/alert';
import { button } from './components/button';
import { progress } from './components/progress';
import { textField } from './components/textfield';
import { cssBaseline } from './components/css-baseline';
import { autocomplete } from './components/autocomplete';
import { loadingButton } from './components/loading-button';
import { defaultProps } from './default-props';
import { typography } from './components/typography';

// ----------------------------------------------------------------------

export function componentsOverrides(theme) {
  const components = merge(
    defaultProps(theme),
    alert(theme),
    button(theme),
 
    progress(theme),
    textField(theme),
    typography(theme),
 
    cssBaseline(theme),
    autocomplete(theme),
    loadingButton(theme)
  );

  return components;
}
