function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:aa(a)};for(var d=[];!(b=a.next()).done;)d.push(b.value);a=d}return a}zzfx=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];return zzfxP(zzfxG.apply(null,fa(b)))};
zzfxP=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];d=zzfxX.createBufferSource();var k=zzfxX.createBuffer(b.length,b[0].length,zzfxR);b.map(function(e,n){return k.getChannelData(n).set(e)});d.buffer=k;d.connect(zzfxX.destination);return d};
zzfxG=function(a,b,d,k,e,n,t,m,h,P,ba,pa,Ba,da,ma,qa,Ia,ra,fb,K,ca,sa,ta,ia,V,Q,ua,ea,Ra,gb,tb,hb,ib,N,jb,kb,R,Ca,Sa){a=void 0===a?1:a;b=void 0===b?.05:b;d=void 0===d?220:d;t=void 0===t?0:t;m=void 0===m?1:m;h=void 0===h?0:h;P=void 0===P?0:P;ba=void 0===ba?0:ba;pa=void 0===pa?0:pa;Ba=void 0===Ba?0:Ba;da=void 0===da?0:da;ma=void 0===ma?0:ma;qa=void 0===qa?0:qa;ra=void 0===ra?1:ra;K=void 0===K?zzfxR:K;ca=void 0===ca?99+(void 0===k?0:k)*K:ca;sa=void 0===sa?(void 0===e?0:e)*K:sa;ta=void 0===ta?(void 0===
n?.1:n)*K:ta;ia=void 0===ia?(void 0===fb?0:fb)*K:ia;V=void 0===V?(void 0===Ia?0:Ia)*K:V;Q=void 0===Q?2*Math.PI:Q;ua=void 0===ua?function(Vb){return 0<Vb?1:-1}:ua;ea=void 0===ea?ca+ia+sa+ta+V:ea;Ra=void 0===Ra?h*=500*Q/Math.pow(K,2):Ra;gb=void 0===gb?d*=(1+2*b*Math.random()-b)*Q/K:gb;tb=void 0===tb?ua(ma)*Q/4:tb;hb=void 0===hb?0:hb;ib=void 0===ib?0:ib;N=void 0===N?0:N;jb=void 0===jb?0:jb;kb=void 0===kb?0:kb;R=void 0===R?0:R;Ca=void 0===Ca?1:Ca;for(Sa=void 0===Sa?[]:Sa;N<ea;Sa[N++]=R)++kb>100*qa&&(kb=
0,R=hb*d*Math.sin(ib*ma*Q/K-tb),R=ua(R=t?1<t?2<t?3<t?Math.sin(Math.pow(R%Q,3)):Math.max(Math.min(Math.tan(R),1),-1):1-(2*R/Q%2+2)%2:1-4*Math.abs(Math.round(R/Q)-R/Q):Math.sin(R))*Math.pow(Math.abs(R),m)*a*zzfxV*(N<ca?N/ca:N<ca+ia?1-(N-ca)/ia*(1-ra):N<ca+ia+sa?ra:N<ea-V?(ea-N-V)/ta*ra:0),R=V?R/2+(V>N?0:(N<ea-V?1:(N-ea)/V)*Sa[N-V|0]/2):R),hb+=1-da+1E9*(Math.sin(N)+1)%2*da,ib+=1-da+1E9*(Math.pow(Math.sin(N),2)+1)%2*da,d+=h+=500*P*Q/Math.pow(K,3),Ca&&++Ca>pa*K&&(d+=ba*Q/K,gb+=ba*Q/K,Ca=0),Ba&&++jb>Ba*
K&&(d=gb,h=Ra,jb=1,Ca=Ca||1);return Sa};zzfxV=.5;zzfxR=44100;zzfxX=new (top.AudioContext||webkitAudioContext);
zzfxM=function(a,b,d,k){for(var e,n,t,m,h,P,ba,pa,Ba,da,ma,qa,Ia,ra,fb=0,K=[],ca=[],sa=[],ta=0,ia=0,V=1,Q={},ua=zzfxR/(void 0===k?125:k)*60>>2;V;ta++)K=[V=pa=qa=0],d.map(function(ea,Ra){ba=b[ea][ta]||[0,0,0];V|=!!b[ea][ta];ra=qa+(b[ea][0].length-2-!pa)*ua;Ia=Ra==d.length-1;n=2;for(m=qa;n<ba.length+Ia;pa=++n){h=ba[n];Ba=n==ba.length+Ia-1&&Ia||da!=(ba[0]||0)|h|0;for(t=0;t<ua&&pa;t++>ua-99&&Ba?ma+=(1>ma)/99:0)P=(1-ma)*K[fb++]/2||0,ca[m]=(ca[m]||0)-P*ia+P,sa[m]=(sa[m++]||0)+P*ia+P;h&&(ma=h%1,ia=ba[1]||
0,(h|=0)&&(K=Q[[da=ba[fb=0]||0,h]]=Q[[da,h]]||(e=[].concat(fa(a[da])),e[2]*=Math.pow(2,(h-12)/12),0<h?zzfxG.apply(null,fa(e)):[])))}qa=ra});return[ca,sa]};function ha(a){return Array.from(Array(a).keys())}var c=[ha(18).map(function(a){return 2==a?15:0}),ha(18).map(function(a){return 2==a?15:0}),ha(18).map(function(a){return 10==a?15:0==a?1:0}),ha(18).map(function(a){return 0==a?2:0==a%4&&12!=a?15:0})];c[1][14]=15;
function ja(a){return ha(18).map(function(b){return 0==b?3:[2,6,10,14].includes(b)?a+[0,.1,.5,.7][[2,6,10,14].indexOf(b)]:1==b?-.1:0})}
var ka=[ja(18),ja(22),ja(24),ja(30)],la=[8,9,10,11,8,9,10,11],na=[[[,0,86,,,,,.7,,,,.5,,6.7,1,.05],[.7,0,270,,,.12,3,1.65,-2,,,,,4.5,,.02],[.4,0,2200,,,.04,3,2,,,800,.02,,4.8,,.01,.1],[,0,130.81,,,1]],[[ka[0]],[ka[1]],[ka[2]],[ka[3]],[ka[0],c[0],c[2]],[ka[1],c[0],c[2]],[ka[2],c[0],c[2]],[ka[3],c[1],c[2]],[ka[0],c[0],c[2],c[3]],[ka[1],c[0],c[2],c[3]],[ka[2],c[0],c[2],c[3]],[ka[3],c[1],c[2],c[3]]],[0,1,2,3,0,1,2,3,4,5,6,7,4,5,6,7].concat(la,la,la,la),120];
function oa(a,b,d){this.x=a;this.y=b;this.z=d}function va(a,b,d){return a.x*b+a.y*d}var wa=[new oa(1,1,0),new oa(-1,1,0),new oa(1,-1,0),new oa(-1,-1,0),new oa(1,0,1),new oa(-1,0,1),new oa(1,0,-1),new oa(-1,0,-1),new oa(0,1,1),new oa(0,-1,1),new oa(0,1,-1),new oa(0,-1,-1)],xa=ha(256).map(function(){return Math.trunc(255*Math.random())}),ya=Array(512),za=Array(512);
function Aa(a){0<a&&1>a&&(a*=65536);a=Math.floor(a);256>a&&(a|=a<<8);for(var b=0;256>b;b++){var d=b&1?xa[b]^a&255:xa[b]^a>>8&255;ya[b]=ya[b+256]=d;za[b]=za[b+256]=wa[d%12]}}Aa(0);function Da(a,b,d){return(1-d)*a+d*b}function Ea(a,b){var d=Math.floor(a),k=Math.floor(b);a-=d;b-=k;d&=255;k&=255;var e=a*a*a*(a*(6*a-15)+10);return Da(Da(va(za[d+ya[k]],a,b),va(za[d+1+ya[k]],a-1,b),e),Da(va(za[d+ya[k+1]],a,b-1),va(za[d+1+ya[k+1]],a-1,b-1),e),b*b*b*(b*(6*b-15)+10))}
function Fa(a,b){this.x=a;this.y=b;this.g=!1;this.l={type:"NONE"};this.a={type:"NONE"};this.isVisible=!1;this.o={x:0,y:0};this.D=0}function f(a,b,d,k){this.r=a;this.R=b;this.O=d;this.V=k}function Ga(a){return"#"+Ha(a.r)+Ha(a.R)+Ha(a.O)+Ha(a.V)}function Ja(a,b){return new f(Math.min(255,Math.trunc(a.r*b)),Math.min(255,Math.trunc(a.R*b)),Math.min(255,Math.trunc(a.O*b)),a.V)}var Ka=document.getElementById("canv"),g=Ka.getContext("2d");g.imageSmoothingEnabled=!1;
var l=[],p=[],La=[{x:1,y:0},{x:.5,y:.866025},{x:-.5,y:.866025},{x:-1,y:0},{x:-.5,y:-.866025},{x:.5,y:-.866025}],q=1,Ma=new Map;Ma.set("ROCK",new f(100,100,100,255));Ma.set("IRON",new f(165,42,42,255));Ma.set("COPPER",new f(184,115,51,255));Ma.set("CARBON",new f(18,18,18,255));Ma.set("LITHIUM",new f(169,169,169,255));Ma.set("SILICON",new f(0,153,204,255));Ma.set("PLUTONIUM",new f(0,255,0,255));var r=document.getElementById("0"),Na=new Map;Na.set("RADAR",document.getElementById("1"));
Na.set("CONSTRUCTOR",document.getElementById("2"));Na.set("SOLAR",document.getElementById("3"));Na.set("MINER",document.getElementById("4"));Na.set("BATTERY",document.getElementById("5"));Na.set("RTG",document.getElementById("6"));Na.set("TELEDEPOT",document.getElementById("7"));Na.set("ROBOSHOP",document.getElementById("8"));Na.set("GENERATOR",document.getElementById("9"));
function Oa(){var a=.71*u,b=v,d=l.find(function(e){return e.g});l.filter(function(e){return 11>=Math.abs(e.x-d.x)}).sort(function(e,n){return e.height-n.height}).sort(function(e,n){return e.y-n.y}).sort(function(e,n){return e.isVisible-n.isVisible}).forEach(function(e){e.o.x=90*e.x+w/2-90*d.x;e.o.y=41.5692*e.y+a+(0!=e.x%2?20.7846:0);g.lineWidth=3;if(e.isVisible){e.o.y-=e.height;var n=new f(Math.max(0,e.I.r*(1-e.D/10)),Math.min(255,e.I.R*(1+e.D/10)),Math.max(0,e.I.O*(1-e.D/10)),255);g.strokeStyle=
0==e.D?Ga(Ja(n,.2)):Ga(Ja(n,1.5));g.fillStyle=Ga(n);Pa(e.o);if("NONE"!=e.l.type){n=Ma.get(e.l.type);g.lineWidth=3;g.fillStyle=Ga(n);g.strokeStyle=Ga(Ja(n,.4));n=e.l.lines;g.beginPath();g.moveTo(n[0].x+e.o.x,n[0].y+e.o.y);for(var t=1;t<n.length;t++)g.lineTo(n[t].x+e.o.x,n[t].y+e.o.y);g.closePath();g.fill();g.stroke()}n=Na.get(e.a.type);void 0!=n?g.drawImage(n,Math.trunc(e.o.x-n.width/2),Math.trunc(e.o.y-.6*n.height)):null}else g.strokeStyle="#000000",g.fillStyle="#AAAAAA",Pa(e.o),g.fillStyle="#000000",
g.font="24px Arial",g.textAlign="center",g.textBaseline="middle",x("404",e.o.x,e.o.y)});var k=d.o;g.drawImage(r,Math.trunc(k.x-r.width*q/2+b.x),Math.trunc(k.y-r.height*q/2-10+b.y+5*Math.sin(Qa/500)),Math.trunc(r.width*q),Math.trunc(r.height*q))}function Ta(){var a=l.filter(function(b){return"RADAR"==b.a.type});l.forEach(function(b){return b.isVisible=a.some(function(d){return Math.abs(d.x-b.x)<=Ua})})}
function Va(){var a=.05*w,b=.07*u;g.save();g.translate(a,b);g.strokeStyle="#A2A2A2";g.beginPath();g.moveTo(0,-25);g.lineTo(-25,25);g.lineTo(25,25);g.closePath();g.stroke();g.fillStyle="#FF0000";g.beginPath();g.arc(0,-25,12.5,0,2*Math.PI);g.fill();g.fillStyle="#FFF500";g.beginPath();g.arc(-25,25,12.5,0,2*Math.PI);g.fill();g.fillStyle="#0045FF";g.beginPath();g.arc(25,25,12.5,0,2*Math.PI);g.fill();g.restore()}
function Wa(a,b,d,k){var e=.25*d;k=Math.min(1,k);g.save();g.translate(a,b);g.fillStyle=Ga(new f(255-255*k,255*k,0,255));g.fillRect(0,-d*k,e,d*k);g.strokeStyle="#FFFFFF";g.beginPath();g.moveTo(0,-d);g.lineTo(e,-d);g.lineTo(e,0);g.lineTo(0,0);g.closePath();g.stroke();g.restore()}
function Xa(a,b){y=0;var d=l.find(function(e){return e.g}),k=l.find(function(e){return e.x==d.x+a&&e.y==d.y+b});null!=k&&(k.isVisible?Math.abs(k.height-d.height)<=5*Ya?(d.g=!1,k.g=!0,v={x:d.o.x-k.o.x,y:d.o.y-k.o.y},z([A,.1,440,,,.07,,,,,50,.07])):p.push({text:"Incline too steep",time:0}):p.push({text:"Cannot enter unfound tile",time:0}))}function Za(a){1==a.l.value?a.l={type:"NONE"}:(--a.l.value,a.l.lines=$a(a.l.value))}
function ab(a,b){a.a.type=b.type;var d=a.a;switch(b.type){case "RADAR":Ta();break;case "CONSTRUCTOR":d.b=0;d.s=20;d.P=!1;d.f=0;d.K=!1;break;case "MINER":d.v=0;d.L=a.l.type;d.T=50;d.b=0;d.s=10;d.U=!1;d.f=0;break;case "BATTERY":d.b=0;d.s=20;d.f=0;d.M=!1;break;case "GENERATOR":d.J=0,d.W=25,d.f=0,d.S=!1}--b.value;z([A,,191,,,.07,1,1.09,-5.4,,,,,.4,-.4,.3,,.7])}
function bb(a){switch(a.a.type){case "RADAR":var b=l.find(function(d){return d.g});if(0==l.filter(function(d){return Math.abs(d.x-b.x)<=Ua&&"RADAR"==d.a.type&&d!=a}).length){p.push({text:"No other radar in range",time:0});return}cb(a.a.type);a.a={type:"NONE"};Ta();break;case "CONSTRUCTOR":1==a.a.K&&cb(a.a.F.product);cb(a.a.type);break;case "GENERATOR":db("CARBON",a.a.J);cb(a.a.type);break;default:cb(a.a.type)}a.a={type:"NONE"};z([A,,400,,,.07,1,1.09,-5.4,,,,,.4,-.4,.3,,.7])}
function db(a,b){var d=Math.min(eb,b),k=B.find(function(e){return e.type==a});null!=k?(k.value+d>eb&&(d=eb-k.value),k.value+=d):B.push({type:a,value:d});return d}function cb(a){var b=C.find(function(d){return d.type==a});null!=b?b.value+=1:C.push({type:a,value:1})}function Pa(a){g.beginPath();g.moveTo(a.x+60*La[0].x,a.y+24*La[0].y);La.slice(1,La.length).forEach(function(b){return g.lineTo(a.x+60*b.x,a.y+24*b.y)});g.closePath();g.fill();g.stroke()}
function Ha(a){a=Math.trunc(a).toString(16);return 1==a.length?"0"+a:a}
function lb(){var a=55+25*B.length+.05*u,b=[];b.unshift({x:0,y:.29*u});b.unshift({x:.09*w,y:.29*u});b.unshift({x:.1*w,y:.27*u});b.unshift({x:.1*w,y:0});b.unshift({x:0,y:0});b.unshift({x:0,y:.48*u});b.unshift({x:.09*w,y:.48*u});b.unshift({x:.1*w,y:.46*u-.02});b.unshift({x:.1*w,y:.29*u});b.unshift({x:0,y:.29*u});b.unshift({x:0,y:0});b.unshift({x:.39*w,y:0});b.unshift({x:.42*w,y:.04*u});b.unshift({x:.58*w,y:.04*u});b.unshift({x:.61*w,y:0});b.unshift({x:.83*w,y:0});b.unshift({x:.83*w,y:a-.02*u});b.unshift({x:.85*
w,y:a});b.unshift({x:w,y:a});b.unshift({x:w,y:0});b.unshift({x:0,y:0});return b}
function mb(a,b,d){var k=1-d;g.beginPath();g.moveTo(w*(d+.04),u*a);g.lineTo(w*(k-.04),u*a);g.lineTo(w*k,u*(a+.04));g.lineTo(w*k,u*(a+b-.04));g.lineTo(w*(k-.04),u*(a+b));g.lineTo(w*(d+.04),u*(a+b));g.lineTo(w*d,u*(a+b-.04));g.lineTo(w*d,u*(a+.04));g.closePath();g.fill();g.stroke();a+=.02;b-=.04;g.beginPath();g.moveTo(w*(d+.02+.04),u*a);g.lineTo(w*(k-.02-.04),u*a);g.lineTo(w*(k-.02),u*(a+.04));g.lineTo(w*(k-.02),u*(a+b-.04));g.lineTo(w*(k-.02-.04),u*(a+b));g.lineTo(w*(d+.02+.04),u*(a+b));g.lineTo(w*
(d+.02),u*(a+b-.04));g.lineTo(w*(d+.02),u*(a+.04));g.closePath();g.fill();g.stroke()}function nb(a){return l.filter(function(b){var d=b.y-a.y;b=b.x-a.x;return 1==Math.abs(d)&&0==b||0==d&&1==Math.abs(b)||0==a.x%2&&-1==d&&1==Math.abs(b)||0!=a.x%2&&1==d&&1==Math.abs(b)})}
function $a(a){var b=5+Math.trunc(5*Math.random());a/=20;for(var d=12*(Math.random()-.5)*a,k=12*(Math.random()-.5)*a,e=[],n=0;n<b;n++){var t=2*Math.PI/b*n;e.unshift({x:Math.max(-31,Math.min(31,d+(Math.cos(t)*a*60+15*Math.random()*a))),y:Math.max(-19,Math.min(19,k+(Math.sin(t)*a*24+15*Math.random()*a*.4)))})}return e}
function ob(){var a=pb;l=ha(500).flatMap(function(b){return ha(5).map(function(d){return new Fa(b,d)})});l.forEach(function(b){var d=Math.max(0,Math.min(10,Math.trunc(Math.abs((Ea(b.x/10,b.y/10)+1)/2*10))));b.height=5*d;b.I=Ja(a.find(function(k){return k.N.includes(d)}).I,1-(Math.random()-.5)/3);2.5<Math.abs(240-b.x)&&.85<Math.random()?qb(b,"IRON",.4):25<Math.abs(240-b.x)&&.9<Math.random()?qb(b,"COPPER",.5):40<Math.abs(240-b.x)&&.92<Math.random()?qb(b,"CARBON",.6):60<Math.abs(240-b.x)&&.96<Math.random()?
qb(b,"LITHIUM",.6):70<Math.abs(240-b.x)&&.85<Math.random()?qb(b,"SILICON",.5):120<Math.abs(240-b.x)&&.85<Math.random()?(qb(b,"PLUTONIUM",.7),rb(b,4)):.88<Math.random()&&qb(b,"ROCK",.9);80<Math.abs(240-b.x)&&.95<Math.random()&&rb(b,5*Math.random())});l.find(function(b){return 240==b.x}).g=!0;l.filter(function(b){return"NONE"!=b.l.type}).forEach(function(b){return b.l.lines=$a(b.l.value)})}
function qb(a,b,d){a.l={type:b,value:Math.max(10,Math.trunc(15*Math.random()))};nb(a).filter(function(){return Math.random()>d}).forEach(function(k){return k.l={type:b,value:Math.max(5,Math.trunc(a.l.value*Math.random()))}})}function rb(a,b){a.D=b;nb(a).forEach(function(d){return d.D=.8*b})}var sb="Resume;Main Menu;Save Game;Load Game;Mute Music;Mute Sound FX".split(";"),D=0,ub=["New Game","Load Game","Mute Music","Mute Sound FX"],vb=!0,A=0;
function wb(){zzfx.apply(null,[A,.01,593,,.03,0,1,2.04,.1,.1,50,.01,,-.1,,,.06,.96,.08]).start()}function xb(){zzfx.apply(null,[A,0,604,,,.13,4,2.01,-.1,.2,50,,.01,,,.4,.05,.68,.05]).start()}
var yb=[{product:"EXIT",items:[],b:0},{product:"RADAR",items:[{type:"IRON",value:18}],b:8}],zb=[{type:"ROCK",B:1},{type:"IRON",B:5},{type:"COPPER",B:25},{type:"CARBON",B:50},{type:"LITHIUM",B:75},{type:"SILICON",B:100},{type:"PLUTONIUM",B:200}],Ab=ha(21).map(function(a){var b=Math.trunc(a/3),d=zb[b];return{type:d.type,B:d.B,u:[1,10,50][a-3*b]}});Ab.unshift({type:"EXIT",B:0,u:0});
var Bb=[{type:"EXIT",item:"EXIT",j:0,C:0,m:[]},{type:"CRAFT UPGRADES",item:"RESOURCE STORAGE",j:350,C:2,m:["Increases JMC\u2122 Craft resource","capacity by 20%"]},{type:"CRAFT UPGRADES",item:"BATTERY EFFICENCY",j:200,C:1.6,m:["Increases JMC\u2122 Craft battery capacity","by 25%"]},{type:"CRAFT UPGRADES",item:"CRAFT HEIGHT TOLERANCE",j:350,C:1.5,m:["Allows JMC\u2122 Craft to","move between tiles","with a larger height","difference."]},{type:"RECIPES",item:"CONSTRUCTOR",j:500,m:["Adds JMC\u2122 Constructor to",
"Constructor Database.","Constructors manufacture other","JMC\u2122 Buildings."]},{type:"RECIPES",item:"MINER",j:750,m:"Adds JMC\u2122 Miner to Constructor;Database.;JMC\u2122 Miners use energy to;gather resources 5 times;more efficent than;the JMC\u2122 Craft".split(";")},{type:"RECIPES",item:"GENERATOR",j:1025,m:["Adds JMC\u2122 Generator to Constructor","Database.","JMC\u2122 Generators create energy from","carbon."]},{type:"RECIPES",item:"SOLAR",j:1250,m:["Adds JMC\u2122 Solar Panel to","Constructor Database.",
"JMC\u2122 Solar Panels generate","fluctuating energy."]},{type:"RECIPES",item:"BATTERY",j:1650,m:["Adds JMC\u2122 Battery to","Constructor Database.","JMC\u2122 Batteries store","energy and release it","periodically."]},{type:"RECIPES",item:"RTG",j:2500,m:["Adds JMC\u2122 RTG to","Constructor Database.","JMC\u2122 RTGs generate","constant energy."]},{type:"BUILDING UPGRADES",item:"RADAR RADIUS",j:1E3,C:1.5,m:["Increases JMC\u2122 Radar uncover","distance by 3 tiles."]},{type:"BUILDING UPGRADES",
item:"CONSTRUCTOR SPEED",j:200,C:1.8,m:["Increases JMC\u2122 Constructor speed","by 30%"]},{type:"BUILDING UPGRADES",item:"CONSTRUCTOR TRANSMITTER",j:1850,m:["JMC\u2122 Constructor transmits","finished constructions to","JMC\u2122 Craft."]},{type:"BUILDING UPGRADES",item:"MINER SPEED",j:750,m:["Increases JMC\u2122 Miner speed","by 50%"]},{type:"BUILDING UPGRADES",item:"MINER TRANSMITTER",j:1985,m:["JMC\u2122 Miner transmits","mined resources to","JMC\u2122 Craft."]},{type:"BUILDING UPGRADES",item:"RTG OUTPUT",
j:250,C:1.8,m:["Increases JMC\u2122 RTG output","by 1."]},{type:"BUILDING UPGRADES",item:"SOLAR OUTPUT",j:750,C:1.4,m:["Increases JMC\u2122 Solar Panel output","by 1."]},{type:"BUILDING UPGRADES",item:"GENERATOR OUTPUT",j:500,C:2,m:["Increases JMC\u2122 Generator output","by 1."]}],E=Bb.slice(),F=yb.slice(),Cb=1,G=50,Db=50,Eb=!1,Fb,Gb=0,Hb=[500,1E3,2E3,5E3,1E4,2E4,5E4],Ib=!1,Jb=!1,w=1280,u=720;Ka.width=w;Ka.height=u;Ka.style.width=Ka.width+"px";Ka.style.height=Ka.height+"px";
var H={i:!1,h:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,A:!1,H:!1},I={i:!1,h:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,A:!1,H:!1},v={x:0,y:0};l=[];p=[];var J=0,Kb=0,L=0,B,C,M=0,O=!1,S=!1,T=!1,U=!1,W=!1,Lb=!1,X,Ya,eb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ua,Y,Ub,Wb=0,Xb=!1,Yb=!1,y=0,Zb=1,$b="Nominal",ac=zzfxM.apply(null,fa(na)),bc=zzfxP.apply(null,fa(ac));bc.loop=!0;bc.start();var cc=Array.from(Array(500).keys()).map(function(){return{x:2*Math.random()*w-w,y:2*Math.random()*u-u,r:3*Math.random()}});Aa(Math.random());
var pb=[{N:[0,1,2],I:new f(62,47,91,255)},{N:[3,4],I:new f(190,184,235,255)},{N:[5,6,7],I:new f(64,121,140,255)},{N:[8,9,10],I:new f(115,251,211,255)}],dc=!1,ec=!1;function x(a,b,d){return g.fillText(a,b,d)}var Qa=(new Date).getTime(),Z=0;
function fc(){g.fillStyle="#FFFFF0";g.save();g.translate(w/2,u/2);cc.forEach(function(a){g.beginPath();g.arc(a.x,a.y,a.r,0,2*Math.PI);g.fill()});g.restore();g.fillStyle="#FFFFFF";g.textAlign="center";g.textBaseline="middle";g.font="65px Tahoma";x("Planet 404",w/2,.1*u);1==I.i&&0==H.i&&(D=Math.max(0,D-1),z([]));1==I.h&&0==H.h&&(D=Math.min(ub.length-1,D+1),z([]));if(1==I.c&&0==H.c){switch(ub[D]){case "New Game":gc();A=.5;vb=!1;D=0;ec=!0;break;case "Load Game":null!=window.localStorage.has("Planet404_6473_DATA")&&
(hc(),A=.5,dc=!0,vb=!1,D=0);break;case "Mute Music":bc.disconnect();ub[D]="Unmute Music";break;case "Mute Sound FX":A=0;ub[D]="Unmute Sound FX";break;case "Unmute Music":bc.connect(zzfxX.destination);ub[D]="Mute Music";break;case "Unmute Sound FX":A=1,ub[D]="Mute Sound FX"}wb()}g.font="40px Tahoma";ub.forEach(function(a){var b=ub.indexOf(a);if(D==b){var d=g.measureText(a).width;g.drawImage(r,Math.trunc(.45*w-.5*d-.5*r.width),Math.trunc(.3*u+80*b-.5*r.height));g.drawImage(r,Math.trunc(.55*w+.5*d-.5*
r.width),Math.trunc(.3*u+80*b-.5*r.height));g.fillStyle="#FFFFFF"}else g.fillStyle="#AAAAAA";x(a,.5*w,.3*u+80*b)})}
function gc(){ob();Xa(0,0);C=[{type:"RADAR",value:1}];B=[];Fb=0;F=yb.slice();E=Bb.slice();Lb=!1;G=X=50;Ya=1;eb=50;Nb=Mb=1;Ob=3;Qb=Pb=!1;Rb=2.5;Sb=5;Tb=2;Ua=6;Ub=Y=0;Ib=!1;H={i:!1,h:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,info:!1,A:!1,H:!1};I={i:!1,h:!1,left:!1,right:!1,c:!1,G:!1,remove:!1,info:!1,A:!1,H:!1};ab(l.find(function(a){return 240==a.x&&2==a.y}),{type:"RADAR",value:1});ab(l.find(function(a){return 240==a.x&&0==a.y}),{type:"RTG",value:1});ab(l.find(function(a){return 239==a.x&&0==a.y}),{type:"CONSTRUCTOR",
value:1});ab(l.find(function(a){return 243==a.x&&2==a.y}),{type:"TELEDEPOT",value:1});ab(l.find(function(a){return 237==a.x&&1==a.y}),{type:"ROBOSHOP",value:1})}
function ic(){g.fillStyle="#FFFFF0";g.save();g.translate(w/2,u/2);g.rotate(Math.PI/180*(360*Ub+Y));cc.forEach(function(d){g.beginPath();g.arc(d.x,d.y,d.r,0,2*Math.PI);g.fill()});g.restore();Oa();g.fillStyle="#FFFFFF";g.textAlign="center";if(!T||Eb||Ib)if(Eb||Ib||Jb)if(Eb){v.y=Da(v.y,10,Z/1500);q=Da(q,0,Z/1500);var b=Math.trunc(50-50*q);g.font=b+"px Arial";g.fillStyle="#FFFFFF";g.strokeStyle="#000000";g.textAlign="center";g.textBaseline="middle";x("You Died",w/2,.2*u);.4>q&&(x("Press E/Space to respawn",
w/2,.3*u),1==I.c&&0==H.c&&(G=X,B=[],C=[],l.find(function(d){return d.g}).g=!1,l.find(function(d){return 240==d.x}).g=!0,Xa(0,0),Eb=!1,q=1,v={x:0,y:0}))}else Ib?(v.y=Da(v.y,10,Z/1500),q=Da(q,0,Z/1500),b=Math.trunc(50-50*q),g.font=b+"px Arial",g.fillStyle="#FFFFFF",g.strokeStyle="#000000",g.textAlign="center",g.textBaseline="middle",x("Quota Failed",w/2,.2*u),l.forEach(function(d){return d.D=Math.min(6,d.D+Z/800)}),.4>q&&(x("Press E to return to main menu",w/2,.3*u),1==I.c&&0==H.c&&(vb=!0,Ib=dc=T=!1,
q=1)),.8<q?(g.fillStyle="#FFFFFF"+Ha(255-(1-q)/.2*255),g.beginPath(),g.arc(w/2,u/2,(1-q)/.2*w,0,2*Math.PI),g.fill()):(g.fillStyle="#FFFFFF"+Ha(q/.8*255),g.fillRect(0,0,w,u))):Jb&&(g.strokeStyle="#FFFFFF",g.fillStyle="#000000A",mb(.05,.5,.2),b=w/2*.45,g.font="20px Arial",g.fillStyle="#FFFFFF",g.strokeStyle="#000000",g.textAlign="start",g.textBaseline="alphabetic",x("Congratulations, you have completed all JMC\u2122 Mining Initative quotas.",b,.2*u),x("Due to the costs of JMC\u2122 Craft recovery, you have been offered an",
b,25+.2*u),x("involutary position as cheif of planetary excavations and are forbidden",b,50+.2*u),x("from leaving this planet.",b,75+.2*u),g.textAlign="center",x("Thanks for playing!",w/2,.45*u),1.5<=Y&&(x("Press E to enter endless mode",w/2,25+.45*u),1==I.c&&0==H.c&&(Lb=!0,Jb=!1)));else{l.filter(function(d){return d.isVisible&&"NONE"!=d.a.type}).forEach(function(d){return jc(d)});v.x=Da(v.x,0,Z/150*Cb);v.y=Da(v.y,0,Z/150*Cb);1==I.H&&0==H.H?Cb=1.8:0==I.H&&1==H.H&&(Cb=1);B=B.filter(function(d){return 0<
d.value});J=Math.min(Ab.filter(function(d){return B.some(function(k){return d.type==k.type&&k.value>=d.u})||"EXIT"==d.type}).length-1,J);C=C.filter(function(d){return 0<d.value});L=Math.min(E.length-1,L);U&&0==Ab.filter(function(d){return B.some(function(k){return d.type==k.type&&k.value>=d.u})}).length&&(J=0,U=!1);var a=l.find(function(d){return d.g});Db<G?(Xb=!1,$b="Charging"):U||W||["SOLAR","RTG","GENERATOR"].some(function(d){return d==a.a.type})?(Xb=!1,$b="Paused"):G-=Z/1E3*(1+a.D);kc();lc()}else if(g.textBaseline=
"middle",g.font="45px Tahoma",x("Paused",w/2,30),g.font="35px Tahoma",sb.forEach(function(d){var k=sb.indexOf(d);if(D==k){var e=g.measureText(d).width;g.drawImage(r,Math.trunc(.45*w-.5*e-.5*r.width),Math.trunc(.15*u+50*k-.5*r.height));g.drawImage(r,Math.trunc(.55*w+.5*e-.5*r.width),Math.trunc(.15*u+50*k-.5*r.height));g.fillStyle="#FFFFFF"}else g.fillStyle="#AAAAAA";x(d,.5*w,.15*u+50*k)}),0==I.i&&1==H.i&&(D=Math.max(0,D-1),z([])),0==I.h&&1==H.h&&(D=Math.min(sb.length-1,D+1),z([])),1==I.A&&0==H.A&&
(T=!1),0==I.c&&1==H.c){switch(sb[D]){case "Resume":T=!1;break;case "Main Menu":vb=!0;dc=T=!1;break;case "Save Game":window.localStorage.setItem("Planet404_6473_DATA",JSON.stringify([l,Y,Ub,B,C,Fb,G,F,E,X,Ya,eb,Ua,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Lb]));p.push({text:"Game Saved",time:0});T=!1;break;case "Load Game":null!=window.localStorage.getItem("Planet404_6473_DATA")?hc():p.push({text:"Game Save not found",time:0});T=!1;break;case "Mute Music":bc.disconnect();sb[D]="Unmute Music";break;case "Mute Sound FX":A=
0;sb[D]="Unmute Sound FX";break;case "Unmute Music":bc.connect(zzfxX.destination);sb[D]="Mute Music";break;case "Unmute Sound FX":A=1,sb[D]="Mute Sound FX"}wb()}0>=G&&!Eb&&(Eb=!0,z([A,,160,.01,.2,.04,2,,-.1,.1,-100,.1]));Db=G;Eb||(Y+=Z/600);359<=Y&&(Fb>=Hb[Ub]&&!Jb&&!Lb?(Fb-=Hb[Ub],Ub==Hb.length-1?(Jb=!0,z([A,0,220,,2,.08,1.5,,,,50,.07,.1,,,,.01])):z([A,0,160,,1,.04,2,,,,25,.07,.03,,,,.01])):Jb||Lb||Ib||(Ib=!0,z([A,,299,.01,.03,1.95,3,.1,.9,.6,,,,.5,.9,.6,,.52,.06]),z([A,0,160,,1.25,.04,2,,,,-25,
.25,.01,,,,.01])),Ub+=1);Y=359<=Y?0:Y}
function lc(){!(1!=I.i||0!=H.i||O||S||T||U||W)&&10>Math.abs(v.y)&&Xa(0,-1);!(1!=I.h||0!=H.h||O||S||T||U||W)&&10>Math.abs(v.y)&&Xa(0,1);!(1!=I.i||1!=H.i||O||S||T||U||W)&&10>Math.abs(v.y)&&Xa(0,-1);!(1!=I.h||1!=H.h||O||S||T||U||W)&&10>Math.abs(v.y)&&Xa(0,1);1==I.i&&0==H.i&&O&&(M=Math.max(0,M-1),z([]));1==I.h&&0==H.h&&O&&(M=Math.max(0,Math.min(C.length-1,M+1)),z([]));1==I.i&&0==H.i&&S&&(M=Math.max(0,M-1),z([]));1==I.h&&0==H.h&&S&&(M=Math.max(0,Math.min(F.length-1,M+1)),z([]));1==I.i&&0==H.i&&U&&(y=0,
J=Math.max(0,J-1),z([]));1==I.h&&0==H.h&&U&&(y=0,J=Math.min(Ab.filter(function(b){return B.some(function(d){return b.type==d.type&&d.value>=b.u})||"EXIT"==b.type}).length-1,J+1),z([]));1==I.i&&0==H.i&&W&&(y=0,L=Math.max(0,L-1),z([]));1==I.h&&0==H.h&&W&&(y=0,L=Math.min(E.length-1,L+1),z([]));1==I.i&&1==H.i&&U&&(1<=y?(J=Math.max(0,J-1),y=0,z([])):y+=Z/100);1==I.h&&1==H.h&&U&&(1<=y?(J=Math.min(Ab.filter(function(b){return B.some(function(d){return b.type==d.type&&d.value>=b.u})||"EXIT"==b.type}).length-
1,J+1),y=0,z([])):y+=Z/100);1==I.i&&1==H.i&&W&&(1<=y?(L=Math.max(0,L-1),y=0,z([])):y+=Z/100);1==I.h&&1==H.h&&W&&(1<=y?(L=Math.min(E.length-1,L+1),y=0,z([])):y+=Z/100);!(1!=I.right||0!=H.right||O||T||U||W)&&10>Math.abs(v.x)&&Xa(1,0);!(1!=I.left||0!=H.left||O||T||U||W)&&10>Math.abs(v.x)&&Xa(-1,0);!(1!=I.right||1!=H.right||O||T||U||W)&&10>Math.abs(v.x)&&Xa(1,0);!(1!=I.left||1!=H.left||O||T||U||W)&&10>Math.abs(v.x)&&Xa(-1,0);if(1==I.c&&0==H.c&&!O&&!T){Zb=1;y=0;var a=l.find(function(b){return b.g});"NONE"!=
a.a.type?mc(a):"NONE"!=a.l.type&&(0<db(a.l.type,1)?(Za(a),z([A,0,320,.01,,0,4,.1,,,,,,,,.2,.01,0,.01])):p.push({text:"Resource full",time:0}))}a=l.find(function(b){return b.g});1==I.c&&1==H.c&&!O&&!T&&1<=y?(y=0,a=l.find(function(b){return b.g}),"NONE"!=a.a.type?mc(a):"NONE"!=a.l.type&&(0<db(a.l.type,1)?(Za(a),z([A,0,320,.01,,0,4,.1,,,,,,,,.2,.01,0,.01])):p.push({text:"Resource full",time:0}))):1!=I.c||1!=H.c||O||T||(y+=Z/100*Zb);1!=I.G||0!=H.G||O||S||T||U||W?1==I.G&&0==H.G&&O&&(O=!1):0<C.length?(M=
0,O=!0):p.push({text:"No Buildings",time:0});a=l.find(function(b){return b.g});O&&1==I.c&&0==H.c&&l.some(function(b){return b.g&&"NONE"==b.a.type})&&(ab(a,C[M]),C=C.filter(function(b){return 0<b.value}),O=!1,M=0);1==I.remove&&0==H.remove&&l.some(function(b){return b.g&&"NONE"!=b.a.type})&&bb(a);1==I.A&&0==H.A&&(O||U||W||S)?(S=W=U=O=!1,U=M=0):1==I.A&&0==H.A&&(T=!0)}
function hc(){S=W=U=O=!1;U=M=0;var a=JSON.parse(window.localStorage.getItem("Planet404_6473_DATA"));l=a[0];Y=a[1];Ub=a[2];B=a[3];C=a[4];Fb=a[5];G=a[6];F=a[7];E=a[8];X=a[9];Ya=a[10];eb=a[11];Ua=a[12];Mb=a[13];Nb=a[14];Ob=a[15];Pb=a[16];Qb=a[17];Rb=a[18];Sb=a[19];Tb=a[20];Lb=a[21];Xa(0,0)}
function mc(a){switch(a.a.type){case "CONSTRUCTOR":if(S){var b=Object.assign({},F[M]);if("EXIT"!=b.product)if(a.a.b>=b.b){var d=b.items;d.filter(function(e){return B.some(function(n){return n.type==e.type&&n.value>=e.value})}).length==d.length?(a.a.F=b,B.forEach(function(e){var n=d.find(function(t){return t.type==e.type});null!=n&&(e.value-=n.value,p.push({text:"Used "+n.value+" units of "+e.type,time:0}))}),a.a.P=!0,a.a.b-=b.b,wb()):(d.forEach(function(e){var n=B.find(function(t){return t.type==
e.type&&t.value<e.value});null!=n?p.push({text:e.value-n.value+" more "+e.type+" needed",time:0}):B.some(function(t){return t.type==e.type})||p.push({text:e.value+" more "+e.type+" needed",time:0})}),xb())}else p.push({text:"Not enough energy",time:0});S=!1}else a.a.K?(cb(a.a.F.product),p.push({text:"Gained "+a.a.F.product,time:0}),a.a.K=!1,a.a.F=null,a.a.f=0,wb()):null==a.a.F&&(S=!0,M=0);break;case "MINER":!Pb&&0<a.a.v&&(b=db(a.a.L,a.a.v),0==b?(xb(),p.push({text:"Resource full"+b+a.a.L,time:0})):
(a.a.v-=db(a.a.L,a.a.v),p.push({text:"Gained "+b+" "+a.a.L,time:0}),wb()));break;case "TELEDEPOT":if(U){var k=Ab.filter(function(e){return B.some(function(n){return e.type==n.type&&n.value>=e.u})||"EXIT"==e.type})[J];"EXIT"!=k.type?(a=B.find(function(e){return e.type==k.type}),a.value>=k.u?(a.value-=k.u,Fb+=k.u*k.B,z([A,.01,287,.11,,0,3,.01,,,198,.09,,,,,.06,.5])):p.push({text:"Cannot sell "+k.u+" of "+k.type,time:0})):(J=0,U=!1)}else J=0,U=!0;break;case "ROBOSHOP":if(W)if("EXIT"!=E[L].type)if(Fb>=
E[L].j){Fb-=E[L].j;switch(E[L].item){case "RESOURCE STORAGE":eb=Math.round(1.2*eb);break;case "BATTERY EFFICENCY":X=Math.round(1.25*X);break;case "CRAFT HEIGHT TOLERANCE":Ya+=1;break;case "CONSTRUCTOR SPEED":Nb*=1.3;break;case "CONSTRUCTOR TRANSMITTER":Qb=!0;E=E.filter(function(e){return"CONSTRUCTOR TRANSMITTER"!=e.item});break;case "MINER SPEED":Ob*=1.5;break;case "MINER TRANSMITTER":Pb=!0;E=E.filter(function(e){return"MINER TRANSMITTER"!=e.item});break;case "RTG OUTPUT":Sb+=1;break;case "SOALR OUTPUT":Mb+=
1;break;case "GENERATOR OUTPUT":Tb+=1;break;case "RADAR RADIUS":Ua+=3;Ta();break;case "CONSTRUCTOR":F.push({product:"CONSTRUCTOR",items:[{type:"IRON",value:10},{type:"COPPER",value:15}],b:4});E=E.filter(function(e){return"CONSTRUCTOR"!=e.item});break;case "MINER":F.push({product:"MINER",items:[{type:"IRON",value:10},{type:"COPPER",value:15},{type:"CARBON",value:8}],b:4});E=E.filter(function(e){return"MINER"!=e.item});break;case "GENERATOR":F.push({product:"GENERATOR",items:[{type:"IRON",value:20},
{type:"COPPER",value:25},{type:"ROCK",value:15}],b:5});E=E.filter(function(e){return"GENERATOR"!=e.item});break;case "BATTERY":F.push({product:"BATTERY",items:[{type:"IRON",value:10},{type:"COPPER",value:10},{type:"LITHIUM",value:5}],b:8});E=E.filter(function(e){return"BATTERY"!=e.item});break;case "SOLAR":F.push({product:"SOLAR",items:[{type:"COPPER",value:5},{type:"SILICON",value:10}],b:10});E=E.filter(function(e){return"SOLAR"!=e.item});break;case "RTG":F.push({product:"RTG",items:[{type:"IRON",
value:25},{type:"COPPER",value:25},{type:"PLUTONIUM",value:10}],b:10}),E=E.filter(function(e){return"RTG"!=e.item})}null!=E[L].C&&(E[L].j=Math.round(E[L].j*E[L].C));wb()}else p.push({text:"Cannot afford "+E[L].item,time:0}),xb();else W=!1;else W=!0;break;case "GENERATOR":b=B.find(function(e){return"CARBON"==e.type}),null!=b?a.a.J<a.a.W?(a.a.J+=1,--b.value,wb()):p.push({text:"Generator is full",time:0}):(p.push({text:"No available carbon",time:0}),xb())}}
function kc(){var a=.12*u;Xb?1<=Wb&&(z([A,0,500,.2,,0,1,.5,,,50,.12,,,,,,,.01]),Yb=!Yb,Wb=0):Yb=!1;g.strokeStyle=Yb?"#FF0000":"#FFFFFF";g.fillStyle="#000000AA";var b=lb();g.beginPath();for(var d=0;d<b.length;d++)0==d?g.moveTo(b[d].x,b[d].y):g.lineTo(b[d].x,b[d].y);g.closePath();g.fill();g.stroke();g.font="15px Arial";g.fillStyle="#FFFFFF";g.textAlign="start";p=p.slice(-3,5);p=p.filter(function(m){return 2E3>m.time});var k=25*p.length;p.forEach(function(m){x(m.text,.01*w,.42*u+150-k+25*p.indexOf(m));
m.time+=Z});g.textAlign="center";g.textBaseline="middle";g.font="25px Arial";x("Inventory",.92*w,30);g.font="15px Arial";B.forEach(function(m){x(m.value+"/"+eb+" units of "+m.type,.92*w,80+25*B.indexOf(m))});x("Sol: "+(Ub+1)+" Planet Rotation: "+Y.toFixed(0)+"\u00b0",w/2,15);O||S||U||W||!(8>=Y||352<=Y)||(g.fillStyle="#000000AA",3>Y||357<=Y?(g.strokeStyle="#FFFFFF",mb(.05,.14,.39),g.font="30px Tahoma",g.fillStyle="#FFFFFF",x("Sol "+(Ub+1)+"/7",w/2,a)):8>=Y?(b=Ha(255-(Y-3)/5*255),g.strokeStyle="#FFFFFF"+
b,mb(.05,.14,.39),g.font="30px Tahoma",g.fillStyle="#FFFFFF"+b,x("Sol "+(Ub+1)+"/7",w/2,a)):352<=Y&&(b=Ha((Y-352)/5*255),g.strokeStyle="#FFFFFF"+b,mb(.05,.14,.39),g.font="30px Tahoma",g.fillStyle="#FFFFFF"+b,x("Sol "+(Ub+1)+"/7",w/2,a)));g.strokeStyle="#FFFFFF";if(O){g.fillStyle="#000000AA";mb(.05,.5,.4);g.font="30px Tahoma";g.fillStyle="#FFFFFF";x("Build Mode",w/2,a);g.font="20px Tahoma";var e=5,n=C.filter(function(m){return Math.abs(C.indexOf(m)-M)<e+Math.max(0,e-1-M)});n.forEach(function(m){var h=
C.indexOf(m);g.fillStyle="#AAAAAA";M==h&&(g.fillStyle="#FFFFFF");"EXIT"!=m.type?x(m.value+" "+m.type,w/2,a+40+25*n.indexOf(m)):x(m.type,w/2,a+40+25*n.indexOf(m))})}S&&(g.fillStyle="#000000AA",mb(.05,.5,.3),g.fillStyle="#FFFFFF",g.beginPath(),g.moveTo(.5*w,.07*u),g.lineTo(.5*w,.53*u),g.stroke(),g.font="30px Tahoma",x("Set Recipe:",.4*w,a+.01*w),g.font="20px Tahoma",e=5,n=F.filter(function(m){return Math.abs(F.indexOf(m)-M)<e+Math.max(0,e-1-M)}),n.forEach(function(m){var h=F.indexOf(m);g.fillStyle=
"#AAAAAA";M==h&&(g.fillStyle="#FFFFFF");"EXIT"!=m.product&&(M==h&&(g.font="25px Tahoma",m.items.forEach(function(P){return x(P.value+" "+P.type,.59*w,a+.01*w+40+25*m.items.indexOf(P))}),x(m.b+" ENERGY",.59*w,a+.01*w+40+25*m.items.length)),g.font="20px Tahoma");x(m.product,.4*w,a+.01*w+40+25*n.indexOf(m))}));if(U){g.fillStyle="#000000AA";mb(.05,.5,.4);g.fillStyle="#FFFFFF";g.font="30px Tahoma";x("Sell Mode",w/2,a);g.font="20px Tahoma";e=5;var t=Ab.filter(function(m){return B.some(function(h){return m.type==
h.type&&h.value>=m.u})||"EXIT"==m.type});n=t.filter(function(m){return Math.abs(t.indexOf(m)-J)<e+Math.max(0,e-1-J)});n.forEach(function(m){var h=t.indexOf(m);g.fillStyle="#AAAAAA";J==h&&(g.fillStyle="#FFFFFF");"EXIT"!=m.type?x(m.u+" "+m.type+" : \u20bf"+m.B*m.u,w/2,a+40+25*n.indexOf(m)):x(m.type,w/2,a+40+25*n.indexOf(m))})}W&&(g.fillStyle="#000000AA",mb(.05,.5,.2),g.fillStyle="#FFFFFF",g.beginPath(),g.moveTo(.5*w,.07*u),g.lineTo(.5*w,.53*u),g.stroke(),"EXIT"!=E[L].type&&(g.beginPath(),g.moveTo(.5*
w,.46*u),g.lineTo(.78*w,.46*u),g.stroke()),g.font="30px Tahoma",x("Buy Mode",.36*w,a),g.font="20px Tahoma",e=5,n=E.filter(function(m){return Math.abs(E.indexOf(m)-L)<e+Math.max(0,e-1-L)}),n.forEach(function(m){var h=E.indexOf(m);g.fillStyle="#AAAAAA";L==h&&(g.fillStyle="#FFFFFF");g.textAlign="center";g.textBaseline="middle";"EXIT"!=m.type?(x(m.item,.36*w,a+20+40+25*n.indexOf(m)),L==h&&(x(m.type,.65*w,a+20),x("\u20bf"+Kb.toLocaleString("en-US",{maximumFractionDigits:0}),.64*w,.495*u),g.textAlign="start",
m.m.forEach(function(P){return x(P,.51*w,a+20+40+25*m.m.indexOf(P))}))):x(m.type,.36*w,a+20+40+25*n.indexOf(m))}),Kb=Da(E[L].j,Kb,Z/80));g.textAlign="center";g.textBaseline="middle";g.fillStyle="#FFFFFF";g.font="20px Tahoma";x("JMC",.05*w,.14*u);Va();Lb?(x("Endless",.05*w,.22*u),x("Mode",.05*w,25+.22*u)):x("Daily Quota:",.05*w,.22*u);g.font="25px Tahoma";x("\u20bf"+Gb.toLocaleString("en-US",{maximumFractionDigits:0}),.05*w,.18*u);Gb=Da(Fb,Gb,Z/100);Lb||(Fb>=Hb[Ub]?g.fillStyle="#00FF00":300<Y&&0==
Math.trunc(Y)%2&&(g.fillStyle="#FF0000"),x("\u20bf"+Hb[Ub].toLocaleString("en-US",{maximumFractionDigits:0}),.05*w,.26*u));g.fillStyle="#FFFFFF";g.font="15px Tahoma";Wa(.02*w,.45*u,100,G/X);Yb&&(g.fillStyle="#FF0000");x("Battery",.07*w,.32*u);x("Status:",.07*w,.34*u);b=G/X;g.font="12px Tahoma";x($b,.07*w,.36*u);g.fillStyle="#FFFFFF";0<l.find(function(m){return m.g}).D&&(g.font="50px Tahoma",x("\u2622",.07*w,u*(.45-.032)));.6<b?($b="Nominal",Xb=!1):.4<b?($b="Satisfactory",Xb=!1):.3<b?($b="Low",Xb=
!1,Wb=0):15>=G&&10<G?($b="Very Low",Xb=!0,Wb+=Z/400):10>=G&&5<G?($b="Critical",Xb=!0,Wb+=Z/150):5>=G&&($b="Deadly",Xb=!0,Wb+=Z/50)}
function jc(a){var b=.85*w,d=.45*u;g.lineWidth=2;g.textAlign="start";g.textBaseline="alphabetic";g.font="15px Arial";switch(a.a.type){case "SOLAR":var k=Mb*Math.max(.25,Math.sin(Y*Math.PI/180));if(a.g&&G<X)G=Math.min(X,G+Z/1E3*k);else{var e=nb(a).filter(function(h){return null!=h.a.b}).filter(function(h){return h.a.b!=h.a.s}),n=k/e.length*(Z/1E3);e.forEach(function(h){h.a.b=h.a.b+n>=h.a.s?h.a.s:h.a.b+n})}a.g&&!T&&(x("\u26a1",b,d+20),Wa(b,d+40+.08*u,.1*u,Math.min(1,k/Mb)));break;case "CONSTRUCTOR":null!=
a.a.F&&a.a.P&&(a.a.f+=Z/1E4*Nb,1<=a.a.f&&(Qb?(cb(a.a.F.product),a.a.F=null,playerTile.a.f=0):a.a.K=!0,a.a.P=!1));a.g&&!T&&(x("Recipe: "+(void 0!=a.a.F?a.a.F.product:"None"),b,d),x("\u26a1",b,d+20),a.a.K&&(g.fillStyle="#00FF00"),x("%",b+12+.025*u,d+20),Wa(b,d+40+.08*u,.1*u,a.a.b/a.a.s),Wa(10+b+.025*u,d+40+.08*u,.1*u,a.a.f));break;case "MINER":a.a.U?(a.a.f+=Z/25E3*Ob,1<=a.a.f&&(a.a.v=Math.min(a.a.T,a.a.v+5),Za(a),a.a.U=!1,a.a.f=0)):1<=a.a.b&&"NONE"!=a.l.type&&a.a.v<a.a.T&&(--a.a.b,a.a.U=!0);Pb&&(a.a.v-=
db(a.a.L,a.a.v));a.g&&!T&&(x("\u26a1",b,d+20),x("%",12+b+.025*u,d+20),x("\u2a06",24+b+.05*u,d+20),Wa(b,d+40+.08*u,.1*u,Math.min(1,a.a.b/a.a.s)),Wa(10+b+.025*u,d+40+.08*u,.1*u,a.a.f),Wa(20+b+.05*u,d+40+.08*u,.1*u,a.a.v/a.a.T));break;case "BATTERY":e=nb(a).filter(function(h){return null!=h.a.b}).filter(function(h){return h.a.b!=h.a.s});var t=e.filter(function(h){return"BATTERY"==h.a.type}).filter(function(h){return h.a.b+1<a.a.b}),m=e.filter(function(h){return"BATTERY"!=h.a.type});a.a.M?(a.a.f+=Z/1E4*
Rb,0==e.length&&(a.a.f=0,a.a.M=!1,a.a.b=Math.min(a.a.b+1,a.a.s)),1<=a.a.f&&(a.a.f=0,a.a.M=!1,0<m.length?m.forEach(function(h){return h.a.b+=1/m.length}):0<t.length&&t.forEach(function(h){return h.a.b+=1/t.length}))):1<=a.a.b&&(0<m.length||0<t.length)&&(--a.a.b,a.a.M=!0);a.g&&!T&&(x("\u26a1",b,d+20),x("%",12+b+.025*u,d+20),Wa(b,d+40+.08*u,.1*u,a.a.b/a.a.s),Wa(10+b+.025*u,d+40+.08*u,.1*u,a.a.f));break;case "RTG":a.g&&G<X?G=Math.min(X,G+Z/1E3*Sb):(e=nb(a).filter(function(h){return null!=h.a.b}).filter(function(h){return h.a.b!=
h.a.s}),n=Sb/e.length*(Z/1E3),e.forEach(function(h){h.a.b=h.a.b+n>=h.a.s?h.a.s:h.a.b+n}));break;case "GENERATOR":1<=a.a.f?(a.g&&G<X?G=Math.min(X,G+Tb):(e=nb(a).filter(function(h){return null!=h.a.b}).filter(function(h){return h.a.b!=h.a.s}),n=Tb/e.length,e.forEach(function(h){h.a.b=h.a.b+n>=h.a.s?h.a.s:h.a.b+n})),a.a.f=0,a.a.S=!1):1>a.a.f&&a.a.S?a.a.f+=Z/800:1<=a.a.J&&(a.g&&G<X||0<nb(a).filter(function(h){return null!=h.a.b}).filter(function(h){return h.a.b!=h.a.s}).length)&&(--a.a.J,a.a.f=0,a.a.S=
!0),a.g&&(x("\u2a06",b+2,d+20),x("%",12+b+.025*u,d+20),Wa(b,d+40+.08*u,.1*u,a.a.J/a.a.W),Wa(10+b+.025*u,d+40+.08*u,.1*u,a.a.f))}}document.addEventListener("keydown",function(a){switch(a.keyCode){case 87:I.i=!0;break;case 83:I.h=!0;break;case 68:I.right=!0;break;case 65:I.left=!0;break;case 69:I.c=!0;break;case 32:I.c=!0;break;case 66:I.G=!0;break;case 82:I.remove=!0;break;case 27:I.A=!0;break;case 16:I.H=!0}});
document.addEventListener("keyup",function(a){switch(a.keyCode){case 87:I.i=!1;break;case 83:I.h=!1;break;case 68:I.right=!1;break;case 65:I.left=!1;break;case 69:I.c=!1;break;case 32:I.c=!1;break;case 66:I.G=!1;break;case 82:I.remove=!1;break;case 27:I.A=!1;break;case 16:I.H=!1}});function z(a){zzfx.apply(null,fa(a)).start()}
setInterval(function(){Z=T?0:(new Date).getTime()-Qa;g.fillStyle="#000000";g.fillRect(0,0,Ka.clientWidth,Ka.clientHeight);vb&&fc();if(ec){g.strokeStyle="#FFFFFF";g.fillStyle="#000000AA";mb(.02,.9,.1);var a=.13*w,b=.11*u;g.font="22px Arial";g.fillStyle="#FFFFFF";g.strokeStyle="#000000";g.textAlign="start";g.textBaseline="alphabetic";x("Welcome, valued Roboemployee, to the JMC\u2122 Autonomous Mining Initative.",a,b);x("Over the course of the next 7 solar rotations your mining effectiveness will be assesed by",
a,50+b);x("your ability to meet daily monetary quotas.",a,75+b);x("Quotas can be met by ",a,100+b);var d=g.measureText("Quotas can be met by ").width;g.fillStyle="#00FF00";x("Mining (E/Space)",a+d,100+b);d+=g.measureText("Mining (E/Space)").width;g.fillStyle="#FFFFFF";x(" and selling resources to the TELEDEPOT.",a+d,100+b);x("Failure to complete these quotas will result in immediate nuclear vapourisation.",a,150+b);x("JMC\u2122 Operations & Managment regrets to inform you that terrain maps",a,200+
b);x("for JMC\u2122 Planet 404 have been lost, you are required to use your",a,225+b);x("JMC\u2122 Craft's ",a,250+b);d=g.measureText("JMC\u2122 Craft's ").width;g.fillStyle="#00FF00";x("Build (B) & Remove (R)",a+d,250+b);d+=g.measureText("Build (B) & Remove (R)").width;g.fillStyle="#FFFFFF";x(" functionality to place RADARs and uncover more terrain.",a+d,250+b);x("The CONSTRUCTOR creates buildings, such as extra RADARs, from resources and energy.",a,300+b);x("Your JMC\u2122 Craft has a limited battery capacity, failure to charge the battery",
a,325+b);x("will result in loss of resources and buildings in possesion.",a,350+b);x("An RTG has been made available to provide energy and charge your JMC\u2122 Craft.",a,375+b);x("A ROBOSHOP has been made available for you to purchase upgrades to aid effectiveness.",a,400+b);g.textAlign="center";x("WASD to move, left shift to sprint, E/Space to interact.",w/2,450+b);x("Good Luck.",w/2,.82*u);x("Press E/Space to start",w/2,25+.85*u);1==I.c&&0==H.c&&(ec=!1,dc=!0)}dc&&ic();H=Object.assign({},I);Qa=
(new Date).getTime()},50);