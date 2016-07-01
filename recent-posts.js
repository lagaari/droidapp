//<![CDATA[

//recent posts
function showrecentpostswiththumbs(json){document.write('<ul class="recent_posts_with_thumbs">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='http://www.webaholic.co.in/other/no-image.jpg';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Jan";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Apr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Aug";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dec";document.write('<li class="clearfix">');if(showpostthumbnails==true)
document.write('<img class="recent_thumb" src="'+thumburl+'"/>');document.write('<b><a href="'+posturl+'" target ="_top">'+posttitle+'</a></b><br>');if("content"in entry){var postcontent=entry.content.$t;}
else
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==true){if(postcontent.length<numchars){document.write('<p>');document.write(postcontent);document.write('</p>');}
else{document.write('<p>');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('</p>');}}
var towrite='';var flag=0;document.write('');if(showpostdate==true){towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}
if(showcommentnum==true)
{if(flag==1){towrite=towrite+' | ';}
if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
if(displaymore==true)
{if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">more أƒâ€ڑأ‚آ»</a>';flag=1;;}
document.write(towrite);document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}

// recent posts by label Script
function labelthumbs(e){document.write('<ul id="label_with_thumbs">');for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}var l;try{l=n.media$thumbnail.url}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png"}var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);var y=new Array;y[1]="Jan";y[2]="Feb";y[3]="Mar";y[4]="Apr";y[5]="May";y[6]="June";y[7]="July";y[8]="Aug";y[9]="Sept";y[10]="Oct";y[11]="Nov";y[12]="Dec";document.write('<li class="recent-box">');if(showpostthumbnails==true)document.write('<div class="imageContainer"><a href="'+i+'" target ="_top"><img class="label_thumb" src="'+l+'" title="'+r+'" alt="'+r+'"/></a></div>');document.write('<a class="label_title" href="'+i+'" target ="_top">'+r+"</a>");var w="";var E=0;document.write("");p=n.published.$t;var S=[1,2,3,4,5,6,7,8,9,10,11,12];var x=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];var T=p.split("-")[2].substring(0,2);var N=p.split("-")[1];var C=p.split("-")[0];for(var k=0;k<S.length;k++){if(parseInt(N)==S[k]){N=x[k];break}}var L=T+" "+N+" "+C;if(showpostdate==true){document.write('<div class="toe"><a href="'+i+'" class="post-date">'+L+"</a>")}if(showcommentnum==true){if(E==1){w=w+" | "}if(u=="1 Comments")u="1 Comment";if(u=="0 Comments")u="No Comments";w=w+u;E=1;document.write('<a class="recent-com" href="'+f+'" target ="_top">'+u+"</a></div>");}if("content"in n){var A=n.content.$t}else if("summary"in n){var A=n.summary.$t}else var A="";var O=/<\S[^>]*>/g;A=A.replace(O,"");if(showpostsummary==true){if(A.length<numchars){document.write("");document.write(A);document.write("")}else{document.write("");A=A.substring(0,numchars);var M=A.lastIndexOf(" ");A=A.substring(0,M);document.write('<p class="post-summary">'+A+"...</p>")}}document.write("</li>");if(t!=numposts-1)document.write("")}document.write("</ul>")};$(document).ready(function() {$('.label_thumb').attr('src', function(i, src) {return src.replace( 's72-c', 's1600' );});});$(document).ready(function() {$('.label_thumb').attr('src', function(i, src) {return src.replace( 'default.jpg', 'mqdefault.jpg' );});});



//]]>
