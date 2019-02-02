const error = (value) => {
    console.log('error msg', value);
}

const success = (value) => {
    console.log('success msg', value);
}

const fetchUsers = (error, success) => {
    let random = Math.round(Math.random() * 100);
    console.log(random);

    //error first
    if(!(random > 90)){
        error('Something Fishy Happened');
        return;
    }
    success('Listing of users')
}

fetchUsers(error, success);
