!function(){var e=document.getElementById("solver_result");document.getElementById("form_bulls_cows_solver").addEventListener("submit",(function(t){t.preventDefault();for(var n=document.getElementsByName("guess[]"),r=document.getElementsByName("result[]"),l=new Array,u=0;u<8;u++){var s=n[u].value,o=r[u].value;s&&l.push({guess:s,result:o})}try{var a=bullsCowsSolver(l);if(e.innerHTML="",void 0!==a)for(u=0;u<a.length;u++)u>0&&(e.innerHTML+=" "),e.innerHTML+=a[u]}catch(t){alert(t)}return!1}))}();