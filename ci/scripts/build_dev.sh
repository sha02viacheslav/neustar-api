WORKING_DIR=$(pwd)
OUTPUT_DIR="${WORKING_DIR}/build/"
cd neustar-order-insights-api-dev
npm install --non-interactive
npm run lint:fix
npm run build
{ rm package.json && awk -v token="node main.js ${VAULT_TOKEN} ${VAULT_PATH}-dev" '{gsub("node main.js",token, $0); print}' > package.json; } < package.json
cp ./package.json ./dist
cp ./package-lock.json ./dist
cp ./manifest.yml ./dist
cp -R ./dist/. "${OUTPUT_DIR}"
cd "${OUTPUT_DIR}"