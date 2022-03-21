# gitbook-plugin-css-passenger

Transmit css passenger to the destination.

## Install

By npm:

``` bash
npm install gitbook-plugin-css-passenger
```

By gitbook-cli:

``` bash
gitbook install css-passenger
```

## Usecases

When you writing a **"table"** under Gitbook, you may like this:

```
| Name | Description | Example |
| :---: | --- | --- |
| context1 | description of context1 | Something very long long long long long long long long long long long long long long long long long ... |
| context2 | description of context2 | Something very long long long long long long long long long long long long long long long long long ... |
| context3 | description of context3 | Something very long long long long long long long long long long long long long long long long long ... |
```

The result may be look like this:

| Name | Description | Example |
| :---: | --- | --- |
| context1 | description of context1 | Something very long long long long long long long long long long long long long long long long long ... |
| context2 | description of context2 | Something very long long long long long long long long long long long long long long long long long ... |
| context3 | description of context3 | Something very long long long long long long long long long long long long long long long long long ... |

If you want the words in **"Description"** column not be automatic wrapped, How to?

CSS properties `white-space: nowrap;` may be help, you can write in your global css file:

``` css
table tbody tr td:nth-child(2) {
    white-space: nowrap;
}
```

In this case the second column need to be wrapped, in another case it's not certain which column. Ii't a problem.

Then our plugin help you. Since markdown syntax support embedded HTML, we can give a "empty" element to the writing, now you can write like this:

``` html
<div class="css-passenger" data-class="nw2"></div>

| Name | Description | Example |
| :---: | --- | --- |
| context1 | description of context1 | Something very long long long long long long long long long long long long long long long long long ... |
| context2 | description of context2 | Something very long long long long long long long long long long long long long long long long long ... |
| context3 | description of context3 | Something very long long long long long long long long long long long long long long long long long ... |
```

The `<div>` is not display. But it's attribute `data-class` will pass to the next element as className. Now using Browser's developer-tools, you can fing the table has one more className "nw2". That's what the plugin done.

Our style file let `table.nw2` 's second column not be wrapped. Else if you want other column not be wrapped too, just add more class:

``` html
<div class="css-passenger" data-class="nw1 nw2"></div>

<div class="css-passenger" data-class="nw1 nw2 nw3"></div>

...
```

In my case, the stylesheet maybe:

``` css
table.nw1 tbody tr td:nth-child(1) {
    white-space: nowrap;
}

table.nw2 tbody tr td:nth-child(2) {
    white-space: nowrap;
}

table.nw3 tbody tr td:nth-child(3) {
    white-space: nowrap;
}

table.nw4 tbody tr td:nth-child(4) {
    white-space: nowrap;
}
```

I use `table` element as a exampla, but you can use with any element if you not satisfy with the default style rendered by your morkdown renderer. Tank you!
