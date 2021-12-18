class First {
    hello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {
    hello() {
        super.hello();
    }
}

const newHello = new Second();
newHello.hello();