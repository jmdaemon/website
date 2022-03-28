---
title: 'Pomodoro: Start Smaller and Study Smarter'
date: '2022-03-28'
---

The [pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) is a time management technique
that can be helpful to break down tasks into smaller more accomplishable goals and subtasks.
The technique uses 4 work intervals (of about 25 minutes in length for each) and 3 short breaks followed by a longer
break at the end of the 4 pomodoro work intervals.

This technique can prove helpful for studying and completing work over the course of these smaller segments.
I recently wrote up a lightweight program called [`pomodoro`](https://github.com/jmdaemon/pomodoro) that
can help you keep track of your pomodoro time intervals.

The four work periods are adjustable through a custom config file (which is determined by the environment
variable `POMODORO_CONFIG`). It even supports a 'pause' feature which occurs after your break so you can take
more time to have a breather or just keep your pomodoro status tracked until after a meeting.
There's a progress bar and it also shows you the current time and how far you're in for
your current pomodoro interval.

I hope this program proves as useful to you as it does for me.
