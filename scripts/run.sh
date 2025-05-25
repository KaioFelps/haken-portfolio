swap_if_incoming() {
    OLD=$1
    NEW=$2

    if [ ! -d "$NEW" ]; then
        return
    fi

    if [ -d "$OLD" ]; then
        rm -rf "$OLD"
    fi

    mv "$NEW" "$OLD"
}

swap_if_incoming public _public
swap_if_incoming .next _next
swap_if_incoming datastore _datastore
swap_if_incoming scripts _scripts

npm ci
npm run start