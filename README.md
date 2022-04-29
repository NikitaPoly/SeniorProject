<h1>Student Delivery System</h1>
<h2>Nikita Polyakov </h2>
<h3>Product</h3>
<p>
    For my senior project I decided to make a full-stack website. This project contains multiple parts. Front-end development code, front-end production code, server code. This git hub repository contains all the code nessasary to develop and deploy to heroku. When deployed on localhost the "student delivery system" can be accesed through the localhost:8080/delivery/ url.
</p>
<h3>Front-end</h3>
<p>
    From previous experience developing smaller full-stack websites, I elected to build a framework for ease of the development procces. This framework included the following commands:
    <ul>
        <li>
            <code>earn-b</code>: 
            Example : <code>npm run earn-b</code>
            <p>
                This script utilizes webpack and builds only the earn page front-end. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for easy client side debugging. 
            </p>
        </li>
         <li>
            <code>login-b</code>: 
            Example : <code>npm run login-b</code>
            <p>
                This script utilizes webpack and builds only the login page front-end. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for easy client side debugging. 
            </p>
        </li>
         <li>
            <code>order-b</code>: 
            Example : <code>npm run order-b</code>
            <p>
                This script utilizes webpack and builds only the order page front-end. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for easy client side debugging. 
            </p>
        </li>
        <li>
            <code>settings-b</code>: 
            Example : <code>npm run settings-b</code>
            <p>
                This script utilizes webpack and builds only the settings page front-end. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for easy client side debugging. 
            </p>
        </li>
         <li>
            <code>build-d</code>: 
            Example : <code>npm run build-d</code>
            <p>
                This script utilizes webpack and builds all front-end pages, spesifically the development files. These files are not minified and are not ready for production. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for easy client side debugging. 
            </p>
        </li>
        <li>
            <code>build-p</code>: 
            Example : <code>npm run build-p</code>
            <p>
                This script utilizes webpack and builds all front-end pages, spesifically the production files. These files are minified and are ready for production. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. These files could then be used for fast client side experience.  
            </p>
        </li>
        <li>
            <code>earn-r</code>: 
            Example : <code>npm run earn-r</code>
            <p>
                This script will build and run only the earn front-end page. After it completes the building of the development files, it will launch a server using webpack and open an explorer tab to the /delivery/earn page on your localhost.  
            </p>
        </li>
        <li>
            <code>login-r</code>: 
            Example : <code>npm run login-r</code>
            <p>
                This script will build and run only the earn front-end page. After it completes the building of the development files, it will launch a server using webpack and open an explorer tab to the /delivery/login page on your localhost.  
            </p>
        </li>
        <li>
            <code>order-r</code>: 
            Example : <code>npm run order-r</code>
            <p>
                This script will build and run only the earn front-end page. After it completes the building of the development files, it will launch a server using webpack and open an explorer tab to the /delivery/order page on your localhost.  
            </p>
        </li>
        <li>
            <code>settings-r</code>: 
            Example : <code>npm run settings-r</code>
            <p>
                This script will build and run only the earn front-end page. After it completes the building of the development files, it will launch a server using webpack and open an explorer tab to the /delivery/settings page on your localhost.  
            </p>
        </li>
        <li>
            <code>run-f</code>: 
            Example : <code>npm run run-f</code>
            <p>
                This script utilizes webpack and builds all front-end pages, spesifically the development files. These files are not minified and are not ready for production. This script will read the typscript that the page is writen in, compile all resources needed and export a javascript file, images and an HTML file. Then it launches a server using webpack and displays all pages of the front-end.
            </p>
        </li>
        <li>
            <code>run-b</code>: 
            Example : <code>npm run run-b</code>
            <p>
                This script runs the golang server on localhost:8080.
            </p>
        </li>
           </li>
        <li>
            <code>a</code>: 
            Example : <code>npm run a</code>
            <p>
                This is a script combination of multiple othere scripts mentioned above. This script builds the production code for all of the front-end, utilising webpack and a custom buildScript.js file. After the compilation is complete the go server is started and the website can be accesed through the localhost:8080/delivery/ url.
            </p>
        </li>
    </ul>
</p>
