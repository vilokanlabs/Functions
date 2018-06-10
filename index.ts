import http from 'http'

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

    postFirebase() {        
        var options = {
            host: 'example.com',
            port: 80,
            path: '/foo.html'
        };

        http.get(options, function (resp) {
            resp.on('data', function (chunk) {
                //do something with chunk
                console.log(chunk)
            });
        }).on("error", function (e) {
            console.log("Got error: " + e.message);
        });
    }
}

let myI = new MyC();
myI.getSanskritDefinition("http://www.google.com");
myI.postFirebase();