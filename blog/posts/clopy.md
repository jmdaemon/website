---
title: 'Clopy: A General Purpose Templating Program'
date: '2022-01-30'
---

When writing multiple programs or creating software or tools, you'll often reuse lots of libraries, build systems,
and general project setup files. In the case of python these would be files such as `setup.py`, the `LICENSE`, the project `README.md`,
and of course your source code.

Often when you start writing many programs, or start many projects, these files will have to be created over and over
again for each new project.

What if you could write up a general project initializer like `npm` that would generalize to multiple languages,
and also have fine-grained control to be able to define which files are created in your new project?

So I've made a tool called `clopy`.
With Clopy, you can make a repository with the some template files. These files will get initialized at runtime
with user specified inputs. These inputs will then initialize the files into some destination directory.

To get started just run
``` bash
clopy new [your template directory here]
```

You pass in the file path to where your templates are stored, and `clopy` will go through
that directory and look for a `template.py` file. This template file is used
to pass control from the executable over to your template file where you will
prompt the user for input, and initialize the template.

Once the template is initialized, it is then left up to you where you decide
where the output files go. It's still a work in progress, and I haven't
yet added the extra command line argument to `clopy` to decide where
the destination directory is.

You can check out the rest of the project on GitHub [here](https://github.com/jmdaemon/clopy)

