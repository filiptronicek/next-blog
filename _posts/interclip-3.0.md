---
title: 'Interclip 3.0'
excerpt: "The next generation of Interclip is here and there's a lot to it"
coverImage: '/assets/blog/interclip3/cover.jpg'
date: '2019-08-11'
---
<p>Soooo...
I was really excited for this release, mainly because a lot of people I talked to said it is a great idea and that they would use it. The problem with storing the URL into a plain text file accessible to everyone (besides f-ing security) is, that if for every user there was a text file (each just under 50B) would be a very bandwidth and storage hungry action. So I went through the hassle of doing all the PHP-MySQL crazy $(&quot;hit&quot;) and made the database. Then I went through a couple of fullscreen form and text designs on CodePen:</p>
<ul>
<li><p><a href="https://codepen.io/filip_tronicek/pen/qeJjPz">When the user makes a query on a specific code</a> </p>
</li>
<li><p><a href="https://codepen.io/filip_tronicek/pen/rXqwro">When the user adds a URL to the database</a> </p>
</li>
<li><p><a href="https://codepen.io/filip_tronicek/pen/dxNdgN">Recieve link main page</a> </p>
</li>
<li><p><a href="https://codepen.io/MilanMilosev/pen/JdgRpB/">Main page - send link</a> </p>
</li>
</ul>
<p>After that I figured out that the code that is used to access the urls from the database should be 5 digit base 36 strings, so that makes about 60 466 176 combinations - and I want to make a cron script, that deletes all the codes after a week in the next major release.</p>
<p><img src="https://user-images.githubusercontent.com/29888641/62826686-faa86b80-bbbf-11e9-81db-c7e321eaf2e4.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/29888641/62826693-127fef80-bbc0-11e9-95fe-300241e31397.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/29888641/62826696-24619280-bbc0-11e9-81d1-e99c1c37e0d1.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/29888641/62826699-36433580-bbc0-11e9-925b-00c7f0e4e8f4.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/29888641/62826703-4e1ab980-bbc0-11e9-9bc1-eb102f8059fa.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/29888641/62826710-6094f300-bbc0-11e9-8511-59d12efb8618.png" alt="image"></p>