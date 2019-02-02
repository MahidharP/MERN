function ComponentOne(props){
    let numbers = []
    function greet(name) {
        console.log('hello', name)
    }
    function addToNum(num){
        numbers.push(num)
        return numbers
    }

    ComponentTwo({ name: 'Mahidhar', city: 'Bangalore', greet: greet, add: addToNum})
}

function ComponentTwo(props) {
    console.log(props.name, props.city, props.greet)
    props.greet('Vijay')
    console.log()
}