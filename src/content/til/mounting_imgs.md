---
published: true
title: "Mounting paritions from an img file"
date: 2025-04-13
tags: ["fs"]
---

My wife got me a little retro gaming device for my birthday today. I turned it on, played around a bit, then reset it. It wouldn't boot. I did some digging and discovered that the SD card needed to be replaced. I mounted the card on my Linux box and used `dd` to back it up.

Here's what I learned/remembered/will learn again:

- `dd` is used to make direct copies of a device. You can use it to make a backup `.img` file of a device
- `lsblk` lists block devices that may or may not be mounted
- `lsblk -o NAME,FSTYPE` is handy cause it'll show partitions and their file systems
- `fdisk -lu foo.img` will show the partitions within the `.img` and their offsets

You can use a loopback mount to mount an `.img` so you can browse the files in it as if it were plugged in like a drive.

If you need to mount just one of the paritions, you need to run `fdisk -lu` like this:

```
❯ fdisk -lu ~/foo.img
Disk /home/jon/foo.img: 7.4 GiB, 7948206080 bytes, 15523840 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xc9f931c9

Device                      Boot    Start      End  Sectors  Size Id Type
/home/jon/foo.img1         32768   262143   229376  112M  b W95 FAT32
/home/jon/foo.img2        262144 13983743 13721600  6.5G 83 Linux
/home/jon/foo.img3      13983744 15523839  1540096  752M  7 HPFS/NTFS/exFAT
```

Suppose I wanted to mount just the `Linux` parition. I'd do that by using the `start` as an offset, and `512` as the sector size from the above `fdisk` call, with the `mount` command:

```sh
sudo mount -o loop,offset=$((512 * 13983743)) /home/jon/foo.img /mnt
```

Then it would be available at `/mnt`.  

Side note: at first I went down the path of using `losetup` to create a loopback device until a Stack Overflow comment reminded me that the `-o loop` flag on mount can do that for you.
