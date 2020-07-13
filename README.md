# Demo using Scenarios 
Scenarios available at the App bar(top right) demonstrate traffic shutting over degraded/outage site then failing over to other sites and recovering back while showcasing different features of Vizceral. Switch scenario to see traffic updated. Selecting scenarios in this order exhibits the above usecase (Normal -> Degraded -> Outage -> Failover Begin -> Failover End -> Recovery -> Normal)
![](./demo.gif)

# Vizceral
![](https://raw.githubusercontent.com/Netflix/vizceral/master/logo.png)
This is a sample application using the [React wrapper](https://github.com/Netflix/vizceral-react) around the [vizceral](https://github.com/Netflix/vizceral) graph.
For more details about using vizceral in your own projects with your own data, refer to the above repositories.

# Setup
1. Get source, install deps, and run demo server.

   ```sh
   git clone git@github.com:sachinkumaranumula/vizceral-demo.git
   cd vizceral-demo
   npm install
   npm run dev
   ```

2. Open `localhost:8080` in your browser.

##### Using Docker
If you don't have a node environment setup or would like to run this example on a platform, there is a Dockerfile for experimental usage.

```
$ docker build -t <name>/vizceral-example .
```
```
$ docker run -p 41911:8080 -d <name>/vizceral-example
```

Then you should be able to navigate to http://localhost:41911
