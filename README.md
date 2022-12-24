<img src="https://i.imgur.com/kDmfg8e.png" />

<h1 style="color:#f70f49;font-weight:700">NOTICE</h1>

**CHANGING THE FOLDER NAME CAN AND WILL MAKE THE SCRIPT UNUSABLE**.

<br />

<h1 style="color:#7a0af2;font-weight:700">Quick overview</h1>

A standalone **HUD** ( Heads-Up Display ) which gives users the ability to set their own preferences by toggling elements on which can or shouldn't be displayed on screen with custom thresholds upon which the element should disappear.

<br />

<h1 style="color:#7a0af2;font-weight:700">Must knows and implementation</h1>

<h2 style="color:#f70f49">IMPORTANT!</h3>

You must convert gauges to fit in the range **0 -> 100**, otherwise the wave background will be out of sync to real data.

<br />

In the course of making it match your framework, you will find helper functions which have comments on what they are intended to be used for, as well as there is a specific `example/` folder which shows you one of the ways to integrate your framework. **THE FRAMEWORK USED IN THE EXAMPLE IS A CUSTOM ONE. IT WILL NOT WORK**.

Key factors:

- Getting the character data
- Converting the data to be in the range of **0 -> 100**
- Sending it to the ui with the specified template ( Can be found inside `aq-hud/app/shared/helpers.lua` )

*The order of the elements corresponds to the order you sent them.

<br />

<h1 style="color:#7a0af2;font-weight:700">Translations</h1>

- File location: `aq-hud/src/public/language.json`

<br />

<h1 style="color:#7a0af2;font-weight:700">Tech stack & development</h1>

- Node version: **16.x.x**
- JavaScript framework: [React.JS](https://reactjs.org/)
- Type safety: [TypeScript](https://www.typescriptlang.org/)
- Component library: [Chakra-UI](https://chakra-ui.com/)
- Replacement for *fetch*: [Axios](https://axios-http.com/docs/intro)

<br />

<h1 style="color:#7a0af2;font-weight:700">Issue reporting & Feature implementation</h1>

The GitHub repo is public and is open for merge requests. Maintain the logic of not breaking something else by implementing something. If you are planning on creating a merge request, please follow the template provided below.

<br />

Merge request purpose: ***Patch*** | ***Feature***

Reason: ***A short explanation of the merge request.***
