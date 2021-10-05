function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}	
console.log(getVoteCount({upvotes:13, downvotes:6}));




function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}
console.log(volumeOfBox({width: 5, length: 3, height: 2}));

function desestructurazion(){

    const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
    const str = `({ name, email, ...rest } = user ).toString()`

    console.log(user);
    console.log(str);    

}

desestructurazion();
