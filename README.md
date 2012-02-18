#jQuery Cantor Set
A Cantor Set algorithm that uses jQuery and DOM instead of actual math.

##Whaaaa?

Instead of calculating the nth term of the Cantor Set, this algorithm uses the previous row of the set to draw the current one. The algorithm hinges on the fact that, in the Cantor Set, once a 'segment' has been turned 'off', it will always be 'off'.

##How it works

- Draw the first row. It's easy, only one segment.
- Take that row and loop through the segments.
- If a segment is 'off', draw that segment as it currently is. Once 'off', always 'off'.
- If a segment of 'on', split the segment into three segments, turning the middle one 'off'.
- Stitch everything together and draw the whole row.
- Repeat the process with the new row.
- Continue recursively until the current row's segments' widths (whew!) are less than the tolerance.

##How to use the code

The cantor_set() function is a jQuery plugin that can be applied to any block-level element.

```javascript
$('#selector').cantor_set();
```

You can also set a width and/or a tolerance. If you set a tolerance less than or equal to 0, it will be reset to 1 (The limit of the Cantor Set is 0, so setting it to 0 or below results in infinite recursion).

```javascript
$('#selector').cantor_set({
    width: 1000,
    tolerance: 5
});
```

Then, you'll need a bit of CSS to make everything stand out. The basic CSS is below.

```css
.cantor-set-row { float:left; clear:left; }
.cantor-set-segment { float:left; height:20px; }
.cantor-set-segment-on { background:#000; }
.cantor-set-segment-off { background:none; }
```

