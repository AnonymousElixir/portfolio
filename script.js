document.getElementById('hackOne').addEventListener('click', function() {
    alert('Running Exploit-1.0...');
    setTimeout(function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 2000); // Delay to mimic a process running
});

document.getElementById('hackTwo').addEventListener('click', function() {
    alert('Decrypting data...');
    setTimeout(function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 2000); // Delay to build anticipation
});
