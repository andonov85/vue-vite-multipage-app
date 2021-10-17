import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'kanban-app': resolve(__dirname, 'src/pages/kanban-app/index.html'),
        'timetracking-app': resolve(__dirname, 'src/pages/timetracking-app/index.html')
      }
    }
  }
})

// const root = resolve(__dirname, 'src');
// const outDir = resolve(__dirname, 'dist');

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     outDir,
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(root, 'index.html'),
//         'kanban-app': resolve(root, 'pages', 'kanban-app/index.html'),
//         'timetracking-app': resolve(root, 'pages', 'timetracking-app/index.html')
//       }
//     }
//   }
// })
