<h1>Student Delivery System</h1>
<h2>Nikita Polyakov </h2>
<h3>Product</h3>
<p>
    For my senior project I decided to make a full-stack website. This project contains multiple parts. Front-end development code, front-end production code, server code. This git hub repository contains all the code nessasary to develop and deploy to heroku. When deployed on localhost the "student delivery system" can be accesed through the localhost:8080/delivery/ url.
</p>
<h3>Front-end</h3>
<p>
    From previous experience developing smaller full-stack websites, I elected to build a framework for ease of the development procces. This framework included the following commands:
     "login-b": "webpack --config-name login",
    "order-b": "webpack --config-name order",
    "settings-b": "webpack --config-name settings",
    "build-d": "npx webpack",
    "earn-r": "webpack serve --config-name earn",
    "login-r": "webpack serve --config-name login",
    "order-r": "webpack serve --config-name order",
    "settings-r": "webpack serve --config-name settings",
    "build-p": "webpack --config ./webpack.build.js",
    "run-f": "npx webpack serve",
    "run-b": "go run main.go",
    "build-b": "go build -o ./bin ./main.go ",
    "buildAll" : "webpack --config ./webpack.build.js",
    "postbuildAll":"node ./buildScript.js",
    "a": "webpack --config ./webpack.build.js && node ./buildScript.js &&  npm run run-b"
    <ul>
        <li>
            <code>earn-b</code>: 
            Example : <code>npm run earn-b</code>
            <p>
                This script utilizes webpack and builds only the earn page front-end. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for easy client side debugging. 
            </p>
        </li>
    </ul>
</p>
