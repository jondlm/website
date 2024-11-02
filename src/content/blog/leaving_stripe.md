---
title: Leaving Stripe
date: 2024-10-28
---
I did the thing you're not supposed to do. I quit my job at Stripe without another lined up.

Before I left I pondered deeply how I wanted to leave. The thought of leaving my job was terrifying yet energizing in ways I didn't expect. I found myself up in the middle of the night thinking deeply. I wrote my long-form thoughts as an internal blog post. I rewrote them. I read them to my wife who helped me refine them into something closer to what I really care about: **telling our stories more truly**.

I'd like to share my story more broadly now. Why? Because perhaps there is someone out there wondering if they're struggling alone.

I'm scared to share this publicly. I'm afraid of how it'll make me look. I've been sitting on this post for months now questioning my motives. At some point you just have to hit the "fuck it" button.

I care about honesty. Hell, one of my [core values](/website/values) is "humbling honesty". I suppose this is a small way to embody that.

Here's what I shared internally without any edits:

---

Hi. I'm Jon. I've been an engineer at Stripe for almost four years. My last day will be on Friday August 30th. Lately I've found myself increasingly drawn toward honest writing. I'd like to offer you the story of my time at Stripe that won't be found in shipped emails. Let's start at the beginning.

It was a late Summer afternoon in my home office in Portland Oregon. I was sitting at my desk pouring over my IDE setup to make sure I'd put my best foot forward for my imminent phone screen. TypeScript all configured? Check. Minimal testing framework installed? Mmmhmm. Tmux working? Yup. Tastefully muted terminal colors on display? Like a peacock.

I could feel my palms sweating as I watched the clock slowly tick toward 3pm. I was nervous as hell. I'd already had a successful career as a software engineer for the better part of a decade. I'd initiated and driven a company-wide migration to Kubernetes. I'd authored a component library used by hundreds of engineers. When my previous company had been bought by AT&T I was given one of the highest retainer packages to keep me around. None of that seemed to matter in the build up to my interview. I was about to be closely judged and I was terrified of being found lacking.

My impression of Stripe was astronomically high. I considered it an outstanding company of refined craft, attention to detail, and engineering excellence. I always got ridiculously excited when I'd see a new product launch on Hacker News. I had listened to Patrick on podcasts and admired him as an industry visionary. The word "revered" feels fitting.

I carried all those swirling impressions with me as 3pm hit. My heart was beating so strongly I could feel it in my head. I tried to take some deep breaths but it didn't help. My mind was racing over every little detail. "I'll join about 30 seconds after the hour to make sure he knows I'm on-time but not _too_ eager." I joined the call and my interviewer joined shortly after.

He introduced himself and we settled into the usual ritual of a phone screen. I told him I already had my own environment set up and I shared my screen. "Surely he'll take note of my meticulous programming setup." I thought.

He gave me a coderpad link. I started to read through the question. I could already feel my mind moving like molasses. On the surface the question seemed straightforward enough. It presented a simple data structure and asked me to do some filtering based on a set of constraints. "No problem!" I thought.

I fired up vim and got to work. "Since they're so dedicated to quality I should make sure my types are airtight." I started modeling my solution with types first. "Hmm, well this question needs dynamic keys in the objects so that'll mean I need an indexed type. Thank god I remember how to do those without looking them up. Don't want to appear weak."

Things were moving rather smoothly despite my sweat soaked armpits. I silently resented my wife's decision to unilaterally give up anti-perspirant due to chemicals.

I got to a reasonable spot to try out my code. I hit save on the file. My little fsnotify script detected the file change, ran a TypeScript check, then executed my code.

Error. Shit.

As I read the error carefully, I realized I didn't immediately know the solution. I felt a soupy darkness creep further in on the edges of my mind. I fumbled around for a couple minutes trying to fix it correctly. I was trapped, caged by my own need to appear competent. I could feel my mind racing from idea to idea trying to find a way out. Eventually I looked at the clock and realized we were well into the interview. I had to find a pressure relief valve before the whole thing ran off the rails.

I did the unthinkable. I added a `//@ts-ignore` comment to bypass the compiler.

"Uh heh, if this were real code obviously I'd figure out the problem. I'll just bypass this one error and move on for the sake of time." I said.

I continued down the increasingly treacherous road toward solving the problem. Another error. Another one. More ignore comments. Shit shit shit.

At that point I was hardly present at all. I was falling violently down a hole of self consciousness that felt like a threat to my very existence.

I knew my code was close to working but my mind was gone. I was done for and I knew it. He kindly ended the interview and asked if I had any questions. I bumbled some out but I knew my verdict.

Unqualified. Failure.

We ended the call and I let my head sink into my hands, but only for a moment. An idea sprang to mind. What if I got my code working really quickly and found a way to send it to him?

I hopped over to Chrome and googled his name. All I could find was his Twitter account. At that point I had nothing to lose so it was trivial to solve the problem. Within minutes I threw together a public gist with my working code and DM'd him:

> Don't feel like you need to message me back. I just hate leaving a problem unresolved like I did. The code still isn't ideal but I at least wanted to reach out and send that to you. Thanks again!

I nervously hit the send button and walked away from the computer dejected. Within a couple days I got the email I was expecting.

Rejected.

Eventually I mustered the courage to try interviewing again six months later. I got the job. I was elated. I was extremely proud of the fact that I had gotten a job at Stripe. I even made a little web animation thing to share with my coworkers letting them know where I'd be headed next.

I was the first hire onto the brand new JS Infra team. I hit the ground running trying to prove myself. It took me a long time to find a project where I could clearly demonstrate business value. Before I found that project I constantly struggled with something else: writing.

Writing was difficult for me when I came to Stripe. I had never really written a serious project proposal in my career working at smaller companies. My writing chops felt woefully underdeveloped and the impression only grew as I read through well-crafted ships every day. I  remember a sinking feeling in my chest as I would try to work up the courage to share a link to a document I had agonized over. Worse still was seeing little avatar badges on an incomplete document I was editing. Allowing my unpolished work to be seen was terrifying. I didn't want anyone to know I struggled. I didn't want them to know how much their opinions mattered to me. 

I'll circle back to writing in a bit.

About a year into working at Stripe I found my first really impactful project. I worked tirelessly to migrate Dashboard development onto a new JS bundler. I sped up development by about 10x. It was a smashing success.

I remember the moment when my buddy Slacked me saying that my shipped email had been one of Patrick's tabs in a Friday Fireside. I hadn't attended because I was too busy trying to work more. My email admired by a billionaire? Bliss. The thought of Patrick noticing me felt unbelievably good. Finally I was proving myself at the company of my dreams. I was on cloud nine.

Until I had my next one on one with my boss. She shared with me some concerns about my communication and project management. She, and apparently others she gathered feedback from, felt like I hadn't done a good enough job pulling other engineers into the project. She spoke of how proud she was of the outcome but that it didn't excuse my less than ideal methods.

Performance review time came and I got a partially meets expectations (PME).

"I know it's probably hard to get this rating after such a successful project. I want to assure you you're on track toward a solid review next cycle as long as you address the feedback around project management and keep delivering quality stuff like this." My boss said to me in another one on one.

After the call I crawled into my closet and quietly cried. It was one of the few times I let myself. I felt ashamed and humiliated.

I told my buddies, who referred me to Stripe, about my rating and they were both shocked. They offered kind words but it all felt hollow. Everyone assured me that a PME is a normal occurrence and that they were sure I'd bounce back. It still hurt. Worse still was feeling bad for being affected so deeply by it. "Damn it, Jon, shrug it off and get back to work" I told myself.

I found comradery with one of my old friends on my team. He and I went a long way back and had worked together at a previous employer. We had eaten lunch together for years in a physical office. I allowed myself to be just a little vulnerable with him about how much I was struggling to get back in the saddle. I found our raw conversations to be a small source of life.

I trusted him in a way I didn't trust my boss. I knew that he cared about me no matter how I was performing at work. Having his avatar beside mine on an unfinished google doc felt invigorating. Together we quickly put together a solid proposal for the next phase of the JS bundler project that we both believed in.

With him in my court I felt less afraid to present the proposal to my boss. I presented it to her and sought feedback. I could intuitively tell she wasn't impressed. Over time I was able to sus out how she really felt. She thought we should shelve the work in favor of something else more pressing but she was reluctant to say it directly. Eventually I shelved the project proposal in favor of another JS modularity project. She applauded the decision publicly. The whole experience left me feeling dizzy. Regardless, I put my head down and got to work on the new project.

In hindsight the pivot ended up being the right call. I don't know why my boss wasn't more straightforward. I never talked directly to her about it. We're more alike than not.

She was promoted into a more visible role and I got a new manager. I really liked my new manager. He did something right out the gate that suggested he might be a different kind of manager. He sought vulnerability.

During one of his early meetings at a team onsite he asked the team, "for this meeting I'd like us to try and introduce ourselves a little differently. If you're comfortable, I'd like us to try and be 10% more vulnerable than we normally would in a work setting." I remember feeling a mix of anxiety and excitement rise in my chest. I sat pondering what I would share. I decided to go for more than 10%. I shared about how my marriage had almost collapsed a couple years prior and a taste of how painful it was. Some of my coworkers shared deeper things I'd never heard in a work setting. It was awkward. It was beautiful.

That memory springs forth from my imagination as I consider my favorite moments at Stripe. It wasn't my project successes. It wasn't my shipped email being mentioned by Patrick. It was getting to know the people I work with a little more closely.

Time passed and my new project was another slam dunk. Review time came and I got an exceeds expectations. I was shocked in a good way. More surprising still was how quickly the jolt of motivation from the rating passed. It felt good to be rewarded for my performance but I was increasingly aware of how little I cared for the recognition.

Still more time passed and then came the depression. I found myself increasingly demotivated in all aspects of my life. I could hardly even muster the energy to play video games (my usual haunt). Some evenings I would literally sit and stare at a wall. My sleep went to shit.

I was stunned. I couldn't recall ever being depressed as an adult. I'd had slumps before but this felt different. I'd experienced something like that as a young teenager but doesn't time heal all wounds? Apparently not for me. I felt increasingly helpless in the presence of a faceless enemy.

I started noticing that "run" weeks for me often left our backlog larger than when I'd started. The feeling of letting my team down sunk in deeper. It sunk into a place I felt I had no control over. I tried cutting out distractions. I DNS blocked Hacker News and Twitter. I stopped reading google news. That helped a bit but even that failed eventually. I managed to stay off them but I was still depressed.

It was extremely difficult because I really loved my team _and_ the work I was doing. I'd get little moments where my mind felt hydrated. I would briefly get into the flow. Code, documents, and Slack replies to tough questions would stream out of me. It became more and more rare and I knew it. All my tactics were failing. I had to do something more serious.

I did the unthinkable. I told my team I was struggling with depression and took some time off. I remember the feeling in my body leading up to the meeting. My stomach was churning. I felt queasy. "Am I really doing this? Am I really this weak?" were a small sampling of the thoughts running through my head. By that point another possibility had started to take root alongside the others. Perhaps weakness hides the path to what I'm searching for.

My team was extremely supportive. I felt such care and understanding from them it was the second time I let myself shed a tear about something at work. That time I didn't have to crawl into the closet.

I went back to work. Months passed leading up to the last couple weeks. I've found myself again unable to sleep and rest properly. By now I've seen the cycle enough to know that another round of relief and invigoration would be only temporary. I'm left with an alternative that excites and terrifies me. It's time to step without knowing what comes next.

I'll end with a poem that's haunted me this year. It's by the late John O'Donohue from his book _To Bless the Space Between Us_:

> The mind of time is hard to read.  
> We can never predict what it will bring,  
> Nor even from all that is already gone  
> Can we say what form it finally takes;  
> For time gathers its moments secretly.  
> Often we only know it’s time to change  
> When a force has built inside the heart  
> That leaves us uneasy as we are.

> Perhaps the work we do has lost its soul,  
> Or the love where we once belonged  
> Calls nothing alive in us anymore.

> We drift through this gray, increasing nowhere  
> Until we stand before a threshold we know  
> We have to cross to come alive once more.

> May we have the courage to take the step  
> Into the unknown that beckons us;  
> Trust that a richer life awaits us there,  
> That we will lose nothing  
> But what has already died;  
> Feel the deeper knowing in us sure  
> Of all that is about to be born beyond  
> The pale frames where we stayed confined,  
> Not realizing how such vacant endurance  
> Was bleaching our soul’s desire.

Thank you for listening to my story.

Love,  
Jon de la Motte
