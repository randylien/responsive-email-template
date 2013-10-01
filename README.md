# Responsive Email Layout
---

## Preface
---

For people who need to create a RED(Responsive Email Design) for newsletter.

This document might help you...

Of course, the biggest challenges are **Outlook**, **IE**, Blackberry, and **OLD Androids**.



## Tools
---

Undoubtedly, Dreamweaver is the best tool to create table layout.
You could review your table layout easily.


## Doctype
---

You could choose to use these two kinds of DOCTYPE in your document.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

or

<!DOCTYPE html>

```

Use HTML5 Doctype will make your box model consistantly.

P.S. Make all brower happen image bugs.

Accorind to EmailOnAcid's suggestion, you should remove your doctype and test it on ie6, ie7, ie8 and other modern browsers then test with doctype on Hotmail.

And then you chould test with EmailOnAcid to make sure everything goes well.



## Reset
---

Mailchimp has provided a good reset styles set.

[Mailchimp - Reset Styles](http://templates.mailchimp.com/development/css/reset-styles)

P.S. If your email can't display correctly on **Blackberry**, try to remove this rule.

```
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
```


## Control your viewport
---

```
<meta name="viewport" content="width=device-width, initial-scale=1"> 
```


## Ignore old Gmail.app bugs on your Android
---

If you encounter layout issues in old Gmail.app on Android devices.

Don't waste time on it.




## Two level table deep, at least!
---

Prevent email client strip your body tag, you need to put your content in a table to wrapper it.

Use second table to control your content.



## Best practices for your TABLE
---

Always set table's HTML attributes cellpadding and cellspacing to zero by default.

```
< table class="mail-wrapper" border="0" cellpadding="0" cellspacing="0">
...
</table>
```

cellpadding is your good friend to separate elements.
 

## Set your width
---

For better layout control, set your width attribute on HTML.

Control width in your media queries for mobile.


## Don't use space image
---

If you would like to set gaps between elements, don't use Space images, try this way:

```
<td style="font-size: 0; line-height: 0; border-top: 3px solid red;" height="10">&nbsp;</td> 
```


## Set your comfortable width
---

If your maximum width targets 600px, you would like to centre your content with 30px spaces in two sides.

Minor them (600-30*2) and set your width with 540px.




## Best practice for your img tag
---

Due to browsers issue, img tag might have unpredictable spaces around itself.

You could set img tag's style to `display:block`.

```
<img style="display:block;" src="http://placehold.it/260x80">
```


## Taming your font/background color!
---

Suprisingly, font tag could enforce your text color to anything you want!

HTML bgcolor attribute is your good friend to change background color.

```
<font color="#ffffff">Watch now</font>
<table bgcolor="#ffffff"></table>

```


## Progress enhancement
---

You could use CSS3 for your Mobile Web.

Keep in mind and create things awesomed !



## Tools you might need
---
[Mailchimp's Inline CSS service](http://beaker.mailchimp.com/inline-css)

[Campaignmonitor's CSS compatible charts](http://www.campaignmonitor.com/css/)

[Zurb's Responsive Email Templates](http://zurb.com/playground/responsive-email-templates)




## Reference
---

[CSS-Tricks - Complete guide table element](http://css-tricks.com/complete-guide-table-element/)

[Campaign Monitor - Correct doctype to use in HTML email](http://www.campaignmonitor.com/blog/post/3317/correct-doctype-to-use-in-html-email/)

[Email On Acid - DOCTYPE, the black sheep of HTML email design](http://www.emailonacid.com/blog/details/C13/doctype_-_the_black_sheep_of_html_email_design)

[Campaign Monitor - Using Phone numbers in the HTML email](http://www.campaignmonitor.com/blog/post/3571/using-phone-numbers-in-html-email/)

[CSS-Tricks - Pointer Events Current Nav](http://css-tricks.com/pointer-events-current-nav/)

[Mailchimp - Reset Styles](http://templates.mailchimp.com/development/css/reset-styles)

[Mailchimp - HTML](http://templates.mailchimp.com/development/html)

http://templates.mailchimp.com/development/media-queries

http://templates.mailchimp.com/design/mobile-friendliness/

[Wikipedia - List of display pixel density](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density)

[Nettuts - Responsive Email Template tutorial](http://hub.tutsplus.com/tutorials/build-an-html-email-template-from-scratch--webdesign-12770)


