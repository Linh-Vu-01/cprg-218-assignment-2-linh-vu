introduction.addEventListener('click',function(){
    console.log("introduction");
    document.body.classList.remove("vietnam");
    document.body.classList.remove("mexico");
    document.body.classList.remove("canada");
    document.body.classList.add("introduction");
    document.getElementById("photo").src="images/gold-coast.jpg";
    document.getElementById("photo").alt="Gold Coast - Australia";
    heading.innerHTML = "About Me";
    information.innerHTML = "Hey there, I'm Linh - an aspiring photographer and creative graphic designer based in Calgary, Canada. At the beginning of this year, I returned to my home country and traveled across Vietnam with my family, capturing our adventures through photography. This experience is an essential part of my journal, which focuses on landscapes, people, and the details of everyday life. Now, I'm embarking on a new journey in Calgary, where I'll continue to hone my skills and pursue my passion for art, design, and photography.";
    description.innerHTML = "This travel journal showcases a selection of my photographs, capturing the diverse beauty and unique stories from around the globe. Every photo reflects a moment where urban charm harmonizes with natural beauty. Stay tuned for what's to come!";
})
vietnam.addEventListener('click',function(){
    console.log("vietnam");
    document.body.classList.remove("introduction");
    document.body.classList.remove("mexico");
    document.body.classList.remove("canada");
    document.body.classList.add("vietnam");
    document.getElementById("photo").src="images/da-lat.jpg";
    document.getElementById("photo").alt="Da Lat - Vietnam";
    heading.innerHTML = "Da Lat, Vietnam (April 2024)";
    information.innerHTML = "Welcome to Vietnam!"; 
    description.innerHTML = "Let's embark on a journey through the captivating beauty of Da Lat, where the crisp mountain air, scenic lakes, and vibrant local culture intertwine. The city is brimming with hidden gems, from its enchanting pine forests and serene tea hills to breathtaking flower fields.";
}) 
mexico.addEventListener('click',function(){
    console.log("mexico");
    document.body.classList.remove("introduction");
    document.body.classList.remove("vietnam");
    document.body.classList.remove("canada");
    document.body.classList.add("mexico");
    document.getElementById("photo").src="images/puerto-vallarta.jpg";
    document.getElementById("photo").alt="Puerto Vallarta - Mexico";
    heading.innerHTML = "Puerto Vallarta, Mexico (September 2024)";
    information.innerHTML = "Welcome to Mexico!"; 
    description.innerHTML = "Join me on a journey through Puerto Vallarta, where sun-kissed beaches meet the vibrant energy of local life. This collection invites you to immerse yourself in stunning sunsets, beautiful seascapes and bustling local markets. Puerto Vallarta is a fusion of rich cultural heritage, handmade treasures, and timeless beauty – an experience that will leave you enchanted.";
})
canada.addEventListener('click',function(){
    console.log("canada");
    document.body.classList.remove("introduction");
    document.body.classList.remove("vietnam");
    document.body.classList.remove("mexico");
    document.body.classList.add("canada");
    document.getElementById("photo").src="images/calgary.jpg";
    document.getElementById("photo").alt="Calgary - Canada";
    heading.innerHTML = "Calgary, Canada (November 2024)";
    information.innerHTML = "Welcome to Canada!"; 
    description.innerHTML = "Discover the magic of Calgary's winter, where snow-covered mountains stretch endlessly into the horizon, meeting the peaceful rhythm of city life. Each image captures the serene beauty of nature, the warm glow of city lights, and the vibrant spirit of people embracing the season.";
})