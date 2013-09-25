Responsive Email Layout
---
Of course, the biggest challenges are **Outlook**, **IE**, Blackberry, and **OLD Androids**.




## Doctype
---
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

or

<!DOCTYPE html>

```
Use HTML5 Doctype will make your box model consistantly.
P.S. Make all brower happen image bugs.

Accorind to EmailOnAcid's suggestion, you should remove your doctype and test it on ie6, ie7, ie8 and other modern browsers then test with doctype on Hotmail.
Finally you chould test with Acid.



## Reset
---

[Mailchimp - Reset Styles](http://templates.mailchimp.com/development/css/reset-styles)

P.S.If your email can't display correctly on **Blackberry**, try to remove this rule.

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
You can't pass




## Two level table deep, at least!
---
Prevent email client strip your body tag, you need to put your content in a table to wrapper it.

Use second table to control your content.

## Best practices for your TABLE
---

```
< table class="mail-wrapper" border="0" cellpadding="0" cellspacing="0">
...
</table>
```

cellpadding is your good friend to separate elements.
 

## Set your width
---
For better layout control, set your width attribute on HTML



## Don't use space image
---
If you would like to set gaps between elements, don't use Space images, try this way:

```
<td style="font-size: 0; line-height: 0; border-top: 3px solid red;" height="10">&nbsp;</td> 
```


## Set your comfortable width
---
If your maximum width targets 600px, you would like to centre your content with 30px spaces in two sides.

Minor it and set your width with 540px




## Best practice for your img tag
---


```
<img style="display:block;" src="http://placehold.it/260x80">
```


## Taming your font/background color!
---
```
<font color="#ffffff">Watch now</font>
< table bgcolor="#ffffff"></table>

```


## Progress enhancement
---





## Tools you might need
---
[Mailchimp's Inline CSS service](http://beaker.mailchimp.com/inline-css)

[Campaignmonitor's CSS compatible charts](http://www.campaignmonitor.com/css/)

[Zurb's Responsive Email Templates](http://zurb.com/playground/responsive-email-templates)




## Reference
---

[Campaign Monitor - Correct doctype to use in HTML email](http://www.campaignmonitor.com/blog/post/3317/correct-doctype-to-use-in-html-email/)

[Email On Acid - DOCTYPE, the black sheep of HTML email design](http://www.emailonacid.com/blog/details/C13/doctype_-_the_black_sheep_of_html_email_design)

[Campaign Monitor - Using Phone numbers in the HTML email](http://www.campaignmonitor.com/blog/post/3571/using-phone-numbers-in-html-email/)

[CSS-Tricks - Pointer Events Current Nav](http://css-tricks.com/pointer-events-current-nav/)

[Mailchimp - Reset Styles](http://templates.mailchimp.com/development/css/reset-styles)

http://templates.mailchimp.com/development/html
http://templates.mailchimp.com/development/media-queries
http://templates.mailchimp.com/design/mobile-friendliness/

[Wikipedia - List of display pixel density](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density)

[Nettuts - Responsive Email Template tutorial](http://hub.tutsplus.com/tutorials/build-an-html-email-template-from-scratch--webdesign-12770)


