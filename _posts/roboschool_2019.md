---
title: 'RoboSchool (TU in Chemnitz)'
excerpt: "A small update to Interclip with a lot of neat features"
coverImage: '/assets/blog/uploads/robot_on_line.webp'
date: '2019-09-14'
---

Hi everybody!
last week, I was in Germany for a week at the Technical University of Chemnitz, where I was attending the project RoboSchool for the week. The goal for the week was to build a working robot from scratch. With that in mind, we started with soldering the parts onto the mainboard, which we then connected to an Arduino Uno. 


![image](/assets/blog/uploads/martin.webp)
![image](/assets/blog/uploads/soldered_desk.webp)
![image](/assets/blog/uploads/robot.webp)


Thanks to the [UNObot library](https://github.com/tuc-roboschool/UNObot) for the robot written by Florian Zylla, we were able to keep the code very easily readable. After a couple of hours developing and testing, we had to start all over again, because our code structure was just too sophisticated. We made a sketch and all the if statements were now far easier to understand. There was a parkour course, which we had to guide our robot trough. It was easy at first because we only needed to check if the robot is on a line and that was it. But then came the dashed lines. Most teams solved it with just letting the robot go straight when the sensors didn't see a line, but that was too bad for you know.... us, so we developed an Easy Exploring Algorithm (EEA). The point was to let the robot look around and if he doesn't see anything just go a little bit forward and repeat the process.


![image](/assets/blog/uploads/robot_on_line.webp)
![image](/assets/blog/uploads/martin_coding.webp)

I hope you enjoyed this post. See you again soon,
Filip


Extra code :)
<script src="https://gist.github.com/filiptronicek/eedffddc9f21584490f461c5c634b31b.js"></script>