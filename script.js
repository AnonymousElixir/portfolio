document.getElementById('hackOne').addEventListener('click', function() {
    alert('Running Exploit-1.0...');
    setTimeout(function() {
        document.getElementById('videoContainer').classList.remove('hidden');
    }, 2000); // Delay to mimic a process running
});

document.getElementById('hackTwo').addEventListener('click', function() {
    alert('Decrypting data...');
    setTimeout(function() {
        document.getElementById('videoContainer').classList.remove('hidden');
    }, 2000); // Delay to build anticipation
});
