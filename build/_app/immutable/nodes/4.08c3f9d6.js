import{s as f,n as r}from"../chunks/scheduler.e108d1fd.js";import{S as d,i as g,g as m,s as y,h,x as p,c as b,k as v,a as n,f as o}from"../chunks/index.5ae4157e.js";function w(u){let t,l="Projects",s,a,c=`<article id="name"><center><h2>Projects</h2></center></article> <article id="about"><header><b>puffpastry</b> <br/> <small>Summer 2023</small></header> <body><p>puffpastry is a machine learning framework that I wrote from scratch in
        pure rust using as few crates as I could. It mimics the style of the
        popular python library keras.</p> <p>My motivation for creating this project was simply to explore Rust&#39;s
        trait system and make my knowledge about machine learning more concrete.
        By doing so, I encountered many issues that I otherwise would never have
        thought about: preventing values from exploding by using effective
        weight initialization, handling N-dimensional structures in a static
        langauge, writing a backpropogation algorithm that works with multiple
        types of layers, and more like these.</p></body> <footer><a href="https://github.com/uek-1/puffpastry">GitHub Link</a></footer></article>`;return{c(){t=m("title"),t.textContent=l,s=y(),a=m("main"),a.innerHTML=c,this.h()},l(e){t=h(e,"TITLE",{"data-svelte-h":!0}),p(t)!=="svelte-132o65a"&&(t.textContent=l),s=b(e),a=h(e,"MAIN",{class:!0,"data-svelte-h":!0}),p(a)!=="svelte-4rlzpj"&&(a.innerHTML=c),this.h()},h(){v(a,"class","container")},m(e,i){n(e,t,i),n(e,s,i),n(e,a,i)},p:r,i:r,o:r,d(e){e&&(o(t),o(s),o(a))}}}class _ extends d{constructor(t){super(),g(this,t,null,w,f,{})}}export{_ as component};
