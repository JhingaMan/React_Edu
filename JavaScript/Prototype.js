    // if you want to make a common fucntion for all, you have to define a function like Object.prototype.<function name> = <something>

    let heroPower = {
        thor: "hsmmer",
        spiderMan: "sling",

        getSpiderPower : function(){
            console.log(`Spidy power is ${this.spiderMan}`)
        },
    }

    Object.prototype.foo = function(){
        console.log(`foo is present in all objects`)
    }

    heroPower.foo()

    let myHeros = [`thor`,`spiderMan`]

    myHeros.foo()

    Array.prototype.foo1 = function(){
        console.log(`foo says hello`)
    }

    myHeros.foo1()

    const User = {
        username: "JhingaMan",
        emailID: "epicboy1208@gmail.com"
    }

    const Teacher = {
        makeVideo : true,
    }

    const TeachingSupport = {
        isAvailable: false,
    }

    const TASupport = {
        makeAssignment: "JS assignments",
        fullTime: true,
        __proto__: TeachingSupport // can access and inherit the property of TeachingSupport object

    }

    Teacher.__proto__ = User; // will give the access of user object to Teacher

    console.log(Teacher)
    console.log(Teacher.username)

    //modern Syntax

    Object.setPrototypeOf(TeachingSupport, Teacher) // will access the property of teacher in TeachingSupport