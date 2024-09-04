body {
    background-color: #000;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 80%;
    max-width: 800px;
}

#terminal {
    background-color: #111;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    position: relative;
}

h1 {
    margin: 0;
    padding: 0 0 20px;
    font-size: 1.5rem;
}

.output {
    margin: 0;
    padding: 5px 0;
}

.input::before {
    content: attr(data-before);
    color: #00ff00;
}

a {
    color: #00ff00;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #fff;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    padding: 5px 0;
}

#videoContainer {
    margin-top: 20px;
    border: 2px solid #00ff00;
    padding: 10px;
    border-radius: 5px;
}

#videoContainer.hidden {
    display: none;
}

#video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background-color: #000;
}

#video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: contrast(1.5) brightness(0.8) sepia(1) hue-rotate(90deg) saturate(2);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
