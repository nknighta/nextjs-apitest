cd ..;
npx tsc -p tsconfig.server.json && npx cross-env NODE_ENV=production PORT=3000 node dist/index.js;