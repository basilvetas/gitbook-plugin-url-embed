URL Embed Gitbook Plugin
==============

This plugins requires gitbook `>=2.0.0`.

### Install

Add this to your `book.json`, then run `gitbook install`:

```
{
    "plugins": ["url-embed"]
}
```

### Usage

The plugin allows you to embed dynamic content in your Gitbook as an iframe, and if you generate a PDF or ePub version of the book, it will instead insert an image of the corresponding content.

The plugin expects that you will have a .png image in your /assets/ folder with a name that matches the path of the url. For instance:

```
@misc{ROC,
  TITLE = {The Rights of Christ according to the principles and doctrines of the Children of Peace},
  AUTHOR = {Willson, David},
  YEAR = {1815},
  URL = {https://archive.org/details/cihm_62453}
}

@misc{TLW,
  TITLE = {The Late War between the United States and Great Britain},
  AUTHOR = {Hunt, Gilbert J.},
  YEAR = {1816},
  URL = {https://github.com/wordtreefoundation/books/blob/master/pseudo_biblical/The%20Late%20War%20-%20Gilbert%20Hunt%20-%201816.md}
}
```

Then, when you want to cite the reference to `The Late War` in the bib file, use the following in the content of a page:

```
{{ "TLW" | cite }}
```

The referenced pages or any other additional information may be used as a string passed to the `cite` filter:

```
{{ "TLW" | cite("p.~121") }}
```

The argument, "p. 211", will show up inside the same brackets. 
Note the tilde in [p.~211], which replaces the end-of-sentence spacing with a non-breakable inter-word space.
This non-breakable inter-word space is inserted because the end-of-sentence spacing would be too wide,
and "p." should not be separated from the page number.

You can also add a table of references with:

```
{% references %} {% endreferences %}
```

The table of references should be included in a file called References.md

If you name the file anything other than References.md, it will break the links from the individual citations to this references page (currently, each citation will link to References.html#cite- plus the index of that citation)

Only used literature is included in the table of references. They are ordered by the usage within the text.

Citations are numbered by their index in the literature.bib file and will appear in the same order in your references page

### Limitations

The plugin currently only supports IEEE referencing style.
Feel free to submit pull requests to add additional styles.

