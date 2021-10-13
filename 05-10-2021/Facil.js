function toArray(obj) {
	const iterator=  Object.entries(obj);
	console.log(iterator);
	return iterator;
}

toArray({ a: 1, b: 2 });

function keysAndValues(obj) {
    const iterator=  Object.keys(obj);
	console.log(iterator);
    return [iterator, iterator.map( iterator => obj[iterator] )];
}

keysAndValues("Apple", "Microsoft", "Google");

//{a: "Apple", b: "Microsoft", c: "Google"}, [["a", "b", "c"], 
