interface TTime {
    value: string;
}

class MyC {
    time: TTime = { value: "234.90" }
    getSanskritDefinition(user: string) {
        setTimeout(() => {
            console.log(this.time.value + "tt")
        }, 50)
    }
}

let myI = new MyC();
myI.getSanskritDefinition("http://www.google.com");