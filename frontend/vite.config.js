import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Carregar as variáveis de ambiente
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'process.env': {
        VITE_API_URL: mode === 'production' ? env.VITE_API_URL_PRODUCTION : env.VITE_API_URL_DEVELOPMENT
      }
    }
  };
});



