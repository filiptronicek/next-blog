---
title: 'All the time(ly) matters'
excerpt: "Sometimes, there are many problems with syncing computer time. Let's talk about that!"
coverImage: '/assets/blog/all-the-timely-matters/cover.png'
date: '2020-12-04'
---

Hi folks, it's me here again. Today I want to focus on an OSS product I launched in mid-December 2020, CountDowner. It is a really simple service for, well, counting down to dates. It was so simple to code in fact, that it took me about 2 hours to get it entirely working and ready to be published (most work is done in [dd926c7](https://github.com/filiptronicek/CountDowner/commit/dd926c7afab66beb39d37b096b3b4ee1de9839b1)). This year, I wanted to focus on making it a more usable and sustainable from the developer side. First, I needed to redesign the create page, which I did with [js-datepicker](https://www.npmjs.com/package/js-datepicker) and the native [time-picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time) component. I also rewrote the code to use Webpack, because it should be faster and easier to integrate new libraries.

## Synchronizing time and the impossibility of it
In [CountDowner#14](https://github.com/filiptronicek/CountDowner/pull/14/), I introduced a function that would synchronize the time with the help of a serverless function, which would just return the current UNIX timestamp and (if provided) the difference between the current and the provided timestamp. I chose Cloudflare workers for this because Vercel had too big of a ping - most of the time 200+ ms, which is not acceptable when working with time. The problem is, that the ping was still sometimes 50+ ms and I needed to account for that. You can easily subtract the ping from the difference, but that would also account for the ping back, which we don't care about. In my implementation, we just assume that the round trip takes the same time to the server and back, so I just divide the ping by 2 and subtract that. If there was a better way, I would implement it, but it just cannot be done. There is a great article about this by [twisted oak](http://twistedoakstudios.com/blog/Post2353_when-one-way-latency-doesnt-matter) about this and why it mostly doesn't matter anyway.


![Diagram of the Cloudflare worker](https://trnck.dev/0:/assets/blog/uploads/d69f61a0-cf86-4666-8cda-cb8cbda45282.svg)
