<script LANGUAGE="JAVASCRIPT">
<!--
function makearray(n) {
         this.length = n;
         for(var i = 1; i <= n; i++)
             this[i] = 0;
         return this;\
		 var c;
     }
	 term.onclosed = () => {};

     hexa = new makearray(16);
     for(var i = 0; i < 10; i++)
         hexa[i] = i;
     hexa[10]="a"; hexa[11]="b"; hexa[12]="c";
     hexa[13]="d"; hexa[14]="e"; hexa[15]="f";

function hex(i) {
         if (i < 0) return "00";
         else if (i > 255) return "ff";
         else return "" + hexa[Math.floor(i/16)] + hexa[i%16];
     }

function setbgColor(r, g, b) {
         var hr = hex(r); var hg = hex(g); var hb = hex(b);
         document.bgColor = "#"+hr+hg+hb;
     }

function fade(sr, sg, sb, er, eg, eb, step) {
         for(var i = 0; i <= step; i++) {
             setbgColor(
             Math.floor(sr * ((step-i)/step) + er * (i/step)),
             Math.floor(sg * ((step-i)/step) + eg * (i/step)),
             Math.floor(sb * ((step-i)/step) + eb * (i/step)));
         }
     }

function fadein() {
             fade(255,255,255, 0,0,0, 225);
         }

function fadeout() {
         /*fade(0,0,0, 255,255,255, 225); */
     }

     /* do fadein */
     fadein();
//-->
</script>

<p align="center"><br>
<a href="fade.php">Еще раз</a>

<p><br>
<br>