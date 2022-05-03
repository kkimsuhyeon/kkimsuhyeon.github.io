rm -rf ./out
rm -rf ./node_modules

yarn install
rm -rf ./node_modules/.cache

yarn build
yarn export

touch ./out/.nojekyll

git add -f ./out
git checkout -b temp
git commit -m \"deploy\"

git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages

git checkout main

git branch -D gh-pages
git branch -D temp

