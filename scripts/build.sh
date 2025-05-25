npm run build

PACKAGE=__package

if [ -d $PACKAGE ]; then
    rm -rf $PACKAGE
fi

mkdir $PACKAGE

cp -r .next $PACKAGE/_next
cp package.json $PACKAGE
cp package-lock.json $PACKAGE
cp -r scripts $PACKAGE/_scripts
cp -r datastore $PACKAGE/_datastore
cp -r public $PACKAGE/_public
cp next-env.d.ts $PACKAGE
cp next.config.mjs $PACKAGE
cp appconfig.json $PACKAGE
cp squarecloud.app $PACKAGE