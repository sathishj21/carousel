

###Getting started

A base project framework has been setup to get you up and running quickly.

Steps:

If you don't have Grunt installed globally on your system run:

```
npm install -g grunt-cli
```

Once grunt's installed run

```
npm install
grunt server
```

####grunt server

This is the only task needed. What does it do? Launches a http server @ localhost:9000 Runs a watch task with the following functions & livereload

app/sass/*.scss: Compass
app/assets/js/*.js: browserify with transform [reactify, {es6: true}]


###How to create a git bundle

`git bundle create path/to/where/you/want/to/save/filename.bundle master`

please note, if you have created a new branch please replace master with the name of your branch
