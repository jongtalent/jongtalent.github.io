console.log("LOADED");
await fetch("https://api.simplecast.com/podcasts/78b51594-83c1-40e7-a2c0-2c8738d204fb/seasons", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5"
    },
    "referrer": "https://jongtalent.github.io/",
    "method": "OPTIONS",
    "mode": "cors"
}).then(
 (value) => {
    console.log(value); // Success!
    fetch("https://api.simplecast.com/podcasts/78b51594-83c1-40e7-a2c0-2c8738d204fb/seasons", {
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache"
    },
    "method": "GET",
    "mode": "cors"
    }).then((response) => response.json())
      .then((data) => {
                     console.log(data.collection);
                     console.log(data.collection[0].href + "/episodes")
      
      
//Next fetch the episodes of each season
        /*
      await fetch("https://api.simplecast.com/seasons/8842eba2-4e6c-4828-a58e-0d850b29c8d7", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        */
       // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        /*
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Cache-Control": "max-age=0"
    },
    "method": "GET",
    "mode": "cors"
});


      /* 
Finally: render for each episode the simplecast player

https://player.simplecast.com/d62c606d-df1e-4ec1-949f-574f2080b3c2/seasons?dark=true
*/
      })
  },
  (reason) => {
    console.error(reason); // Error!
  },
);
