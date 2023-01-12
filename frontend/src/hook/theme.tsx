import { useContext } from 'react';
import { ThemeContext, ThemeContextData } from '../context/theme';

export default function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
