import"./assets/styles-Cq4S19V_.js";import{f as p,i as l}from"./assets/vendor-BbbuE1sJ.js";const s=document.getElementById("datetime-picker"),n=document.querySelector("button[data-start]"),b=document.querySelector("span[data-days]"),D=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),C=document.querySelector("span[data-seconds]");let u=null,r=null;n.disabled=!0;const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(r=t,n.disabled=!1)}};p(s,E);n.addEventListener("click",()=>{r&&(n.disabled=!0,s.disabled=!0,u=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(u),s.disabled=!1,l.success({title:"Complete",message:"Countdown finished!"}),i(0);return}i(t)},1e3))});function i(e){const{days:t,hours:a,minutes:c,seconds:d}=g(e);b.textContent=o(t),D.textContent=o(a),S.textContent=o(c),C.textContent=o(d)}function g(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
