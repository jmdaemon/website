---
title: 'Bytesize: Convert between Binary and SI Bytes'
date: '2022-03-27'
---

Do you find yourself frequently converting between binary bytes and SI bytes?
No? Well too bad.

Bytesize is a program that converts between System Internationale bytes (Kilo Mega, Giga, Tera) and
binary bytes (Kibi, Mebi, Gibi, Tibi).

I wrote this program since there were no good alternatives available that would convert between:

- SI Byte -> Binary
- Binary -> SI Byte
- Binary -> Binary

Often when partitioning disks it is necessary to know how much space to allocate.
I frequently found myself having to google conversions, so I decided that I should write up
a designated program for doing these conversions.

Currently `bytesize` supports conversions up to and including TB/TiB.
More could be easily added by just specifying another entry in both the `Byte` and `SI_Byte` arrays
in `bytesize.c`.
