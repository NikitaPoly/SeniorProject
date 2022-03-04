<h1>Student Delivery System</h1>
<h2>Summary</h2>
<p>Often students on college campuses seek out employment opportunities that do not interfere with a busy class
    schedule. Some students appreciate the convenience of ordering food and having it delivered. The campus delivery
    system gives busy students an opportunity to gain flexible employment while also providing cheap and easy delivery
    for on campus stores. The campus delivery system (CDS) is a delivery service for students by students hosted as a
    website on https://www.polyakov.tech/delivery. Most delivery services have a difficult time retaining delivery
    drivers, CDS takes advantage of this by requiring all deliveries to be initiated and fulfilled by students. Each
    user’s DePauw student Google account is connected to the user’s CDS account ensuring that only DePauw students can
    use this service. PayPal’s Venmo API is utilized to make payments easier for students as this website is accessible
    from any device containing an internet browser. If students would like to use their campus balance, the payment step
    is replaced by a student ID card pick up step. Because this is a service created for students, a $1-$2 delivery fee
    is charged, as there is no company hierarchy behind this service. All profits go to the student fulfilling order.
    Finally, to keep all users safe only campus sponsored stores are available on CDS (Hoover Dinning Hall, Union
    C-store, Café Allegro, Eli’s bookstore, Starbucks ,Fluttering Duck).
</p>
<h2>Tools - front-end</h2>
<h4>Vscode </h4>
<p>Standar editor for Web Projects.</p>
<h4>Node.js - </h4>
<p>Although the back-end of this website is no longer writen in javascript, Node.js is a great tool for front-end
    development. It allows the use of typescript, webpack and custom environment scripting. The main goal of node is to
    proide a runtime eniroment outside the browser.

</p>
<ul>
    <li>Node package manager. (NPM)</li>
    <li>allows scripting operating system events with javascript.</li>
    <li>has additional tools to aid in development.</li>
</ul>
<h4>Webpack </h4>
<p>Module bundler that compiles all files needed into one efficient and safe bundle of html, and js. This tools can
    create dev servers for development debugging while also providing a context for typscript.</p>
<ul>
    <li>Allows me to create html, js and css modules I can resue. Prevents alot of duplicate code in the front-end.</li>
    <li>Compatable with typescript with minimun configuration.</li>
    <li>Provides security by minifying files.</li>
    <li>Much easier to debug front-end project.</li>
</ul>
<h4>TypeScript </h4>
<p>An additoin to the basic javascript lanuage, typescript helps make javascript a safer and easier lanuage to develop
    in by adding typed variables and decliration files.
</p>
<ul>
    <li>added types for variables.</li>
    <li>faster to develop with compared to javascript.</li>
</ul>
<h2>Scripts - Front-end</h2>
<h4>NPM</h4>
<p>
    NPM helps automate the development, build and deployment of the website Front-end. NPM is the package manager that
    is the default install for nodes package manager.
    With the help of npm supporting libraries can be installed like webpack and typescript. Additionally NPM can run
    custom os scriptis using node and javascript:
    With the help of the json config file all information about the development and its dependesies is saved. Making the
    development recreatable
    on any capable device.
</p>
<ul>
    <li></li>
</ul>
<h4>Webpack</h4>
<p>
    Webpack is responsible for running most of the fron-end development enviroment. It creates severs for testing apps
    with hot-reload aswell as builds and
    packagase code. The serving and building script used in npm:
<ul>
    <li></li>
</ul>
In addition to scripts running webpack I also had to utilize plugins and modules for webpack:
<ul>
    <li></li>
</ul>
</p>
<h4>Typescript</h4>
<p>
    This is an addon to javascript that makes the development of javascript aplication simpler and more powerfull. With
    the additon of
    types and code transpiling, javascript becomes much less runtime error prone and predictable. Few scripts are used
    for typescript:
    But the config files bring more imporants to dictating how typescrit runs:
<ul>
    <li></li>
</ul>
</p>
<h4>Three.js</h4>
<p>
    This front-end library is used for 3D animations. I used Three.js to build the walkthru for how to make an order and 
    for the sign up page as well. This library proides many tools to model 3d enviroments with code and render with-in the browser.
    A simple scene just needs a camera, light, and subject. After the 3d models have been added to the scene object the camera and 
    scene are sent to a WEBGL renderer. With the addition of custom render functions, object in the scene can be moved.
  </p>  
    <p>Docs for Three.js can be found <a href="https://threejs.org/docs/#manual/en/introduction/Creating-text">here</a></p>
