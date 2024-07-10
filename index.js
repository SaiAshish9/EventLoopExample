function a(){
    console.log("a")
}

function b(){
    setTimeout(()=>{
        console.log("b")
    },1000)
}

a()
b()
a
b

1. a and b are at stack
2. a will be executed and popped out
3. b will be pushed to web api
4. after execution b will be pushed to queue
5. Since stack has space it will be pushed to stack and popped out.

function a(){
    console.log("a")
}

function b(){
    setTimeout(()=>{
        console.log("b")
    },1000)
}

b()
a()
a
b

1. b and a are at stack
2. b will be pushed to web api 
3. a will be executed and popped out
4. after execution b will be pushed to queue
5. Since stack has space it will be pushed to stack and popped out.

function a(){
    setTimeout(()=>{
        console.log("a")
    },2000)
}

function b(){
    setTimeout(()=>{
        console.log("b")
    },1000)
}

a()
b()
b
a

1. a and b are at stack
2. a will be pushed to web api 
3. b will be pushed to web api 
4. after execution b with 1s delay pushed to queue
5. Since stack has space b will be pushed to stack and popped out.
5. after execution a with 2s delay pushed to queue
5. Since stack has space a will be pushed to stack and popped out.
