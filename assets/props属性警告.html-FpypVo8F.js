import{_ as r,c as t,b as s,a as p,d as a,w as l,r as d,o,e as i}from"./app-CU3PtqxC.js";const c={},v={class:"table-of-contents"};function u(m,n){const e=d("router-link");return o(),t("div",null,[n[4]||(n[4]=s("meta",{name:"referrer",content:"no-referrer"},null,-1)),n[5]||(n[5]=s("h1",{id:"在组件中-v-model-props-属性时-报错了怎么解决",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#在组件中-v-model-props-属性时-报错了怎么解决"},[s("span",null,"在组件中，v-model props 属性时，报错了怎么解决")])],-1)),n[6]||(n[6]=s("p",null,"目录",-1)),s("nav",v,[s("ul",null,[s("li",null,[a(e,{to:"#当v-model-propsval-时-警告"},{default:l(()=>n[0]||(n[0]=[i('当v-model="propsVal"时,警告')])),_:1})]),s("li",null,[a(e,{to:"#方法一-利用data"},{default:l(()=>n[1]||(n[1]=[i("方法一：利用data")])),_:1})]),s("li",null,[a(e,{to:"#方法二-利用计算属性"},{default:l(()=>n[2]||(n[2]=[i("方法二：利用计算属性")])),_:1})]),s("li",null,[a(e,{to:"#方法三-利用watch"},{default:l(()=>n[3]||(n[3]=[i("方法三：利用watch")])),_:1})])])]),n[7]||(n[7]=p(`<h2 id="当v-model-propsval-时-警告" tabindex="-1"><a class="header-anchor" href="#当v-model-propsval-时-警告"><span>当v-model=&quot;propsVal&quot;时,警告</span></a></h2><div class="hint-container warning"><p class="hint-container-title">警告信息</p><p>  [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a <strong>data</strong> or <strong>computed</strong> property <strong>based on the prop&#39;s value</strong>. Prop being mutated: &quot;propsVal&quot;</p></div><p>之所以会警告，是因为破坏了<strong>单向数据流</strong>，建议看看官方文档：</p><ul><li>vue2: <a href="https://v2.cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81" target="_blank" rel="noopener noreferrer">Prop — Vue.js (vuejs.org) 单向数据流</a></li><li>vue3: <a href="https://cn.vuejs.org/guide/components/props.html#one-way-data-flow" target="_blank" rel="noopener noreferrer">Props | Vue.js (vuejs.org) 单向数据流</a></li></ul><p>假定在组件中,使用<strong>v-model = &quot;modelVal&quot;</strong>，根据官方提示信息和官方文档，可以有方法一和方法二：</p><h2 id="方法一-利用data" tabindex="-1"><a class="header-anchor" href="#方法一-利用data"><span>方法一：利用data</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line">  // 缺点：当propsVal改变时，modelVal并不会随propsVal的改变而改变</span>
<span class="line">    props: [&quot;propsVal&quot;],</span>
<span class="line">    data(){</span>
<span class="line">		return {</span>
<span class="line">			modelVal : this.propsVal</span>
<span class="line">		}</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二-利用计算属性" tabindex="-1"><a class="header-anchor" href="#方法二-利用计算属性"><span>方法二：利用计算属性</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line">  // 缺点：同方法一</span>
<span class="line">    props: [&quot;propsVal&quot;],</span>
<span class="line">    computed: {</span>
<span class="line">        modelVal: {</span>
<span class="line">            function () {</span>
<span class="line">                return this.propsVal</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        // 或者</span>
<span class="line">        //modelVal: {</span>
<span class="line">        //    get: function () {</span>
<span class="line">        //        return this.propsVal</span>
<span class="line">        //    },</span>
<span class="line">        //    set: function (val) {  //要提供setter,不然报错</span>
<span class="line">        //        console.log(val)</span>
<span class="line">        //    }</span>
<span class="line">        //}</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三-利用watch" tabindex="-1"><a class="header-anchor" href="#方法三-利用watch"><span>方法三：利用watch</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line">  // 对方法一的改进，modelVal可以跟着propsVal改变</span>
<span class="line">    props: [&quot;propsVal&quot;],</span>
<span class="line">    watch: {</span>
<span class="line">        propsVal:function(newVal,oldVal){</span>
<span class="line">            console.log(val,oldVal)</span>
<span class="line">            this.modelVal = val //监听propsVal值，改变data里的modelVal</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    data(){</span>
<span class="line">		return {</span>
<span class="line">			modelVal : this.propsVal</span>
<span class="line">		}</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，进一步封装elementUI等第三方UI组件库时，在使用**v-model = “modelVal”**时，不要破坏单向数据流。</p>`,12))])}const b=r(c,[["render",u]]),g=JSON.parse('{"path":"/en/articles/vue/props%E5%B1%9E%E6%80%A7%E8%AD%A6%E5%91%8A.html","title":"在组件中，v-model props 属性时，报错了怎么解决","lang":"zh-CN","frontmatter":{"lang":"zh-CN","date":"2023-03-21T00:00:00.000Z","description":"ARuanLY个人博客"},"headers":[{"level":2,"title":"当v-model=\\"propsVal\\"时,警告","slug":"当v-model-propsval-时-警告","link":"#当v-model-propsval-时-警告","children":[]},{"level":2,"title":"方法一：利用data","slug":"方法一-利用data","link":"#方法一-利用data","children":[]},{"level":2,"title":"方法二：利用计算属性","slug":"方法二-利用计算属性","link":"#方法二-利用计算属性","children":[]},{"level":2,"title":"方法三：利用watch","slug":"方法三-利用watch","link":"#方法三-利用watch","children":[]}],"git":{"contributors":[{"name":"ruanliyou","username":"ruanliyou","email":"3205647203@qq.com","commits":1,"url":"https://github.com/ruanliyou"}],"changelog":[{"hash":"9f02a038de382e3f16719360cc9af239c183f329","time":1744090884000,"email":"3205647203@qq.com","author":"ruanliyou","message":"feat: 添加新文档和配置"}]},"filePathRelative":"en/articles/vue/props属性警告.md"}');export{b as comp,g as data};
