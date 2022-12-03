import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as u,c as l,a as n,b as i,e,d as t,r as o}from"./app.6a2d513d.js";const d={},c=n("h1",{id:"elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),e(" ElasticSearch")],-1),v=n("h2",{id:"_1-elasticsearch-\u5168\u6587\u68C0\u7D22",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-elasticsearch-\u5168\u6587\u68C0\u7D22","aria-hidden":"true"},"#"),e(" 1.ElasticSearch-\u5168\u6587\u68C0\u7D22")],-1),r=n("p",null,"\u5168\u6587\u641C\u7D22\u5C5E\u4E8E\u6700\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u5F00\u6E90\u7684 Elasticsearch \u662F\u76EE\u524D\u5168\u6587\u641C\u7D22\u5F15\u64CE\u7684\u9996\u9009\u3002",-1),q=n("p",null,[e("\u5B83"),n("strong",null,"\u53EF\u4EE5\u5FEB\u901F\u5730\u50A8\u5B58\u3001\u641C\u7D22\u548C\u5206\u6790\u6D77\u91CF\u6570\u636E"),e("\u3002\u7EF4\u57FA\u767E\u79D1\u3001Stack Overflow\u3001Github \u90FD\u91C7\u7528\u5B83")],-1),m=n("p",null,"lastic \u7684\u5E95\u5C42\u662F\u5F00\u6E90\u5E93 Lucene\u3002\u4F46\u662F\uFF0C\u4F60\u6CA1\u6CD5\u76F4\u63A5\u7528 Lucene\uFF0C\u5FC5\u987B\u81EA\u5DF1\u5199\u4EE3\u7801\u53BB\u8C03\u7528\u5B83\u7684\u63A5\u53E3\u3002Elastic \u662F Lucene \u7684\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86 REST API \u7684\u64CD\u4F5C\u63A5\u53E3\uFF0C\u5F00\u7BB1\u5373\u7528\u3002",-1),p=n("p",null,"REST API\uFF1A\u5929\u7136\u7684\u8DE8\u5E73\u53F0\u3002",-1),b=e("\u5B98\u65B9\u6587\u6863\uFF1A"),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},k=e("https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"),h=e(" \u5B98\u65B9\u4E2D\u6587\uFF1A"),_={href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html",target:"_blank",rel:"noopener noreferrer"},x=e("https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html"),f=e(" \u793E\u533A\u4E2D\u6587\uFF1A "),y={href:"https://es.xiaoleilu.com/index.html",target:"_blank",rel:"noopener noreferrer"},w=e("https://es.xiaoleilu.com/index.html"),A={href:"http://doc.codingdict.com/elasticsearch/0/",target:"_blank",rel:"noopener noreferrer"},E=e("http://doc.codingdict.com/elasticsearch/0/"),S=t(`<blockquote><p>\u57FA\u672C\u6982\u5FF5</p></blockquote><p>1\u3001Index\uFF08\u7D22\u5F15\uFF09</p><p>\u52A8\u8BCD\uFF0C\u76F8\u5F53\u4E8EMySQL \u4E2D\u7684insert\uFF1B</p><p>\u540D\u8BCD\uFF0C\u76F8\u5F53\u4E8EMySQL \u4E2D\u7684Database</p><p>2\u3001Type\uFF08\u7C7B\u578B\uFF09</p><p>\u5728Index\uFF08\u7D22\u5F15\uFF09\u4E2D\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u578B\u3002</p><p>\u7C7B\u4F3C\u4E8EMySQL \u4E2D\u7684Table\uFF1B\u6BCF\u4E00\u79CD\u7C7B\u578B\u7684\u6570\u636E\u653E\u5728\u4E00\u8D77\uFF1B</p><p>3\u3001Document\uFF08\u6587\u6863\uFF09</p><p>\u4FDD\u5B58\u5728\u67D0\u4E2A\u7D22\u5F15\uFF08Index\uFF09\u4E0B\uFF0C\u67D0\u79CD\u7C7B\u578B\uFF08Type\uFF09\u7684\u4E00\u4E2A\u6570\u636E\uFF08Document\uFF09\uFF0C\u6587\u6863\u662F \u683C\u5F0F\u7684\uFF0CDocument \u5C31\u50CF\u662F MySQL \u4E2D\u7684\u67D0\u4E2A Table \u91CC\u9762\u7684\u5185\u5BB9\uFF1B</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20220713153830043.png" alt="image-20220713153830043"></p><p>4\u3001\u5012\u6392\u7D22\u5F15\u673A\u5236</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20220713153848395.png" alt="image-20220713153848395"></p><h3 id="_1\u3001\u5B89\u88C5elastic-search" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5elastic-search" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5elastic search</h3><p>dokcer\u4E2D\u5B89\u88C5elastic search</p><p>\uFF081\uFF09\u4E0B\u8F7Dealastic search\u548Ckibana</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull elasticsearch:7.6.2
<span class="token function">docker</span> pull kibana:7.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF082\uFF09\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /mydata/elasticsearch/config  
<span class="token function">mkdir</span> -p /mydata/elasticsearch/data
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;</span>/mydata/elasticsearch/config/elasticsearch.yml

//\u5C06mydata/elasticsearch/\u6587\u4EF6\u5939\u4E2D\u6587\u4EF6\u90FD\u53EF\u8BFB\u53EF\u5199
<span class="token function">chmod</span> -R <span class="token number">777</span> /mydata/elasticsearch/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF083\uFF09\u542F\u52A8Elastic search</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name elasticsearch -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
-e  <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms64m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
-v /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
-v  /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
-d elasticsearch:7.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8elasticsearch</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> update elasticsearch --restart<span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uFF084\uFF09\u542F\u52A8kibana\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name kibana -e <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://192.168.13.101:9200 -p <span class="token number">5601</span>:5601 -d kibana:7.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8kibana</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> update kibana  --restart<span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uFF085\uFF09\u6D4B\u8BD5</p>`,27),T=e("\u67E5\u770Belasticsearch\u7248\u672C\u4FE1\u606F\uFF1A "),M={href:"http://192.168.13.101:9200/",target:"_blank",rel:"noopener noreferrer"},R=e("http://192.168.13.101:9200/"),P=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;name&quot;: &quot;0adeb7852e00&quot;,
    &quot;cluster_name&quot;: &quot;elasticsearch&quot;,
    &quot;cluster_uuid&quot;: &quot;9gglpP0HTfyOTRAaSe2rIg&quot;,
    &quot;version&quot;: {
        &quot;number&quot;: &quot;7.6.2&quot;,
        &quot;build_flavor&quot;: &quot;default&quot;,
        &quot;build_type&quot;: &quot;docker&quot;,
        &quot;build_hash&quot;: &quot;ef48eb35cf30adf4db14086e8aabd07ef6fb113f&quot;,
        &quot;build_date&quot;: &quot;2020-03-26T06:34:37.794943Z&quot;,
        &quot;build_snapshot&quot;: false,
        &quot;lucene_version&quot;: &quot;8.4.0&quot;,
        &quot;minimum_wire_compatibility_version&quot;: &quot;6.8.0&quot;,
        &quot;minimum_index_compatibility_version&quot;: &quot;6.0.0-beta1&quot;
    },
    &quot;tagline&quot;: &quot;You Know, for Search&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L=e("\u663E\u793Aelasticsearch \u8282\u70B9\u4FE1\u606F"),C={href:"http://192.168.13.101:9200/_cat/nodes",target:"_blank",rel:"noopener noreferrer"},O=e("http://192.168.13.101:9200/_cat/nodes"),z=e(" \uFF0C"),B=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`127.0.0.1 76 95 1 0.26 1.40 1.22 dilm * 0adeb7852e00
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),H=e("\u8BBF\u95EEKibana\uFF1A "),G={href:"http://192.168.13.101:5601/app/kibana",target:"_blank",rel:"noopener noreferrer"},N=e("http://192.168.13.101:5601/app/kibana"),I=t('<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501192629304.png" alt="image-20200501192629304"></p><h3 id="_2\u3001\u521D\u6B65\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u521D\u6B65\u68C0\u7D22" aria-hidden="true">#</a> 2\u3001\u521D\u6B65\u68C0\u7D22</h3><h4 id="_1-cat" tabindex="-1"><a class="header-anchor" href="#_1-cat" aria-hidden="true">#</a> 1\uFF09_CAT</h4><p>\uFF081\uFF09GET /_cat/nodes\uFF1A\u67E5\u770B\u6240\u6709\u8282\u70B9</p>',4),j=e("\u5982\uFF1A"),D={href:"http://192.168.13.101:9200/_cat/nodes",target:"_blank",rel:"noopener noreferrer"},U=e("http://192.168.13.101:9200/_cat/nodes"),K=e(" :"),F=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`127.0.0.1 61 91 11 0.08 0.49 0.87 dilm * 0adeb7852e00
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),W=n("p",null,"\u6CE8\uFF1A*\u8868\u793A\u96C6\u7FA4\u4E2D\u7684\u4E3B\u8282\u70B9",-1),Y=n("p",null,"\uFF082\uFF09GET/_cat/health\uFF1A\u67E5\u770Bes\u5065\u5EB7\u72B6\u51B5",-1),Q=e("\u5982\uFF1A"),V={href:"http://192.168.13.101:9200/_cat/health",target:"_blank",rel:"noopener noreferrer"},J=e("http://192.168.13.101:9200/_cat/health"),X=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`1588332616 11:30:16 elasticsearch green 1 1 3 3 0 0 0 0 - 100.0%
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Z=n("p",null,"\u6CE8\uFF1Agreen\u8868\u793A\u5065\u5EB7\u503C\u6B63\u5E38",-1),$=n("p",null,"\uFF083\uFF09GET/_cat/master\uFF1A\u67E5\u770B\u4E3B\u8282\u70B9\u4FE1\u606F",-1),nn=e("\u5982\uFF1A "),en={href:"http://192.168.13.101:9200/_cat/master",target:"_blank",rel:"noopener noreferrer"},sn=e("http://192.168.13.101:9200/_cat/master"),tn=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`vfpgxbusTC6-W3C2Np31EQ 127.0.0.1 127.0.0.1 0adeb7852e00
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),an=n("p",null,"\uFF084\uFF09GET/_cat/indicies\uFF1A\u67E5\u770B\u6240\u6709\u7D22\u5F15 \uFF0C\u7B49\u4EF7\u4E8Emysql\u6570\u636E\u5E93\u7684show databases;",-1),un=e("\u5982\uFF1A "),ln={href:"http://192.168.13.101:9200/_cat/indices",target:"_blank",rel:"noopener noreferrer"},on=e("http://192.168.13.101:9200/_cat/indices"),dn=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>green open .kibana_task_manager_1   KWLtjcKRRuaV9so_v15WYg 1 0 2 0 39.8kb 39.8kb
green open .apm-agent-configuration cuwCpJ5ER0OYsSgAJ7bVYA 1 0 0 0   283b   283b
green open .kibana_1                PqK_LdUYRpWMy4fK0tMSPw 1 0 7 0 31.2kb 31.2kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u7D22\u5F15\u4E00\u4E2A\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_2-\u7D22\u5F15\u4E00\u4E2A\u6587\u6863" aria-hidden="true">#</a> 2\uFF09\u7D22\u5F15\u4E00\u4E2A\u6587\u6863</h4><p>\u4FDD\u5B58\u4E00\u4E2A\u6570\u636E\uFF0C\u4FDD\u5B58\u5728\u54EA\u4E2A\u7D22\u5F15\u7684\u54EA\u4E2A\u7C7B\u578B\u4E0B\uFF0C\u6307\u5B9A\u7528\u90A3\u4E2A\u552F\u4E00\u6807\u8BC6 PUT customer/external/1; \u5728customer\u7D22\u5F15\u4E0B\u7684external\u7C7B\u578B\u4E0B\u4FDD\u5B581\u53F7\u6570\u636E\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT customer/external/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
 &quot;name&quot;:&quot;John Doe&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT\u548CPOST\u90FD\u53EF\u4EE5</p><p>POST\u65B0\u589E\u3002\u5982\u679C\u4E0D\u6307\u5B9Aid\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210id\u3002\u6307\u5B9Aid\u5C31\u4F1A\u4FEE\u6539\u8FD9\u4E2A\u6570\u636E\uFF0C\u5E76\u65B0\u589E\u7248\u672C\u53F7\uFF1B</p><p>PUT\u53EF\u4EE5\u65B0\u589E\u4E5F\u53EF\u4EE5\u4FEE\u6539\u3002PUT\u5FC5\u987B\u6307\u5B9Aid\uFF1B\u7531\u4E8EPUT\u9700\u8981\u6307\u5B9Aid\uFF0C\u6211\u4EEC\u4E00\u822C\u7528\u6765\u505A\u4FEE\u6539\u64CD\u4F5C\uFF0C\u4E0D\u6307\u5B9Aid\u4F1A\u62A5\u9519\u3002</p><p>\u4E0B\u9762\u662F\u5728postman\u4E2D\u7684\u6D4B\u8BD5\u6570\u636E\uFF1A <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501194449944.png" alt="image-20200501194449944"></p><p>\u521B\u5EFA\u6570\u636E\u6210\u529F\u540E\uFF0C\u663E\u793A201 created\u8868\u793A\u63D2\u5165\u8BB0\u5F55\u6210\u529F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;_index&quot;: &quot;customer&quot;,
    &quot;_type&quot;: &quot;external&quot;,
    &quot;_id&quot;: &quot;1&quot;,
    &quot;_version&quot;: 1,
    &quot;result&quot;: &quot;created&quot;,
    &quot;_shards&quot;: {
        &quot;total&quot;: 2,
        &quot;successful&quot;: 1,
        &quot;failed&quot;: 0
    },
    &quot;_seq_no&quot;: 0,
    &quot;_primary_term&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u8FD4\u56DE\u7684\u4E32\u7684\u542B\u4E49\uFF1B\u8FD9\u4E9B\u5E26\u6709\u4E0B\u5212\u7EBF\u5F00\u5934\u7684\uFF0C\u79F0\u4E3A\u5143\u6570\u636E\uFF0C\u53CD\u6620\u4E86\u5F53\u524D\u7684\u57FA\u672C\u4FE1\u606F\u3002</p><p>&quot;_index&quot;: &quot;customer&quot; \u8868\u660E\u8BE5\u6570\u636E\u5728\u54EA\u4E2A\u7D22\u5F15\u4E0B\uFF1B</p><p>&quot;_type&quot;: &quot;external&quot; \u8868\u660E\u8BE5\u6570\u636E\u5728\u54EA\u4E2A\u7C7B\u578B\u4E0B\uFF1B</p><p>&quot;_id&quot;: &quot;1&quot; \u8868\u660E\u88AB\u4FDD\u5B58\u6570\u636E\u7684id\uFF1B</p><p>&quot;_version&quot;: 1, \u88AB\u4FDD\u5B58\u6570\u636E\u7684\u7248\u672C</p><p>&quot;result&quot;: &quot;created&quot; \u8FD9\u91CC\u662F\u521B\u5EFA\u4E86\u4E00\u6761\u6570\u636E\uFF0C\u5982\u679C\u91CD\u65B0put\u4E00\u6761\u6570\u636E\uFF0C\u5219\u8BE5\u72B6\u6001\u4F1A\u53D8\u4E3Aupdated\uFF0C\u5E76\u4E14\u7248\u672C\u53F7\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><p>\u4E0B\u9762\u9009\u7528POST\u65B9\u5F0F\uFF1A</p><p>\u6DFB\u52A0\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4E0D\u6307\u5B9AID\uFF0C\u4F1A\u81EA\u52A8\u7684\u751F\u6210id\uFF0C\u5E76\u4E14\u7C7B\u578B\u662F\u65B0\u589E\uFF1A</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501195619925.png" alt="image-20200501195619925" style="zoom:52%;"><p>\u518D\u6B21\u4F7F\u7528POST\u63D2\u5165\u6570\u636E\uFF0C\u4ECD\u7136\u662F\u65B0\u589E\u7684\uFF1A</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501195732492.png" alt="image-20200501195732492" style="zoom:80%;"><p>\u6DFB\u52A0\u6570\u636E\u7684\u65F6\u5019\uFF0C\u6307\u5B9AID\uFF0C\u4F1A\u4F7F\u7528\u8BE5id\uFF0C\u5E76\u4E14\u7C7B\u578B\u662F\u65B0\u589E\uFF1A</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501200048361.png" alt="image-20200501200048361" style="zoom:66%;"><p>\u518D\u6B21\u4F7F\u7528POST\u63D2\u5165\u6570\u636E\uFF0C\u7C7B\u578B\u4E3Aupdated</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501200132199.png" alt="image-20200501200132199" style="zoom:67%;"><h4 id="_3-\u67E5\u770B\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u770B\u6587\u6863" aria-hidden="true">#</a> 3\uFF09\u67E5\u770B\u6587\u6863</h4><p>GET /customer/external/1</p>`,28),cn={href:"http://192.168.13.101:9200/customer/external/1",target:"_blank",rel:"noopener noreferrer"},vn=e("http://192.168.13.101:9200/customer/external/1"),rn=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;_index&quot;: &quot;customer&quot;,//\u5728\u54EA\u4E2A\u7D22\u5F15
    &quot;_type&quot;: &quot;external&quot;,//\u5728\u54EA\u4E2A\u7C7B\u578B
    &quot;_id&quot;: &quot;1&quot;,//\u8BB0\u5F55id
    &quot;_version&quot;: 3,//\u7248\u672C\u53F7
    &quot;_seq_no&quot;: 6,//\u5E76\u53D1\u63A7\u5236\u5B57\u6BB5\uFF0C\u6BCF\u6B21\u66F4\u65B0\u90FD\u4F1A+1\uFF0C\u7528\u6765\u505A\u4E50\u89C2\u9501
    &quot;_primary_term&quot;: 1,//\u540C\u4E0A\uFF0C\u4E3B\u5206\u7247\u91CD\u65B0\u5206\u914D\uFF0C\u5982\u91CD\u542F\uFF0C\u5C31\u4F1A\u53D8\u5316
    &quot;found&quot;: true,
    &quot;_source&quot;: {
        &quot;name&quot;: &quot;John Doe&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u201Cif_seq_no=1&amp;if_primary_term=1 \u201D\uFF0C\u5F53\u5E8F\u5217\u53F7\u5339\u914D\u7684\u65F6\u5019\uFF0C\u624D\u8FDB\u884C\u4FEE\u6539\uFF0C\u5426\u5219\u4E0D\u4FEE\u6539\u3002</p><p>\u5B9E\u4F8B\uFF1A\u5C06id=1\u7684\u6570\u636E\u66F4\u65B0\u4E3Aname=1\uFF0C\u7136\u540E\u518D\u6B21\u66F4\u65B0\u4E3Aname=2\uFF0C\u8D77\u59CB_seq_no=6\uFF0C_primary_term=1</p><p>\uFF081\uFF09\u5C06name\u66F4\u65B0\u4E3A1</p>`,4),qn={href:"http://192.168.13.101:9200/customer/external/1?if_seq_no=1&if_primary_term=1",target:"_blank",rel:"noopener noreferrer"},mn=e("http://192.168.13.101:9200/customer/external/1?if_seq_no=1&if_primary_term=1"),pn=n("img",{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501212224983.png",alt:"image-20200501212224983",style:{zoom:"61%"}},null,-1),bn=n("p",null,"\uFF082\uFF09\u5C06name\u66F4\u65B0\u4E3A2\uFF0C\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u4F7F\u7528seq_no=6",-1),gn={href:"http://192.168.13.101:9200/customer/external/1?if_seq_no=6&if_primary_term=1",target:"_blank",rel:"noopener noreferrer"},kn=e("http://192.168.13.101:9200/customer/external/1?if_seq_no=6&if_primary_term=1"),hn=n("img",{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501213047499.png",alt:"image-20200501213047499",style:{zoom:"60%"}},null,-1),_n=n("p",null,"\u51FA\u73B0\u66F4\u65B0\u9519\u8BEF\u3002",-1),xn=n("p",null,"\uFF083\uFF09\u67E5\u8BE2\u65B0\u7684\u6570\u636E",-1),fn={href:"http://192.168.13.101:9200/customer/external/1",target:"_blank",rel:"noopener noreferrer"},yn=e("http://192.168.13.101:9200/customer/external/1"),wn=n("p",null,[n("img",{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501212924094.png",alt:"image-20200501212924094"})],-1),An=n("p",null,"\u80FD\u591F\u770B\u5230_seq_no\u53D8\u4E3A7\u3002",-1),En=n("p",null,"\uFF084\uFF09\u518D\u6B21\u66F4\u65B0\uFF0C\u66F4\u65B0\u6210\u529F",-1),Sn={href:"http://192.168.13.101:9200/customer/external/1?if_seq_no=7&if_primary_term=1",target:"_blank",rel:"noopener noreferrer"},Tn=e("http://192.168.13.101:9200/customer/external/1?if_seq_no=7&if_primary_term=1"),Mn=t('<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501213130001.png" alt="image-20200501213130001" style="zoom:75%;"><h4 id="_4-\u66F4\u65B0\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_4-\u66F4\u65B0\u6587\u6863" aria-hidden="true">#</a> 4\uFF09\u66F4\u65B0\u6587\u6863</h4><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501214522818.png" alt="image-20200501214522818"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501215746139.png" alt="image-20200501215746139"></p><p>\uFF081\uFF09POST\u66F4\u65B0\u6587\u6863\uFF0C\u5E26\u6709_update</p>',5),Rn={href:"http://192.168.13.101:9200/customer/external/1/_update",target:"_blank",rel:"noopener noreferrer"},Pn=e("http://192.168.13.101:9200/customer/external/1/_update"),Ln=t(`<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501214810741.png" alt="image-20200501214810741"></p><p>\u5982\u679C\u518D\u6B21\u6267\u884C\u66F4\u65B0\uFF0C\u5219\u4E0D\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u5E8F\u5217\u53F7\u4E5F\u4E0D\u53D1\u751F\u53D8\u5316</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501214912607.png" alt="image-20200501214912607"></p><p>POST\u66F4\u65B0\u65B9\u5F0F\uFF0C\u4F1A\u5BF9\u6BD4\u539F\u6765\u7684\u6570\u636E\uFF0C\u548C\u539F\u6765\u7684\u76F8\u540C\uFF0C\u5219\u4E0D\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF08version\u548C_seq_no\uFF09\u90FD\u4E0D\u53D8\u3002</p><p>\uFF082\uFF09POST\u66F4\u65B0\u6587\u6863\uFF0C\u4E0D\u5E26_update</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501215358666.png" alt="image-20200501215358666"></p><p>\u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\uFF0C\u91CD\u590D\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u6570\u636E\u4E5F\u80FD\u591F\u66F4\u65B0\u6210\u529F\uFF0C\u4E0D\u4F1A\u548C\u539F\u6765\u7684\u6570\u636E\u8FDB\u884C\u5BF9\u6BD4\u3002</p><h4 id="_5-\u5220\u9664\u6587\u6863\u6216\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_5-\u5220\u9664\u6587\u6863\u6216\u7D22\u5F15" aria-hidden="true">#</a> 5\uFF09\u5220\u9664\u6587\u6863\u6216\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE customer/external/1
DELETE customer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1Aelasticsearch\u5E76\u6CA1\u6709\u63D0\u4F9B\u5220\u9664\u7C7B\u578B\u7684\u64CD\u4F5C\uFF0C\u53EA\u63D0\u4F9B\u4E86\u5220\u9664\u7D22\u5F15\u548C\u6587\u6863\u7684\u64CD\u4F5C\u3002</p><p>\u5B9E\u4F8B\uFF1A\u5220\u9664id=1\u7684\u6570\u636E\uFF0C\u5220\u9664\u540E\u7EE7\u7EED\u67E5\u8BE2</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501220559094.png" alt="image-20200501220559094" style="zoom:67%;"><p>\u5B9E\u4F8B\uFF1A\u5220\u9664\u6574\u4E2Acostomer\u7D22\u5F15\u6570\u636E</p><p>\u5220\u9664\u524D\uFF0C\u6240\u6709\u7684\u7D22\u5F15</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>green  open .kibana_task_manager_1   KWLtjcKRRuaV9so_v15WYg 1 0 2 0 39.8kb 39.8kb
green  open .apm-agent-configuration cuwCpJ5ER0OYsSgAJ7bVYA 1 0 0 0   283b   283b
green  open .kibana_1                PqK_LdUYRpWMy4fK0tMSPw 1 0 7 0 31.2kb 31.2kb
yellow open customer                 nzDYCdnvQjSsapJrAIT8Zw 1 1 4 0  4.4kb  4.4kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5220\u9664\u201C customer \u201D\u7D22\u5F15</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501221105476.png" alt="image-20200501221105476"></p><p>\u5220\u9664\u540E\uFF0C\u6240\u6709\u7684\u7D22\u5F15</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>green  open .kibana_task_manager_1   KWLtjcKRRuaV9so_v15WYg 1 0 2 0 39.8kb 39.8kb
green  open .apm-agent-configuration cuwCpJ5ER0OYsSgAJ7bVYA 1 0 0 0   283b   283b
green  open .kibana_1                PqK_LdUYRpWMy4fK0tMSPw 1 0 7 0 31.2kb 31.2kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-eleasticsearch\u7684\u6279\u91CF\u64CD\u4F5C\u2014\u2014bulk" tabindex="-1"><a class="header-anchor" href="#_6-eleasticsearch\u7684\u6279\u91CF\u64CD\u4F5C\u2014\u2014bulk" aria-hidden="true">#</a> 6\uFF09eleasticsearch\u7684\u6279\u91CF\u64CD\u4F5C\u2014\u2014bulk</h4><p>\u8BED\u6CD5\u683C\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{action:{metadata}}\\n   //\u4F8B\u5982index\u4FDD\u5B58\u8BB0\u5F55\uFF0Cupdate\u66F4\u65B0
{request body  }\\n

{action:{metadata}}\\n
{request body  }\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684\u6279\u91CF\u64CD\u4F5C\uFF0C\u5F53\u53D1\u751F\u67D0\u4E00\u6761\u6267\u884C\u53D1\u751F\u5931\u8D25\u65F6\uFF0C\u5176\u4ED6\u7684\u6570\u636E\u4ECD\u7136\u80FD\u591F\u63A5\u7740\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5F7C\u6B64\u4E4B\u95F4\u662F\u72EC\u7ACB\u7684\u3002</p><p>bulk api\u4EE5\u6B64\u6309\u987A\u5E8F\u6267\u884C\u6240\u6709\u7684action\uFF08\u52A8\u4F5C\uFF09\u3002\u5982\u679C\u4E00\u4E2A\u5355\u4E2A\u7684\u52A8\u4F5C\u56E0\u4EFB\u4F55\u539F\u56E0\u5931\u8D25\uFF0C\u5B83\u5C06\u7EE7\u7EED\u5904\u7406\u5B83\u540E\u9762\u5269\u4F59\u7684\u52A8\u4F5C\u3002\u5F53bulk api\u8FD4\u56DE\u65F6\uFF0C\u5B83\u5C06\u63D0\u4F9B\u6BCF\u4E2A\u52A8\u4F5C\u7684\u72B6\u6001\uFF08\u4E0E\u53D1\u9001\u7684\u987A\u5E8F\u76F8\u540C\uFF09\uFF0C\u6240\u4EE5\u60A8\u53EF\u4EE5\u68C0\u67E5\u662F\u5426\u4E00\u4E2A\u6307\u5B9A\u7684\u52A8\u4F5C\u662F\u5426\u5931\u8D25\u4E86\u3002</p><p>\u5B9E\u4F8B1: \u6267\u884C\u591A\u6761\u6570\u636E (postman \u62A5\u9519\uFF0C\u5728kibana\u4E2D\u7684Dev_tools\u4E2D\u6267\u884C)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /customer/external/_bulk
{&quot;index&quot;:{&quot;_id&quot;:&quot;1&quot;}}
{&quot;name&quot;:&quot;John Doe&quot;}
{&quot;index&quot;:{&quot;_id&quot;:&quot;2&quot;}}
{&quot;name&quot;:&quot;John Doe&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! Deprecation: [types removal] Specifying types in bulk requests is deprecated.
{
  &quot;took&quot; : 491,
  &quot;errors&quot; : false,
  &quot;items&quot; : [
    {
      &quot;index&quot; : {
        &quot;_index&quot; : &quot;customer&quot;,
        &quot;_type&quot; : &quot;external&quot;,
        &quot;_id&quot; : &quot;1&quot;,
        &quot;_version&quot; : 1,
        &quot;result&quot; : &quot;created&quot;,
        &quot;_shards&quot; : {
          &quot;total&quot; : 2,
          &quot;successful&quot; : 1,
          &quot;failed&quot; : 0
        },
        &quot;_seq_no&quot; : 0,
        &quot;_primary_term&quot; : 1,
        &quot;status&quot; : 201
      }
    },
    {
      &quot;index&quot; : {
        &quot;_index&quot; : &quot;customer&quot;,
        &quot;_type&quot; : &quot;external&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_version&quot; : 1,
        &quot;result&quot; : &quot;created&quot;,
        &quot;_shards&quot; : {
          &quot;total&quot; : 2,
          &quot;successful&quot; : 1,
          &quot;failed&quot; : 0
        },
        &quot;_seq_no&quot; : 1,
        &quot;_primary_term&quot; : 1,
        &quot;status&quot; : 201
      }
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u4F8B2\uFF1A\u5BF9\u4E8E\u6574\u4E2A\u7D22\u5F15\u6267\u884C\u6279\u91CF\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /_bulk
{&quot;delete&quot;:{&quot;_index&quot;:&quot;website&quot;,&quot;_type&quot;:&quot;blog&quot;,&quot;_id&quot;:&quot;123&quot;}}
{&quot;create&quot;:{&quot;_index&quot;:&quot;website&quot;,&quot;_type&quot;:&quot;blog&quot;,&quot;_id&quot;:&quot;123&quot;}}
{&quot;title&quot;:&quot;my first blog post&quot;}
{&quot;index&quot;:{&quot;_index&quot;:&quot;website&quot;,&quot;_type&quot;:&quot;blog&quot;}}
{&quot;title&quot;:&quot;my second blog post&quot;}
{&quot;update&quot;:{&quot;_index&quot;:&quot;website&quot;,&quot;_type&quot;:&quot;blog&quot;,&quot;_id&quot;:&quot;123&quot;}}
{&quot;doc&quot;:{&quot;title&quot;:&quot;my updated blog post&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! Deprecation: [types removal] Specifying types in bulk requests is deprecated.
{
  &quot;took&quot; : 608,
  &quot;errors&quot; : false,
  &quot;items&quot; : [
    {
      &quot;delete&quot; : {
        &quot;_index&quot; : &quot;website&quot;,
        &quot;_type&quot; : &quot;blog&quot;,
        &quot;_id&quot; : &quot;123&quot;,
        &quot;_version&quot; : 1,
        &quot;result&quot; : &quot;not_found&quot;,
        &quot;_shards&quot; : {
          &quot;total&quot; : 2,
          &quot;successful&quot; : 1,
          &quot;failed&quot; : 0
        },
        &quot;_seq_no&quot; : 0,
        &quot;_primary_term&quot; : 1,
        &quot;status&quot; : 404
      }
    },
    {
      &quot;create&quot; : {
        &quot;_index&quot; : &quot;website&quot;,
        &quot;_type&quot; : &quot;blog&quot;,
        &quot;_id&quot; : &quot;123&quot;,
        &quot;_version&quot; : 2,
        &quot;result&quot; : &quot;created&quot;,
        &quot;_shards&quot; : {
          &quot;total&quot; : 2,
          &quot;successful&quot; : 1,
          &quot;failed&quot; : 0
        },
        &quot;_seq_no&quot; : 1,
        &quot;_primary_term&quot; : 1,
        &quot;status&quot; : 201
      }
    },
    {
      &quot;index&quot; : {
        &quot;_index&quot; : &quot;website&quot;,
        &quot;_type&quot; : &quot;blog&quot;,
        &quot;_id&quot; : &quot;MCOs0HEBHYK_MJXUyYIz&quot;,
        &quot;_version&quot; : 1,
        &quot;result&quot; : &quot;created&quot;,
        &quot;_shards&quot; : {
          &quot;total&quot; : 2,
          &quot;successful&quot; : 1,
          &quot;failed&quot; : 0
        },
        &quot;_seq_no&quot; : 2,
        &quot;_primary_term&quot; : 1,
        &quot;status&quot; : 201
      }
    },
    {
      &quot;update&quot; : {
        &quot;_index&quot; : &quot;website&quot;,
        &quot;_type&quot; : &quot;blog&quot;,
        &quot;_id&quot; : &quot;123&quot;,
        &quot;_version&quot; : 3,
        &quot;result&quot; : &quot;updated&quot;,
        &quot;_shards&quot; : {
          &quot;total&quot; : 2,
          &quot;successful&quot; : 1,
          &quot;failed&quot; : 0
        },
        &quot;_seq_no&quot; : 3,
        &quot;_primary_term&quot; : 1,
        &quot;status&quot; : 200
      }
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-\u6837\u672C\u6D4B\u8BD5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_7-\u6837\u672C\u6D4B\u8BD5\u6570\u636E" aria-hidden="true">#</a> 7\uFF09\u6837\u672C\u6D4B\u8BD5\u6570\u636E</h4><p>\u51C6\u5907\u4E86\u4E00\u4EFD\u987E\u5BA2\u94F6\u884C\u8D26\u6237\u4FE1\u606F\u7684\u865A\u6784\u7684\u6587\u6863\u6837\u672C\u3002\u6BCF\u4E2A\u6587\u6863\u90FD\u6709\u4E0B\u5217\u7684schema\uFF08\u6A21\u5F0F\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	&quot;account_number&quot;: 1,
	&quot;balance&quot;: 39225,
	&quot;firstname&quot;: &quot;Amber&quot;,
	&quot;lastname&quot;: &quot;Duke&quot;,
	&quot;age&quot;: 32,
	&quot;gender&quot;: &quot;M&quot;,
	&quot;address&quot;: &quot;880 Holmes Lane&quot;,
	&quot;employer&quot;: &quot;Pyrami&quot;,
	&quot;email&quot;: &quot;amberduke@pyrami.com&quot;,
	&quot;city&quot;: &quot;Brogan&quot;,
	&quot;state&quot;: &quot;IL&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),Cn={href:"https://gitee.com/xlh_blog/common_content/blob/master/es%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},On=e("https://gitee.com/xlh_blog/common_content/blob/master/es\u6D4B\u8BD5\u6570\u636E"),zn=e(". \uFF0C\u5BFC\u5165\u6D4B\u8BD5\u6570\u636E\uFF0C"),Bn=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>POST bank/account/_bulk
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u3001\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u68C0\u7D22" aria-hidden="true">#</a> 3\u3001\u68C0\u7D22</h3><h4 id="_1-search-api" tabindex="-1"><a class="header-anchor" href="#_1-search-api" aria-hidden="true">#</a> 1\uFF09search Api</h4><p>ES\u652F\u6301\u4E24\u79CD\u57FA\u672C\u65B9\u5F0F\u68C0\u7D22\uFF1B</p><ul><li>\u901A\u8FC7REST request uri \u53D1\u9001\u641C\u7D22\u53C2\u6570 \uFF08uri +\u68C0\u7D22\u53C2\u6570\uFF09\uFF1B</li><li>\u901A\u8FC7REST request body \u6765\u53D1\u9001\u5B83\u4EEC\uFF08uri+\u8BF7\u6C42\u4F53\uFF09\uFF1B</li></ul><p>\u4FE1\u606F\u68C0\u7D22</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200501233938697.png" alt="image-20200501233938697"></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502000221422.png" alt=""></p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502000733594.png" alt="image-20200502000733594"></p><p>uri+\u8BF7\u6C42\u4F53\u8FDB\u884C\u68C0\u7D22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
{
  &quot;query&quot;: { &quot;match_all&quot;: {} },
  &quot;sort&quot;: [
    { &quot;account_number&quot;: &quot;asc&quot; },
    {&quot;balance&quot;:&quot;desc&quot;}
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP\u5BA2\u6237\u7AEF\u5DE5\u5177\uFF08\uFF09\uFF0Cget\u8BF7\u6C42\u4E0D\u80FD\u591F\u643A\u5E26\u8BF7\u6C42\u4F53\uFF0C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>GET bank<span class="token operator">/</span>_search<span class="token operator">?</span>q<span class="token operator">=</span><span class="token operator">*</span><span class="token operator">&amp;</span>sort<span class="token operator">=</span>account_number<span class="token operator">:</span>asc
<span class="token comment">//q=* \u67E5\u8BE2\u6240\u6709\uFF0Csort=account_number:asc \u6309\u7167account_number\u8FDB\u884Casc\u5347\u5E8F\u6392\u5217sort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 235,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1000,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;0&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 0,
          &quot;balance&quot; : 16623,
          &quot;firstname&quot; : &quot;Bradshaw&quot;,
          &quot;lastname&quot; : &quot;Mckenzie&quot;,
          &quot;age&quot; : 29,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;244 Columbus Place&quot;,
          &quot;employer&quot; : &quot;Euron&quot;,
          &quot;email&quot; : &quot;bradshawmckenzie@euron.com&quot;,
          &quot;city&quot; : &quot;Hobucken&quot;,
          &quot;state&quot; : &quot;CO&quot;
        },
        &quot;sort&quot; : [
          0
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;1&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 1,
          &quot;balance&quot; : 39225,
          &quot;firstname&quot; : &quot;Amber&quot;,
          &quot;lastname&quot; : &quot;Duke&quot;,
          &quot;age&quot; : 32,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;880 Holmes Lane&quot;,
          &quot;employer&quot; : &quot;Pyrami&quot;,
          &quot;email&quot; : &quot;amberduke@pyrami.com&quot;,
          &quot;city&quot; : &quot;Brogan&quot;,
          &quot;state&quot; : &quot;IL&quot;
        },
        &quot;sort&quot; : [
          1
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 2,
          &quot;balance&quot; : 28838,
          &quot;firstname&quot; : &quot;Roberta&quot;,
          &quot;lastname&quot; : &quot;Bender&quot;,
          &quot;age&quot; : 22,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;560 Kingsway Place&quot;,
          &quot;employer&quot; : &quot;Chillium&quot;,
          &quot;email&quot; : &quot;robertabender@chillium.com&quot;,
          &quot;city&quot; : &quot;Bennett&quot;,
          &quot;state&quot; : &quot;LA&quot;
        },
        &quot;sort&quot; : [
          2
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;3&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 3,
          &quot;balance&quot; : 44947,
          &quot;firstname&quot; : &quot;Levine&quot;,
          &quot;lastname&quot; : &quot;Burks&quot;,
          &quot;age&quot; : 26,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;328 Wilson Avenue&quot;,
          &quot;employer&quot; : &quot;Amtap&quot;,
          &quot;email&quot; : &quot;levineburks@amtap.com&quot;,
          &quot;city&quot; : &quot;Cochranville&quot;,
          &quot;state&quot; : &quot;HI&quot;
        },
        &quot;sort&quot; : [
          3
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;4&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 4,
          &quot;balance&quot; : 27658,
          &quot;firstname&quot; : &quot;Rodriquez&quot;,
          &quot;lastname&quot; : &quot;Flores&quot;,
          &quot;age&quot; : 31,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;986 Wyckoff Avenue&quot;,
          &quot;employer&quot; : &quot;Tourmania&quot;,
          &quot;email&quot; : &quot;rodriquezflores@tourmania.com&quot;,
          &quot;city&quot; : &quot;Eastvale&quot;,
          &quot;state&quot; : &quot;HI&quot;
        },
        &quot;sort&quot; : [
          4
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;5&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 5,
          &quot;balance&quot; : 29342,
          &quot;firstname&quot; : &quot;Leola&quot;,
          &quot;lastname&quot; : &quot;Stewart&quot;,
          &quot;age&quot; : 30,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;311 Elm Place&quot;,
          &quot;employer&quot; : &quot;Diginetic&quot;,
          &quot;email&quot; : &quot;leolastewart@diginetic.com&quot;,
          &quot;city&quot; : &quot;Fairview&quot;,
          &quot;state&quot; : &quot;NJ&quot;
        },
        &quot;sort&quot; : [
          5
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;6&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 6,
          &quot;balance&quot; : 5686,
          &quot;firstname&quot; : &quot;Hattie&quot;,
          &quot;lastname&quot; : &quot;Bond&quot;,
          &quot;age&quot; : 36,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;671 Bristol Street&quot;,
          &quot;employer&quot; : &quot;Netagy&quot;,
          &quot;email&quot; : &quot;hattiebond@netagy.com&quot;,
          &quot;city&quot; : &quot;Dante&quot;,
          &quot;state&quot; : &quot;TN&quot;
        },
        &quot;sort&quot; : [
          6
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;7&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 7,
          &quot;balance&quot; : 39121,
          &quot;firstname&quot; : &quot;Levy&quot;,
          &quot;lastname&quot; : &quot;Richard&quot;,
          &quot;age&quot; : 22,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;820 Logan Street&quot;,
          &quot;employer&quot; : &quot;Teraprene&quot;,
          &quot;email&quot; : &quot;levyrichard@teraprene.com&quot;,
          &quot;city&quot; : &quot;Shrewsbury&quot;,
          &quot;state&quot; : &quot;MO&quot;
        },
        &quot;sort&quot; : [
          7
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;8&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 8,
          &quot;balance&quot; : 48868,
          &quot;firstname&quot; : &quot;Jan&quot;,
          &quot;lastname&quot; : &quot;Burns&quot;,
          &quot;age&quot; : 35,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;699 Visitation Place&quot;,
          &quot;employer&quot; : &quot;Glasstep&quot;,
          &quot;email&quot; : &quot;janburns@glasstep.com&quot;,
          &quot;city&quot; : &quot;Wakulla&quot;,
          &quot;state&quot; : &quot;AZ&quot;
        },
        &quot;sort&quot; : [
          8
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;9&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 9,
          &quot;balance&quot; : 24776,
          &quot;firstname&quot; : &quot;Opal&quot;,
          &quot;lastname&quot; : &quot;Meadows&quot;,
          &quot;age&quot; : 39,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;963 Neptune Avenue&quot;,
          &quot;employer&quot; : &quot;Cedward&quot;,
          &quot;email&quot; : &quot;opalmeadows@cedward.com&quot;,
          &quot;city&quot; : &quot;Olney&quot;,
          &quot;state&quot; : &quot;OH&quot;
        },
        &quot;sort&quot; : [
          9
        ]
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF081\uFF09\u53EA\u67099\u6761\u6570\u636E\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5B58\u5728\u5206\u9875\u67E5\u8BE2\uFF1B</p>`,16),Hn=e("\uFF082\uFF09\u8BE6\u7EC6\u7684\u5B57\u6BB5\u4FE1\u606F\uFF0C\u53C2\u7167\uFF1A "),Gn={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-search.html",target:"_blank",rel:"noopener noreferrer"},Nn=e("https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-search.html"),In=t(`<blockquote><p>The response also provides the following information about the search request:</p><ul><li><code>took</code> \u2013 how long it took Elasticsearch to run the query, in milliseconds</li><li><code>timed_out</code> \u2013 whether or not the search request timed out</li><li><code>_shards</code> \u2013 how many shards were searched and a breakdown of how many shards succeeded, failed, or were skipped.</li><li><code>max_score</code> \u2013 the score of the most relevant document found</li><li><code>hits.total.value</code> - how many matching documents were found</li><li><code>hits.sort</code> - the document\u2019s sort position (when not sorting by relevance score)</li><li><code>hits._score</code> - the document\u2019s relevance score (not applicable when using <code>match_all</code>)</li></ul></blockquote><h4 id="_2-query-dsl" tabindex="-1"><a class="header-anchor" href="#_2-query-dsl" aria-hidden="true">#</a> 2\uFF09Query DSL</h4><h5 id="_1-\u57FA\u672C\u8BED\u6CD5\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u8BED\u6CD5\u683C\u5F0F" aria-hidden="true">#</a> \uFF081\uFF09\u57FA\u672C\u8BED\u6CD5\u683C\u5F0F</h5><p>Elasticsearch\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u4EE5\u6267\u884C\u67E5\u8BE2\u7684\u98CE\u683C\u7684DSL\u3002\u8FD9\u4E2A\u88AB\u79F0\u4E3AQuery DSL\uFF0C\u8BE5\u67E5\u8BE2\u8BED\u8A00\u975E\u5E38\u5168\u9762\u3002</p><p>\u4E00\u4E2A\u67E5\u8BE2\u8BED\u53E5\u7684\u5178\u578B\u7ED3\u6784</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>QUERY_NAME:{
   ARGUMENT:VALUE,
   ARGUMENT:VALUE,...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9488\u5BF9\u4E8E\u67D0\u4E2A\u5B57\u6BB5\uFF0C\u90A3\u4E48\u5B83\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  QUERY_NAME:{
     FIELD_NAME:{
       ARGUMENT:VALUE,
       ARGUMENT:VALUE,...
      }   
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;from&quot;: 0,
  &quot;size&quot;: 5,
  &quot;sort&quot;: [
    {
      &quot;account_number&quot;: {
        &quot;order&quot;: &quot;desc&quot;
      }
    }
  ]
}
//match_al\u67E5\u8BE2\u6240\u6709\uFF0C\u4ECE\u7B2C0\u4E2A\u6570\u636E\u62FF5\u4E2A\u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>query\u5B9A\u4E49\u5982\u4F55\u67E5\u8BE2\uFF1B</p><ul><li>match_all\u67E5\u8BE2\u7C7B\u578B\u3010\u4EE3\u8868\u67E5\u8BE2\u6240\u6709\u7684\u6240\u6709\u3011\uFF0Ces\u4E2D\u53EF\u4EE5\u5728query\u4E2D\u7EC4\u5408\u975E\u5E38\u591A\u7684\u67E5\u8BE2\u7C7B\u578B\u5B8C\u6210\u590D\u6742\u67E5\u8BE2\uFF1B</li><li>\u9664\u4E86query\u53C2\u6570\u4E4B\u5916\uFF0C\u6211\u4EEC\u53EF\u4E5F\u4F20\u9012\u5176\u4ED6\u7684\u53C2\u6570\u4EE5\u6539\u53D8\u67E5\u8BE2\u7ED3\u679C\uFF0C\u5982sort\uFF0Csize\uFF1B</li><li>from+size\u9650\u5B9A\uFF0C\u5B8C\u6210\u5206\u9875\u529F\u80FD\uFF1B</li><li>sort\u6392\u5E8F\uFF0C\u591A\u5B57\u6BB5\u6392\u5E8F\uFF0C\u4F1A\u5728\u524D\u5E8F\u5B57\u6BB5\u76F8\u7B49\u65F6\u540E\u7EED\u5B57\u6BB5\u5185\u90E8\u6392\u5E8F\uFF0C\u5426\u5219\u4EE5\u524D\u5E8F\u4E3A\u51C6\uFF1B</li></ul><h5 id="_2-\u8FD4\u56DE\u90E8\u5206\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-\u8FD4\u56DE\u90E8\u5206\u5B57\u6BB5" aria-hidden="true">#</a> \uFF082\uFF09\u8FD4\u56DE\u90E8\u5206\u5B57\u6BB5</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;from&quot;: 0,
  &quot;size&quot;: 5,
  &quot;sort&quot;: [
    {
      &quot;account_number&quot;: {
        &quot;order&quot;: &quot;desc&quot;
      }
    }
  ],
  &quot;_source&quot;: [&quot;balance&quot;,&quot;firstname&quot;]
  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 18,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1000,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;999&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;firstname&quot; : &quot;Dorothy&quot;,
          &quot;balance&quot; : 6087
        },
        &quot;sort&quot; : [
          999
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;998&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;firstname&quot; : &quot;Letha&quot;,
          &quot;balance&quot; : 16869
        },
        &quot;sort&quot; : [
          998
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;997&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;firstname&quot; : &quot;Combs&quot;,
          &quot;balance&quot; : 25311
        },
        &quot;sort&quot; : [
          997
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;996&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;firstname&quot; : &quot;Andrews&quot;,
          &quot;balance&quot; : 17541
        },
        &quot;sort&quot; : [
          996
        ]
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;995&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;firstname&quot; : &quot;Phelps&quot;,
          &quot;balance&quot; : 21153
        },
        &quot;sort&quot; : [
          995
        ]
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-match\u5339\u914D\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_3-match\u5339\u914D\u67E5\u8BE2" aria-hidden="true">#</a> \uFF083\uFF09match\u5339\u914D\u67E5\u8BE2</h5><ul><li>\u57FA\u672C\u7C7B\u578B\uFF08\u975E\u5B57\u7B26\u4E32\uFF09\uFF0C&quot;account_number&quot;: 20 \u53EF\u52A0\u53EF\u4E0D\u52A0\u201C \u201D \u4E0D\u52A0\u5C31\u662F\u7CBE\u786E\u5339\u914D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;account_number&quot;: &quot;20&quot;
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>match\u8FD4\u56DEaccount_number=20\u7684\u6570\u636E\u3002</p><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 1,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 1.0,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;20&quot;,
        &quot;_score&quot; : 1.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 20,
          &quot;balance&quot; : 16418,
          &quot;firstname&quot; : &quot;Elinor&quot;,
          &quot;lastname&quot; : &quot;Ratliff&quot;,
          &quot;age&quot; : 36,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;282 Kings Place&quot;,
          &quot;employer&quot; : &quot;Scentric&quot;,
          &quot;email&quot; : &quot;elinorratliff@scentric.com&quot;,
          &quot;city&quot; : &quot;Ribera&quot;,
          &quot;state&quot; : &quot;WA&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B57\u7B26\u4E32\uFF0C\u5168\u6587\u68C0\u7D22\u201C \u201D \u6A21\u7CCA\u67E5\u8BE2</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;: &quot;kings&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u6587\u68C0\u7D22\uFF0C\u6700\u7EC8\u4F1A\u6309\u7167\u8BC4\u5206\u8FDB\u884C\u6392\u5E8F\uFF0C\u4F1A\u5BF9\u68C0\u7D22\u6761\u4EF6\u8FDB\u884C\u5206\u8BCD\u5339\u914D\u3002</p><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 30,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 2,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 5.990829,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;20&quot;,
        &quot;_score&quot; : 5.990829,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 20,
          &quot;balance&quot; : 16418,
          &quot;firstname&quot; : &quot;Elinor&quot;,
          &quot;lastname&quot; : &quot;Ratliff&quot;,
          &quot;age&quot; : 36,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;282 Kings Place&quot;,
          &quot;employer&quot; : &quot;Scentric&quot;,
          &quot;email&quot; : &quot;elinorratliff@scentric.com&quot;,
          &quot;city&quot; : &quot;Ribera&quot;,
          &quot;state&quot; : &quot;WA&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;722&quot;,
        &quot;_score&quot; : 5.990829,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 722,
          &quot;balance&quot; : 27256,
          &quot;firstname&quot; : &quot;Roberts&quot;,
          &quot;lastname&quot; : &quot;Beasley&quot;,
          &quot;age&quot; : 34,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;305 Kings Hwy&quot;,
          &quot;employer&quot; : &quot;Quintity&quot;,
          &quot;email&quot; : &quot;robertsbeasley@quintity.com&quot;,
          &quot;city&quot; : &quot;Hayden&quot;,
          &quot;state&quot; : &quot;PA&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-match-phrase-\u77ED\u53E5\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_4-match-phrase-\u77ED\u53E5\u5339\u914D" aria-hidden="true">#</a> \uFF084\uFF09match_phrase [\u77ED\u53E5\u5339\u914D]</h5><p>\u5C06\u9700\u8981\u5339\u914D\u7684\u503C\u5F53\u6210\u4E00\u6574\u4E2A\u5355\u8BCD\uFF08\u4E0D\u5206\u8BCD\uFF09\u8FDB\u884C\u68C0\u7D22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match_phrase&quot;: {
      &quot;address&quot;: &quot;mill road&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u5904address\u4E2D\u5305\u542Bmill road\u7684\u6240\u6709\u8BB0\u5F55\uFF0C\u5E76\u7ED9\u51FA\u76F8\u5173\u6027\u5F97\u5206</p><p>\u67E5\u770B\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 32,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 8.926605,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 8.926605,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>match_phrase\u548Cmatch\u7684\u533A\u522B\uFF0C\u89C2\u5BDF\u5982\u4E0B\u5B9E\u4F8B\uFF1A</p><p>match_phrase\u662F\u505A\u77ED\u8BED\u5339\u914D</p><p>match\u662F\u5206\u8BCD\u5339\u914D\uFF0C\u4F8B\u5982990 Mill\u5339\u914D\u542B\u6709<strong>990\u6216\u8005Mill</strong>\u7684\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match_phrase&quot;: {
      &quot;address&quot;: &quot;990 Mill&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 0,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 10.806405,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 10.806405,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528match\u7684keyword</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address.keyword&quot;: &quot;990 Mill&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF0C\u4E00\u6761\u4E5F\u672A\u5339\u914D\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 0,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 0,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5339\u914D\u6761\u4EF6\u4E3A\u201C990 Mill Road\u201D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address.keyword&quot;: &quot;990 Mill Road&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u51FA\u4E00\u6761\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 1,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 6.5032897,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 6.5032897,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u672C\u5B57\u6BB5\u7684\u914D\uFF0C\u4F7F\u7528keyword\uFF0C\u5339\u914D\u7684\u6761\u4EF6\u5C31\u662F\u8981\u663E\u793A\u5B57\u6BB5\u7684\u5168\u90E8\u503C\uFF0C\u8981\u8FDB\u884C\u7CBE\u786E\u5339\u914D\u7684\u3002</p><p>match_phrase\u662F\u505A\u77ED\u8BED\u5339\u914D\uFF0C\u53EA\u8981\u6587\u672C\u4E2D\u5305\u542B\u5339\u914D\u6761\u4EF6\u65E2\u5305\u542B\u8FD9\u4E2A\u77ED\u8BED\uFF0C\u5C31\u80FD\u5339\u914D\u5230\u3002</p><h5 id="_5-multi-math\u3010\u591A\u5B57\u6BB5\u5339\u914D\u3011" tabindex="-1"><a class="header-anchor" href="#_5-multi-math\u3010\u591A\u5B57\u6BB5\u5339\u914D\u3011" aria-hidden="true">#</a> \uFF085\uFF09multi_math\u3010\u591A\u5B57\u6BB5\u5339\u914D\u3011</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;multi_match&quot;: {
      &quot;query&quot;: &quot;mill&quot;,
      &quot;fields&quot;: [
        &quot;state&quot;,
        &quot;address&quot;
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state\u6216\u8005address\u4E2D\u5305\u542Bmill\uFF0C\u5E76\u4E14\u5728\u67E5\u8BE2\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5BF9\u4E8E\u67E5\u8BE2\u6761\u4EF6\u8FDB\u884C\u5206\u8BCD\u3002</p><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 28,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 4,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 5.4032025,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 5.4032025,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;136&quot;,
        &quot;_score&quot; : 5.4032025,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 136,
          &quot;balance&quot; : 45801,
          &quot;firstname&quot; : &quot;Winnie&quot;,
          &quot;lastname&quot; : &quot;Holland&quot;,
          &quot;age&quot; : 38,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;198 Mill Lane&quot;,
          &quot;employer&quot; : &quot;Neteria&quot;,
          &quot;email&quot; : &quot;winnieholland@neteria.com&quot;,
          &quot;city&quot; : &quot;Urie&quot;,
          &quot;state&quot; : &quot;IL&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;345&quot;,
        &quot;_score&quot; : 5.4032025,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 345,
          &quot;balance&quot; : 9812,
          &quot;firstname&quot; : &quot;Parker&quot;,
          &quot;lastname&quot; : &quot;Hines&quot;,
          &quot;age&quot; : 38,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;715 Mill Avenue&quot;,
          &quot;employer&quot; : &quot;Baluba&quot;,
          &quot;email&quot; : &quot;parkerhines@baluba.com&quot;,
          &quot;city&quot; : &quot;Blackgum&quot;,
          &quot;state&quot; : &quot;KY&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;472&quot;,
        &quot;_score&quot; : 5.4032025,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 472,
          &quot;balance&quot; : 25571,
          &quot;firstname&quot; : &quot;Lee&quot;,
          &quot;lastname&quot; : &quot;Long&quot;,
          &quot;age&quot; : 32,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;288 Mill Street&quot;,
          &quot;employer&quot; : &quot;Comverges&quot;,
          &quot;email&quot; : &quot;leelong@comverges.com&quot;,
          &quot;city&quot; : &quot;Movico&quot;,
          &quot;state&quot; : &quot;MT&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-bool\u7528\u6765\u505A\u590D\u5408\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_6-bool\u7528\u6765\u505A\u590D\u5408\u67E5\u8BE2" aria-hidden="true">#</a> \uFF086\uFF09bool\u7528\u6765\u505A\u590D\u5408\u67E5\u8BE2</h5><p>\u590D\u5408\u8BED\u53E5\u53EF\u4EE5\u5408\u5E76\uFF0C\u4EFB\u4F55\u5176\u4ED6\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5305\u62EC\u7B26\u5408\u8BED\u53E5\u3002\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u590D\u5408\u8BED\u53E5\u4E4B\u95F4 \u53EF\u4EE5\u4E92\u76F8\u5D4C\u5957\uFF0C\u53EF\u4EE5\u8868\u8FBE\u975E\u5E38\u590D\u6742\u7684\u903B\u8F91\u3002</p><p>must\uFF1A\u5FC5\u987B\u8FBE\u5230must\u6240\u5217\u4E3E\u7684\u6240\u6709\u6761\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
   &quot;query&quot;:{
        &quot;bool&quot;:{
             &quot;must&quot;:[
              {&quot;match&quot;:{&quot;address&quot;:&quot;mill&quot;}},
              {&quot;match&quot;:{&quot;gender&quot;:&quot;M&quot;}}
             ]
         }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>must_not\uFF0C\u5FC5\u987B\u4E0D\u5339\u914Dmust_not\u6240\u5217\u4E3E\u7684\u6240\u6709\u6761\u4EF6\u3002</p><p>should\uFF0C\u5E94\u8BE5\u6EE1\u8DB3should\u6240\u5217\u4E3E\u7684\u6761\u4EF6\u3002</p><p>\u5B9E\u4F8B\uFF1A\u67E5\u8BE2gender=m\uFF0C\u5E76\u4E14address=mill\u7684\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;gender&quot;: &quot;M&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;address&quot;: &quot;mill&quot;
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 1,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 3,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 6.0824604,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 6.0824604,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;136&quot;,
        &quot;_score&quot; : 6.0824604,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 136,
          &quot;balance&quot; : 45801,
          &quot;firstname&quot; : &quot;Winnie&quot;,
          &quot;lastname&quot; : &quot;Holland&quot;,
          &quot;age&quot; : 38,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;198 Mill Lane&quot;,
          &quot;employer&quot; : &quot;Neteria&quot;,
          &quot;email&quot; : &quot;winnieholland@neteria.com&quot;,
          &quot;city&quot; : &quot;Urie&quot;,
          &quot;state&quot; : &quot;IL&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;345&quot;,
        &quot;_score&quot; : 6.0824604,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 345,
          &quot;balance&quot; : 9812,
          &quot;firstname&quot; : &quot;Parker&quot;,
          &quot;lastname&quot; : &quot;Hines&quot;,
          &quot;age&quot; : 38,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;715 Mill Avenue&quot;,
          &quot;employer&quot; : &quot;Baluba&quot;,
          &quot;email&quot; : &quot;parkerhines@baluba.com&quot;,
          &quot;city&quot; : &quot;Blackgum&quot;,
          &quot;state&quot; : &quot;KY&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>must_not\uFF1A\u5FC5\u987B\u4E0D\u662F\u6307\u5B9A\u7684\u60C5\u51B5</strong></p><p>\u5B9E\u4F8B\uFF1A\u67E5\u8BE2gender=m\uFF0C\u5E76\u4E14address=mill\u7684\u6570\u636E\uFF0C\u4F46\u662Fage\u4E0D\u7B49\u4E8E38\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;gender&quot;: &quot;M&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;address&quot;: &quot;mill&quot;
          }
        }
      ],
      &quot;must_not&quot;: [
        {
          &quot;match&quot;: {
            &quot;age&quot;: &quot;38&quot;
          }
        }
      ]
    }
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 4,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 6.0824604,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 6.0824604,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>should\uFF1A\u5E94\u8BE5\u8FBE\u5230should\u5217\u4E3E\u7684\u6761\u4EF6\uFF0C\u5982\u679C\u5230\u8FBE\u4F1A\u589E\u52A0\u76F8\u5173\u6587\u6863\u7684\u8BC4\u5206\uFF0C\u5E76\u4E0D\u4F1A\u6539\u53D8\u67E5\u8BE2\u7684\u7ED3\u679C\u3002\u5982\u679Cquery\u4E2D\u53EA\u6709should\u4E14\u53EA\u6709\u4E00\u79CD\u5339\u914D\u89C4\u5219\uFF0C\u90A3\u4E48should\u7684\u6761\u4EF6\u5C31\u4F1A\u88AB\u4F5C\u4E3A\u9ED8\u8BA4\u5339\u914D\u6761\u4EF6\u800C\u53BB\u6539\u53D8\u67E5\u8BE2\u7ED3\u679C\u3002</strong></p><p>\u5B9E\u4F8B\uFF1A\u5339\u914DlastName\u5E94\u8BE5\u7B49\u4E8EWallace\u7684\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;gender&quot;: &quot;M&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;address&quot;: &quot;mill&quot;
          }
        }
      ],
      &quot;must_not&quot;: [
        {
          &quot;match&quot;: {
            &quot;age&quot;: &quot;18&quot;
          }
        }
      ],
      &quot;should&quot;: [
        {
          &quot;match&quot;: {
            &quot;lastname&quot;: &quot;Wallace&quot;
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 5,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 3,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 12.585751,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 12.585751,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;136&quot;,
        &quot;_score&quot; : 6.0824604,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 136,
          &quot;balance&quot; : 45801,
          &quot;firstname&quot; : &quot;Winnie&quot;,
          &quot;lastname&quot; : &quot;Holland&quot;,
          &quot;age&quot; : 38,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;198 Mill Lane&quot;,
          &quot;employer&quot; : &quot;Neteria&quot;,
          &quot;email&quot; : &quot;winnieholland@neteria.com&quot;,
          &quot;city&quot; : &quot;Urie&quot;,
          &quot;state&quot; : &quot;IL&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;345&quot;,
        &quot;_score&quot; : 6.0824604,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 345,
          &quot;balance&quot; : 9812,
          &quot;firstname&quot; : &quot;Parker&quot;,
          &quot;lastname&quot; : &quot;Hines&quot;,
          &quot;age&quot; : 38,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;715 Mill Avenue&quot;,
          &quot;employer&quot; : &quot;Baluba&quot;,
          &quot;email&quot; : &quot;parkerhines@baluba.com&quot;,
          &quot;city&quot; : &quot;Blackgum&quot;,
          &quot;state&quot; : &quot;KY&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u80FD\u591F\u770B\u5230\u76F8\u5173\u5EA6\u8D8A\u9AD8\uFF0C\u5F97\u5206\u4E5F\u8D8A\u9AD8\u3002</p><h5 id="_7-filter\u3010\u7ED3\u679C\u8FC7\u6EE4\u3011" tabindex="-1"><a class="header-anchor" href="#_7-filter\u3010\u7ED3\u679C\u8FC7\u6EE4\u3011" aria-hidden="true">#</a> \uFF087\uFF09Filter\u3010\u7ED3\u679C\u8FC7\u6EE4\u3011</h5><p>\u5E76\u4E0D\u662F\u6240\u6709\u7684\u67E5\u8BE2\u90FD\u9700\u8981\u4EA7\u751F\u5206\u6570\uFF0C\u7279\u522B\u662F\u54EA\u4E9B\u4EC5\u7528\u4E8Efiltering\u8FC7\u6EE4\u7684\u6587\u6863\u3002\u4E3A\u4E86\u4E0D\u8BA1\u7B97\u5206\u6570\uFF0Celasticsearch\u4F1A\u81EA\u52A8\u68C0\u67E5\u573A\u666F\u5E76\u4E14\u4F18\u5316\u67E5\u8BE2\u7684\u6267\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;balance&quot;: {
            &quot;gte&quot;: &quot;10000&quot;,
            &quot;lte&quot;: &quot;20000&quot;
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5148\u662F\u67E5\u8BE2\u6240\u6709\u5339\u914Daddress=mill\u7684\u6587\u6863\uFF0C\u7136\u540E\u518D\u6839\u636E10000&lt;=balance&lt;=20000\u8FDB\u884C\u8FC7\u6EE4\u67E5\u8BE2\u7ED3\u679C</p><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 2,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 5.4032025,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;970&quot;,
        &quot;_score&quot; : 5.4032025,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 970,
          &quot;balance&quot; : 19648,
          &quot;firstname&quot; : &quot;Forbes&quot;,
          &quot;lastname&quot; : &quot;Wallace&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;990 Mill Road&quot;,
          &quot;employer&quot; : &quot;Pheast&quot;,
          &quot;email&quot; : &quot;forbeswallace@pheast.com&quot;,
          &quot;city&quot; : &quot;Lopezo&quot;,
          &quot;state&quot; : &quot;AK&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each <code>must</code>, <code>should</code>, and <code>must_not</code> element in a Boolean query is referred to as a query clause. How well a document meets the criteria in each <code>must</code> or <code>should</code> clause contributes to the document\u2019s <em>relevance score</em>. The higher the score, the better the document matches your search criteria. By default, Elasticsearch returns documents ranked by these relevance scores.</p><p>\u5728boolean\u67E5\u8BE2\u4E2D\uFF0C<code>must</code>, <code>should</code> \u548C<code>must_not</code> \u5143\u7D20\u90FD\u88AB\u79F0\u4E3A\u67E5\u8BE2\u5B50\u53E5 \u3002 \u6587\u6863\u662F\u5426\u7B26\u5408\u6BCF\u4E2A\u201Cmust\u201D\u6216\u201Cshould\u201D\u5B50\u53E5\u4E2D\u7684\u6807\u51C6\uFF0C\u51B3\u5B9A\u4E86\u6587\u6863\u7684\u201C\u76F8\u5173\u6027\u5F97\u5206\u201D\u3002 \u5F97\u5206\u8D8A\u9AD8\uFF0C\u6587\u6863\u8D8A\u7B26\u5408\u60A8\u7684\u641C\u7D22\u6761\u4EF6\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CElasticsearch\u8FD4\u56DE\u6839\u636E\u8FD9\u4E9B\u76F8\u5173\u6027\u5F97\u5206\u6392\u5E8F\u7684\u6587\u6863\u3002</p><p>The criteria in a <code>must_not</code> clause is treated as a <em>filter</em>. It affects whether or not the document is included in the results, but does not contribute to how documents are scored. You can also explicitly specify arbitrary filters to include or exclude documents based on structured data.</p><p><code>\u201Cmust_not\u201D\u5B50\u53E5\u4E2D\u7684\u6761\u4EF6\u88AB\u89C6\u4E3A\u201C\u8FC7\u6EE4\u5668\u201D\u3002</code> \u5B83\u5F71\u54CD\u6587\u6863\u662F\u5426\u5305\u542B\u5728\u7ED3\u679C\u4E2D\uFF0C \u4F46 <code>\u4E0D\u5F71\u54CD\u6587\u6863\u7684\u8BC4\u5206\u65B9\u5F0F</code>\u3002 \u8FD8\u53EF\u4EE5\u663E\u5F0F\u5730\u6307\u5B9A\u4EFB\u610F\u8FC7\u6EE4\u5668\u6765\u5305\u542B\u6216\u6392\u9664\u57FA\u4E8E\u7ED3\u6784\u5316\u6570\u636E\u7684\u6587\u6863\u3002</p><p><strong>filter\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u5E76\u4E0D\u4F1A\u8BA1\u7B97\u76F8\u5173\u6027\u5F97\u5206_score\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;balance&quot;: {
            &quot;gte&quot;: &quot;10000&quot;,
            &quot;lte&quot;: &quot;20000&quot;
          }
        }
      }
    }
  }
}
//gte:&gt;=  lte:&lt;=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 1,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 213,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 0.0,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;20&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 20,
          &quot;balance&quot; : 16418,
          &quot;firstname&quot; : &quot;Elinor&quot;,
          &quot;lastname&quot; : &quot;Ratliff&quot;,
          &quot;age&quot; : 36,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;282 Kings Place&quot;,
          &quot;employer&quot; : &quot;Scentric&quot;,
          &quot;email&quot; : &quot;elinorratliff@scentric.com&quot;,
          &quot;city&quot; : &quot;Ribera&quot;,
          &quot;state&quot; : &quot;WA&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;37&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 37,
          &quot;balance&quot; : 18612,
          &quot;firstname&quot; : &quot;Mcgee&quot;,
          &quot;lastname&quot; : &quot;Mooney&quot;,
          &quot;age&quot; : 39,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;826 Fillmore Place&quot;,
          &quot;employer&quot; : &quot;Reversus&quot;,
          &quot;email&quot; : &quot;mcgeemooney@reversus.com&quot;,
          &quot;city&quot; : &quot;Tooleville&quot;,
          &quot;state&quot; : &quot;OK&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;51&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 51,
          &quot;balance&quot; : 14097,
          &quot;firstname&quot; : &quot;Burton&quot;,
          &quot;lastname&quot; : &quot;Meyers&quot;,
          &quot;age&quot; : 31,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;334 River Street&quot;,
          &quot;employer&quot; : &quot;Bezal&quot;,
          &quot;email&quot; : &quot;burtonmeyers@bezal.com&quot;,
          &quot;city&quot; : &quot;Jacksonburg&quot;,
          &quot;state&quot; : &quot;MO&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;56&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 56,
          &quot;balance&quot; : 14992,
          &quot;firstname&quot; : &quot;Josie&quot;,
          &quot;lastname&quot; : &quot;Nelson&quot;,
          &quot;age&quot; : 32,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;857 Tabor Court&quot;,
          &quot;employer&quot; : &quot;Emtrac&quot;,
          &quot;email&quot; : &quot;josienelson@emtrac.com&quot;,
          &quot;city&quot; : &quot;Sunnyside&quot;,
          &quot;state&quot; : &quot;UT&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;121&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 121,
          &quot;balance&quot; : 19594,
          &quot;firstname&quot; : &quot;Acevedo&quot;,
          &quot;lastname&quot; : &quot;Dorsey&quot;,
          &quot;age&quot; : 32,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;479 Nova Court&quot;,
          &quot;employer&quot; : &quot;Netropic&quot;,
          &quot;email&quot; : &quot;acevedodorsey@netropic.com&quot;,
          &quot;city&quot; : &quot;Islandia&quot;,
          &quot;state&quot; : &quot;CT&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;176&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 176,
          &quot;balance&quot; : 18607,
          &quot;firstname&quot; : &quot;Kemp&quot;,
          &quot;lastname&quot; : &quot;Walters&quot;,
          &quot;age&quot; : 28,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;906 Howard Avenue&quot;,
          &quot;employer&quot; : &quot;Eyewax&quot;,
          &quot;email&quot; : &quot;kempwalters@eyewax.com&quot;,
          &quot;city&quot; : &quot;Why&quot;,
          &quot;state&quot; : &quot;KY&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;183&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 183,
          &quot;balance&quot; : 14223,
          &quot;firstname&quot; : &quot;Hudson&quot;,
          &quot;lastname&quot; : &quot;English&quot;,
          &quot;age&quot; : 26,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;823 Herkimer Place&quot;,
          &quot;employer&quot; : &quot;Xinware&quot;,
          &quot;email&quot; : &quot;hudsonenglish@xinware.com&quot;,
          &quot;city&quot; : &quot;Robbins&quot;,
          &quot;state&quot; : &quot;ND&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;222&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 222,
          &quot;balance&quot; : 14764,
          &quot;firstname&quot; : &quot;Rachelle&quot;,
          &quot;lastname&quot; : &quot;Rice&quot;,
          &quot;age&quot; : 36,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;333 Narrows Avenue&quot;,
          &quot;employer&quot; : &quot;Enaut&quot;,
          &quot;email&quot; : &quot;rachellerice@enaut.com&quot;,
          &quot;city&quot; : &quot;Wright&quot;,
          &quot;state&quot; : &quot;AZ&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;227&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 227,
          &quot;balance&quot; : 19780,
          &quot;firstname&quot; : &quot;Coleman&quot;,
          &quot;lastname&quot; : &quot;Berg&quot;,
          &quot;age&quot; : 22,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;776 Little Street&quot;,
          &quot;employer&quot; : &quot;Exoteric&quot;,
          &quot;email&quot; : &quot;colemanberg@exoteric.com&quot;,
          &quot;city&quot; : &quot;Eagleville&quot;,
          &quot;state&quot; : &quot;WV&quot;
        }
      },
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,
        &quot;_id&quot; : &quot;272&quot;,
        &quot;_score&quot; : 0.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 272,
          &quot;balance&quot; : 19253,
          &quot;firstname&quot; : &quot;Lilly&quot;,
          &quot;lastname&quot; : &quot;Morgan&quot;,
          &quot;age&quot; : 25,
          &quot;gender&quot; : &quot;F&quot;,
          &quot;address&quot; : &quot;689 Fleet Street&quot;,
          &quot;employer&quot; : &quot;Biolive&quot;,
          &quot;email&quot; : &quot;lillymorgan@biolive.com&quot;,
          &quot;city&quot; : &quot;Sunbury&quot;,
          &quot;state&quot; : &quot;OH&quot;
        }
      }
    ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u80FD\u770B\u5230\u6240\u6709\u6587\u6863\u7684 &quot;_score&quot; : 0.0\u3002</strong></p><h5 id="_8-term" tabindex="-1"><a class="header-anchor" href="#_8-term" aria-hidden="true">#</a> \uFF088\uFF09term</h5><p>\u548Cmatch\u4E00\u6837\u3002\u5339\u914D\u67D0\u4E2A\u5C5E\u6027\u7684\u503C\u3002\u5168\u6587\u68C0\u7D22\u5B57\u6BB5\u7528match\uFF0C\u5176\u4ED6<strong>\u975Etext\u5B57\u6BB5</strong>\u5339\u914D\u7528term\u3002</p>`,91),jn=e("Avoid using the "),Dn=n("code",null,"term",-1),Un=e(" query for "),Kn={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.6/text.html",target:"_blank",rel:"noopener noreferrer"},Fn=n("code",null,"text",-1),Wn=e(" fields."),Yn=t('<p>\u907F\u514D\u5BF9\u6587\u672C\u5B57\u6BB5\u4F7F\u7528\u201Cterm\u201D\u67E5\u8BE2</p><p>By default, Elasticsearch changes the values of <code>text</code> fields as part of <a href="">analysis</a>. This can make finding exact matches for <code>text</code> field values difficult.</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CElasticsearch\u4F5C\u4E3A<a href="">analysis</a>\u7684\u4E00\u90E8\u5206\u66F4\u6539&#39; text &#39;\u5B57\u6BB5\u7684\u503C\u3002\u8FD9\u4F7F\u5F97\u4E3A\u201Ctext\u201D\u5B57\u6BB5\u503C\u5BFB\u627E\u7CBE\u786E\u5339\u914D\u53D8\u5F97\u56F0\u96BE\u3002</p><p>To search <code>text</code> field values, use the match.</p><p>\u8981\u641C\u7D22\u201Ctext\u201D\u5B57\u6BB5\u503C\uFF0C\u8BF7\u4F7F\u7528\u5339\u914D\u3002</p>',5),Qn={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.6/query-dsl-term-query.html",target:"_blank",rel:"noopener noreferrer"},Vn=e("https://www.elastic.co/guide/en/elasticsearch/reference/7.6/query-dsl-term-query.html"),Jn=t(`<p>\u4F7F\u7528term\u5339\u914D\u67E5\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;age&quot;: &quot;28&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662Ftext\u5219\u67E5\u4E0D\u5230\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;gender&quot; : &quot;F&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 0,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 0,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u6761\u4E5F\u6CA1\u6709\u5339\u914D\u5230</p><p>\u800C\u66F4\u6362\u4E3Amatch\u5339\u914D\u65F6\uFF0C\u80FD\u591F\u5339\u914D\u523032\u4E2A\u6587\u6863</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502120921830.png" alt="image-20200502120921830"></p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u5168\u6587\u68C0\u7D22\u5B57\u6BB5\u7528match\uFF0C\u5176\u4ED6\u975Etext\u5B57\u6BB5\u5339\u914D\u7528term</strong>\u3002</p><h5 id="_9-aggregation-\u6267\u884C\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_9-aggregation-\u6267\u884C\u805A\u5408" aria-hidden="true">#</a> \uFF089\uFF09Aggregation\uFF08\u6267\u884C\u805A\u5408\uFF09</h5><p>\u805A\u5408\u63D0\u4F9B\u4E86\u4ECE\u6570\u636E\u4E2D\u5206\u7EC4\u548C\u63D0\u53D6\u6570\u636E\u7684\u80FD\u529B\u3002\u6700\u7B80\u5355\u7684\u805A\u5408\u65B9\u6CD5\u5927\u81F4\u7B49\u4E8ESQL Group by\u548CSQL\u805A\u5408\u51FD\u6570\u3002\u5728elasticsearch\u4E2D\uFF0C\u6267\u884C\u641C\u7D22\u8FD4\u56DEthis\uFF08\u547D\u4E2D\u7ED3\u679C\uFF09\uFF0C\u5E76\u4E14\u540C\u65F6\u8FD4\u56DE\u805A\u5408\u7ED3\u679C\uFF0C\u628A\u4EE5\u54CD\u5E94\u4E2D\u7684\u6240\u6709hits\uFF08\u547D\u4E2D\u7ED3\u679C\uFF09\u5206\u9694\u5F00\u7684\u80FD\u529B\u3002\u8FD9\u662F\u975E\u5E38\u5F3A\u5927\u4E14\u6709\u6548\u7684\uFF0C\u4F60\u53EF\u4EE5\u6267\u884C\u67E5\u8BE2\u548C\u591A\u4E2A\u805A\u5408\uFF0C\u5E76\u4E14\u5728\u4E00\u6B21\u4F7F\u7528\u4E2D\u5F97\u5230\u5404\u81EA\u7684\uFF08\u4EFB\u4F55\u4E00\u4E2A\u7684\uFF09\u8FD4\u56DE\u7ED3\u679C\uFF0C\u4F7F\u7528\u4E00\u6B21\u7B80\u6D01\u548C\u7B80\u5316\u7684API\u5566\u907F\u514D\u7F51\u7EDC\u5F80\u8FD4\u3002</p><p>&quot;size&quot;:0</p><p>size:0\u4E0D\u663E\u793A\u641C\u7D22\u6570\u636E aggs\uFF1A\u6267\u884C\u805A\u5408\u3002\u805A\u5408\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;aggs&quot;:{
    &quot;aggs_name\u8FD9\u6B21\u805A\u5408\u7684\u540D\u5B57\uFF0C\u65B9\u4FBF\u5C55\u793A\u5728\u7ED3\u679C\u96C6\u4E2D&quot;:{
        &quot;AGG_TYPE\u805A\u5408\u7684\u7C7B\u578B(avg,term,terms)&quot;:{}
     }
}\uFF0C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u641C\u7D22address\u4E2D\u5305\u542Bmill\u7684\u6240\u6709\u4EBA\u7684\u5E74\u9F84\u5206\u5E03\u4EE5\u53CA\u5E73\u5747\u5E74\u9F84\uFF0C\u4F46\u4E0D\u663E\u793A\u8FD9\u4E9B\u4EBA\u7684\u8BE6\u60C5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;: &quot;Mill&quot;
    }
  },
  &quot;aggs&quot;: {
    &quot;ageAgg&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;age&quot;,
        &quot;size&quot;: 10
      }
    },
    &quot;ageAvg&quot;: {
      &quot;avg&quot;: {
        &quot;field&quot;: &quot;age&quot;
      }
    },
    &quot;balanceAvg&quot;: {
      &quot;avg&quot;: {
        &quot;field&quot;: &quot;balance&quot;
      }
    }
  },
  &quot;size&quot;: 0
}
//ageAgg:\u805A\u5408\u540D\u5B57  terms\uFF1A\u805A\u5408\u7C7B\u578B  &quot;field&quot;: &quot;age&quot;:\u6309\u7167age\u5B57\u6BB5\u805A\u5408  size:10\uFF1A\u53D6\u51FA\u524D\u5341\u79CDage
//avg\uFF1A\u5E73\u5747\u503C\u805A\u5408\u7C7B\u578B
//\u4E0D\u663E\u793A\u8FD9\u4E9B\u4EBA\u7684\u8BE6\u60C5\uFF0C\u53EA\u770B\u805A\u5408\u7ED3\u679C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 2,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 4,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  },
  &quot;aggregations&quot; : {
    &quot;ageAgg&quot; : {
      &quot;doc_count_error_upper_bound&quot; : 0,
      &quot;sum_other_doc_count&quot; : 0,
      &quot;buckets&quot; : [
        {
          &quot;key&quot; : 38,
          &quot;doc_count&quot; : 2
        },
        {
          &quot;key&quot; : 28,
          &quot;doc_count&quot; : 1
        },
        {
          &quot;key&quot; : 32,
          &quot;doc_count&quot; : 1
        }
      ]
    },
    &quot;ageAvg&quot; : {
      &quot;value&quot; : 34.0
    },
    &quot;balanceAvg&quot; : {
      &quot;value&quot; : 25208.0
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u590D\u6742\uFF1A \u6309\u7167\u5E74\u9F84\u805A\u5408\uFF0C\u5E76\u4E14\u6C42\u8FD9\u4E9B\u5E74\u9F84\u6BB5\u7684\u8FD9\u4E9B\u4EBA\u7684\u5E73\u5747\u85AA\u8D44</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;aggs&quot;: {
    &quot;ageAgg&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;age&quot;,
        &quot;size&quot;: 100
      },
      &quot;aggs&quot;: {
        &quot;ageAvg&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;balance&quot;
          }
        }
      }
    }
  },
  &quot;size&quot;: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 49,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1000,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  },
  &quot;aggregations&quot; : {
    &quot;ageAgg&quot; : {
      &quot;doc_count_error_upper_bound&quot; : 0,
      &quot;sum_other_doc_count&quot; : 0,
      &quot;buckets&quot; : [
        {
          &quot;key&quot; : 31,
          &quot;doc_count&quot; : 61,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 28312.918032786885
          }
        },
        {
          &quot;key&quot; : 39,
          &quot;doc_count&quot; : 60,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 25269.583333333332
          }
        },
        {
          &quot;key&quot; : 26,
          &quot;doc_count&quot; : 59,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 23194.813559322032
          }
        },
        {
          &quot;key&quot; : 32,
          &quot;doc_count&quot; : 52,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 23951.346153846152
          }
        },
        {
          &quot;key&quot; : 35,
          &quot;doc_count&quot; : 52,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 22136.69230769231
          }
        },
        {
          &quot;key&quot; : 36,
          &quot;doc_count&quot; : 52,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 22174.71153846154
          }
        },
        {
          &quot;key&quot; : 22,
          &quot;doc_count&quot; : 51,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 24731.07843137255
          }
        },
        {
          &quot;key&quot; : 28,
          &quot;doc_count&quot; : 51,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 28273.882352941175
          }
        },
        {
          &quot;key&quot; : 33,
          &quot;doc_count&quot; : 50,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 25093.94
          }
        },
        {
          &quot;key&quot; : 34,
          &quot;doc_count&quot; : 49,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 26809.95918367347
          }
        },
        {
          &quot;key&quot; : 30,
          &quot;doc_count&quot; : 47,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 22841.106382978724
          }
        },
        {
          &quot;key&quot; : 21,
          &quot;doc_count&quot; : 46,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 26981.434782608696
          }
        },
        {
          &quot;key&quot; : 40,
          &quot;doc_count&quot; : 45,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 27183.17777777778
          }
        },
        {
          &quot;key&quot; : 20,
          &quot;doc_count&quot; : 44,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 27741.227272727272
          }
        },
        {
          &quot;key&quot; : 23,
          &quot;doc_count&quot; : 42,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 27314.214285714286
          }
        },
        {
          &quot;key&quot; : 24,
          &quot;doc_count&quot; : 42,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 28519.04761904762
          }
        },
        {
          &quot;key&quot; : 25,
          &quot;doc_count&quot; : 42,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 27445.214285714286
          }
        },
        {
          &quot;key&quot; : 37,
          &quot;doc_count&quot; : 42,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 27022.261904761905
          }
        },
        {
          &quot;key&quot; : 27,
          &quot;doc_count&quot; : 39,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 21471.871794871793
          }
        },
        {
          &quot;key&quot; : 38,
          &quot;doc_count&quot; : 39,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 26187.17948717949
          }
        },
        {
          &quot;key&quot; : 29,
          &quot;doc_count&quot; : 35,
          &quot;ageAvg&quot; : {
            &quot;value&quot; : 29483.14285714286
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u51FA\u6240\u6709\u5E74\u9F84\u5206\u5E03\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u5E74\u9F84\u6BB5\u4E2DM\u7684\u5E73\u5747\u85AA\u8D44\u548CF\u7684\u5E73\u5747\u85AA\u8D44\u4EE5\u53CA\u8FD9\u4E2A\u5E74\u9F84\u6BB5\u7684\u603B\u4F53\u5E73\u5747\u85AA\u8D44</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;aggs&quot;: {
    &quot;ageAgg&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;age&quot;,
        &quot;size&quot;: 100
      },
      &quot;aggs&quot;: {
        &quot;genderAgg&quot;: {
          &quot;terms&quot;: {
            &quot;field&quot;: &quot;gender.keyword&quot;
          },
          &quot;aggs&quot;: {
            &quot;balanceAvg&quot;: {
              &quot;avg&quot;: {
                &quot;field&quot;: &quot;balance&quot;
              }
            }
          }
        },
        &quot;ageBalanceAvg&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;balance&quot;
          }
        }
      }
    }
  },
  &quot;size&quot;: 0
}
//&quot;field&quot;: &quot;gender.keyword&quot; gender\u662Ftxt\u6CA1\u6CD5\u805A\u5408 \u5FC5\u987B\u52A0.keyword\u7CBE\u786E\u66FF\u4EE3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 119,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1000,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  },
  &quot;aggregations&quot; : {
    &quot;ageAgg&quot; : {
      &quot;doc_count_error_upper_bound&quot; : 0,
      &quot;sum_other_doc_count&quot; : 0,
      &quot;buckets&quot; : [
        {
          &quot;key&quot; : 31,
          &quot;doc_count&quot; : 61,
          &quot;genderAgg&quot; : {
            &quot;doc_count_error_upper_bound&quot; : 0,
            &quot;sum_other_doc_count&quot; : 0,
            &quot;buckets&quot; : [
              {
                &quot;key&quot; : &quot;M&quot;,
                &quot;doc_count&quot; : 35,
                &quot;balanceAvg&quot; : {
                  &quot;value&quot; : 29565.628571428573
                }
              },
              {
                &quot;key&quot; : &quot;F&quot;,
                &quot;doc_count&quot; : 26,
                &quot;balanceAvg&quot; : {
                  &quot;value&quot; : 26626.576923076922
                }
              }
            ]
          },
          &quot;ageBalanceAvg&quot; : {
            &quot;value&quot; : 28312.918032786885
          }
        }
      ]
        .......//\u7701\u7565\u5176\u4ED6
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-mapping" tabindex="-1"><a class="header-anchor" href="#_3-mapping" aria-hidden="true">#</a> 3\uFF09Mapping</h4><h5 id="_1-\u5B57\u6BB5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u6BB5\u7C7B\u578B" aria-hidden="true">#</a> \uFF081\uFF09\u5B57\u6BB5\u7C7B\u578B</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502161339291.png" alt="image-20200502161339291"></p><h5 id="_2-\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#_2-\u6620\u5C04" aria-hidden="true">#</a> \uFF082\uFF09\u6620\u5C04</h5><p>Mapping(\u6620\u5C04) Maping\u662F\u7528\u6765\u5B9A\u4E49\u4E00\u4E2A\u6587\u6863\uFF08document\uFF09\uFF0C\u4EE5\u53CA\u5B83\u6240\u5305\u542B\u7684\u5C5E\u6027\uFF08field\uFF09\u662F\u5982\u4F55\u5B58\u50A8\u548C\u7D22\u5F15\u7684\u3002\u6BD4\u5982\uFF1A\u4F7F\u7528maping\u6765\u5B9A\u4E49\uFF1A</p><ul><li><p>\u54EA\u4E9B\u5B57\u7B26\u4E32\u5C5E\u6027\u5E94\u8BE5\u88AB\u770B\u505A\u5168\u6587\u672C\u5C5E\u6027\uFF08full text fields\uFF09\uFF1B</p></li><li><p>\u54EA\u4E9B\u5C5E\u6027\u5305\u542B\u6570\u5B57\uFF0C\u65E5\u671F\u6216\u5730\u7406\u4F4D\u7F6E\uFF1B</p></li><li><p>\u6587\u6863\u4E2D\u7684\u6240\u6709\u5C5E\u6027\u662F\u5426\u90FD\u5AE9\u88AB\u7D22\u5F15\uFF08all \u914D\u7F6E\uFF09\uFF1B</p></li><li><p>\u65E5\u671F\u7684\u683C\u5F0F\uFF1B</p></li><li><p>\u81EA\u5B9A\u4E49\u6620\u5C04\u89C4\u5219\u6765\u6267\u884C\u52A8\u6001\u6DFB\u52A0\u5C5E\u6027\uFF1B</p></li><li><p>\u67E5\u770Bmapping\u4FE1\u606F GET bank/_mapping</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;bank&quot; : {
    &quot;mappings&quot; : {
      &quot;properties&quot; : {
        &quot;account_number&quot; : {
          &quot;type&quot; : &quot;long&quot;
        },
        &quot;address&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;age&quot; : {
          &quot;type&quot; : &quot;long&quot;
        },
        &quot;balance&quot; : {
          &quot;type&quot; : &quot;long&quot;
        },
        &quot;city&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;email&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;employer&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;firstname&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;gender&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;lastname&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;state&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539mapping\u4FE1\u606F</p></li></ul><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502170924399.png" alt="image-20200502170924399"></p><h5 id="_3-\u65B0\u7248\u672C\u6539\u53D8" tabindex="-1"><a class="header-anchor" href="#_3-\u65B0\u7248\u672C\u6539\u53D8" aria-hidden="true">#</a> \uFF083\uFF09\u65B0\u7248\u672C\u6539\u53D8</h5><p>ElasticSearch7-\u53BB\u6389type\u6982\u5FF5</p><ol><li><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u4E24\u4E2A\u6570\u636E\u8868\u793A\u662F\u72EC\u7ACB\u7684\uFF0C\u5373\u4F7F\u4ED6\u4EEC\u91CC\u9762\u6709\u76F8\u540C\u540D\u79F0\u7684\u5217\u4E5F\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF0C\u4F46ES\u4E2D\u4E0D\u662F\u8FD9\u6837\u7684\u3002elasticsearch\u662F\u57FA\u4E8ELucene\u5F00\u53D1\u7684\u641C\u7D22\u5F15\u64CE\uFF0C\u800CES\u4E2D\u4E0D\u540Ctype\u4E0B\u540D\u79F0\u76F8\u540C\u7684filed\u6700\u7EC8\u5728Lucene\u4E2D\u7684\u5904\u7406\u65B9\u5F0F\u662F\u4E00\u6837\u7684\u3002</p><ul><li>\u4E24\u4E2A\u4E0D\u540Ctype\u4E0B\u7684\u4E24\u4E2Auser_name\uFF0C\u5728ES\u540C\u4E00\u4E2A\u7D22\u5F15\u4E0B\u5176\u5B9E\u88AB\u8BA4\u4E3A\u662F\u540C\u4E00\u4E2Afiled\uFF0C\u4F60\u5FC5\u987B\u5728\u4E24\u4E2A\u4E0D\u540C\u7684type\u4E2D\u5B9A\u4E49\u76F8\u540C\u7684filed\u6620\u5C04\u3002\u5426\u5219\uFF0C\u4E0D\u540Ctype\u4E2D\u7684\u76F8\u540C\u5B57\u6BB5\u540D\u79F0\u5C31\u4F1A\u5728\u5904\u7406\u4E2D\u51FA\u73B0\u51B2\u7A81\u7684\u60C5\u51B5\uFF0C\u5BFC\u81F4Lucene\u5904\u7406\u6548\u7387\u4E0B\u964D\u3002</li><li>\u53BB\u6389type\u5C31\u662F\u4E3A\u4E86\u63D0\u9AD8ES\u5904\u7406\u6570\u636E\u7684\u6548\u7387\u3002</li></ul></li><li><p>Elasticsearch 7.x URL\u4E2D\u7684type\u53C2\u6570\u4E3A\u53EF\u9009\u3002\u6BD4\u5982\uFF0C\u7D22\u5F15\u4E00\u4E2A\u6587\u6863\u4E0D\u518D\u8981\u6C42\u63D0\u4F9B\u6587\u6863\u7C7B\u578B\u3002</p></li><li><p>Elasticsearch 8.x \u4E0D\u518D\u652F\u6301URL\u4E2D\u7684type\u53C2\u6570\u3002</p></li><li><p>\u89E3\u51B3\uFF1A \u5C06\u7D22\u5F15\u4ECE\u591A\u7C7B\u578B\u8FC1\u79FB\u5230\u5355\u7C7B\u578B\uFF0C\u6BCF\u79CD\u7C7B\u578B\u6587\u6863\u4E00\u4E2A\u72EC\u7ACB\u7D22\u5F15</p><p>\u5C06\u5DF2\u5B58\u5728\u7684\u7D22\u5F15\u4E0B\u7684\u7C7B\u578B\u6570\u636E\uFF0C\u5168\u90E8\u8FC1\u79FB\u5230\u6307\u5B9A\u4F4D\u7F6E\u5373\u53EF\u3002\u8BE6\u89C1\u6570\u636E\u8FC1\u79FB</p></li></ol><blockquote><p><strong>Elasticsearch 7.x</strong></p><ul><li>Specifying types in requests is deprecated. For instance, indexing a document no longer requires a document <code>type</code>. The new index APIs are <code>PUT {index}/_doc/{id}</code> in case of explicit ids and <code>POST {index}/_doc</code> for auto-generated ids. Note that in 7.0, <code>_doc</code> is a permanent part of the path, and represents the endpoint name rather than the document type.</li><li>The <code>include_type_name</code> parameter in the index creation, index template, and mapping APIs will default to <code>false</code>. Setting the parameter at all will result in a deprecation warning.</li><li>The <code>_default_</code> mapping type is removed.</li></ul><p><strong>Elasticsearch 8.x</strong></p><ul><li>Specifying types in requests is no longer supported.</li><li>The <code>include_type_name</code> parameter is removed.</li></ul></blockquote><h6 id="\u521B\u5EFA\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6620\u5C04" aria-hidden="true">#</a> \u521B\u5EFA\u6620\u5C04</h6><p>\u521B\u5EFA\u7D22\u5F15\u5E76\u6307\u5B9A\u5C5E\u6027\u7684\u6620\u5C04\u89C4\u5219\uFF08<strong>\u76F8\u5F53\u4E8E\u65B0\u5EFA\u8868\u5E76\u5236\u5B9A\u5B57\u6BB5\u548C\u5B57\u6BB5\u7C7B\u578B</strong>\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /my_index
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;email&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;acknowledged&quot; : true,
  &quot;shards_acknowledged&quot; : true,
  &quot;index&quot; : &quot;my_index&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u67E5\u770B\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6620\u5C04" aria-hidden="true">#</a> \u67E5\u770B\u6620\u5C04</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /my_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//&quot;index&quot; : false \u662F\u5426\u88AB\u7D22\u5F15\u5373\u80FD\u88AB\u68C0\u7D22\u5230\uFF0C\u9ED8\u8BA4\u662Ftrue
{
  &quot;my_index&quot; : {
    &quot;aliases&quot; : { },
    &quot;mappings&quot; : {
      &quot;properties&quot; : {
        &quot;age&quot; : {
          &quot;type&quot; : &quot;integer&quot;
        },
        &quot;email&quot; : {
          &quot;type&quot; : &quot;keyword&quot;
        },
        &quot;employee-id&quot; : {
          &quot;type&quot; : &quot;keyword&quot;,
          &quot;index&quot; : false
        },
        &quot;name&quot; : {
          &quot;type&quot; : &quot;text&quot;
        }
      }
    },
    &quot;settings&quot; : {
      &quot;index&quot; : {
        &quot;creation_date&quot; : &quot;1588410780774&quot;,
        &quot;number_of_shards&quot; : &quot;1&quot;,
        &quot;number_of_replicas&quot; : &quot;1&quot;,
        &quot;uuid&quot; : &quot;ua0lXhtkQCOmn7Kh3iUu0w&quot;,
        &quot;version&quot; : {
          &quot;created&quot; : &quot;7060299&quot;
        },
        &quot;provided_name&quot; : &quot;my_index&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u6DFB\u52A0\u65B0\u7684\u5B57\u6BB5\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u65B0\u7684\u5B57\u6BB5\u6620\u5C04" aria-hidden="true">#</a> \u6DFB\u52A0\u65B0\u7684\u5B57\u6BB5\u6620\u5C04</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /my_index/_mapping
{
  &quot;properties&quot;: {
    &quot;employee-id&quot;: {
      &quot;type&quot;: &quot;keyword&quot;,
      &quot;index&quot;: false
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684 &quot;index&quot;: false\uFF0C\u8868\u660E\u65B0\u589E\u7684\u5B57\u6BB5\u4E0D\u80FD\u88AB\u68C0\u7D22\uFF0C\u53EA\u662F\u4E00\u4E2A\u5197\u4F59\u5B57\u6BB5\u3002</p><h6 id="\u66F4\u65B0\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6620\u5C04" aria-hidden="true">#</a> \u66F4\u65B0\u6620\u5C04</h6><p>\u5BF9\u4E8E\u5DF2\u7ECF\u5B58\u5728\u7684\u5B57\u6BB5\u6620\u5C04\uFF0C\u6211\u4EEC\u4E0D\u80FD\u66F4\u65B0\u3002\u66F4\u65B0\u5FC5\u987B\u521B\u5EFA\u65B0\u7684\u7D22\u5F15\uFF0C\u8FDB\u884C\u6570\u636E\u8FC1\u79FB\u3002</p><h6 id="\u6570\u636E\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8FC1\u79FB" aria-hidden="true">#</a> \u6570\u636E\u8FC1\u79FB</h6><p>\u5148\u521B\u5EFAnew_twitter\u7684\u6B63\u786E\u6620\u5C04\u3002\u7136\u540E\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u8FC1\u79FB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST reindex [\u56FA\u5B9A\u5199\u6CD5]
{
  &quot;source&quot;:{
      &quot;index&quot;:&quot;twitter&quot;
   },
  &quot;dest&quot;:{
      &quot;index&quot;:&quot;new_twitters&quot;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u65E7\u7D22\u5F15\u7684type\u4E0B\u7684\u6570\u636E\u8FDB\u884C\u8FC1\u79FB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST reindex [\u56FA\u5B9A\u5199\u6CD5]
{
  &quot;source&quot;:{
      &quot;index&quot;:&quot;twitter&quot;,
      &quot;twitter&quot;:&quot;twitter&quot;
   },
  &quot;dest&quot;:{
      &quot;index&quot;:&quot;new_twitters&quot;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),Xn=e("\u66F4\u591A\u8BE6\u60C5\u89C1\uFF1A "),Zn={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.6/docs-reindex.html",target:"_blank",rel:"noopener noreferrer"},$n=e("https://www.elastic.co/guide/en/elasticsearch/reference/7.6/docs-reindex.html"),ne=t(`<p>GET /bank/_search</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;took&quot; : 0,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1000,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 1.0,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;bank&quot;,
        &quot;_type&quot; : &quot;account&quot;,//\u7C7B\u578B\u4E3Aaccount
        &quot;_id&quot; : &quot;1&quot;,
        &quot;_score&quot; : 1.0,
        &quot;_source&quot; : {
          &quot;account_number&quot; : 1,
          &quot;balance&quot; : 39225,
          &quot;firstname&quot; : &quot;Amber&quot;,
          &quot;lastname&quot; : &quot;Duke&quot;,
          &quot;age&quot; : 32,
          &quot;gender&quot; : &quot;M&quot;,
          &quot;address&quot; : &quot;880 Holmes Lane&quot;,
          &quot;employer&quot; : &quot;Pyrami&quot;,
          &quot;email&quot; : &quot;amberduke@pyrami.com&quot;,
          &quot;city&quot; : &quot;Brogan&quot;,
          &quot;state&quot; : &quot;IL&quot;
        }
      },
      ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /bank/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502174825233.png" alt="image-20200502174825233"></p><p>\u60F3\u8981\u5C06\u5E74\u9F84\u4FEE\u6539\u4E3Ainteger</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /newbank
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;account_number&quot;: {
        &quot;type&quot;: &quot;long&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;integer&quot;
      },
      &quot;balance&quot;: {
        &quot;type&quot;: &quot;long&quot;
      },
      &quot;city&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;email&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;employer&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;firstname&quot;: {
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;gender&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;lastname&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;fields&quot;: {
          &quot;keyword&quot;: {
            &quot;type&quot;: &quot;keyword&quot;,
            &quot;ignore_above&quot;: 256
          }
        }
      },
      &quot;state&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u201Cnewbank\u201D\u7684\u6620\u5C04\uFF1A</p><p>GET /newbank/_mapping</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502175901959.png" alt="image-20200502175901959"></p><p>\u80FD\u591F\u770B\u5230age\u7684\u6620\u5C04\u7C7B\u578B\u88AB\u4FEE\u6539\u4E3A\u4E86integer.</p><p>\u5C06bank\u4E2D\u7684\u6570\u636E\u8FC1\u79FB\u5230newbank\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST _reindex
{
  &quot;source&quot;: {
    &quot;index&quot;: &quot;bank&quot;,
    &quot;type&quot;: &quot;account&quot;
  },
  &quot;dest&quot;: {
    &quot;index&quot;: &quot;newbank&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! Deprecation: [types removal] Specifying types in reindex requests is deprecated.
{
  &quot;took&quot; : 768,
  &quot;timed_out&quot; : false,
  &quot;total&quot; : 1000,
  &quot;updated&quot; : 0,
  &quot;created&quot; : 1000,
  &quot;deleted&quot; : 0,
  &quot;batches&quot; : 1,
  &quot;version_conflicts&quot; : 0,
  &quot;noops&quot; : 0,
  &quot;retries&quot; : {
    &quot;bulk&quot; : 0,
    &quot;search&quot; : 0
  },
  &quot;throttled_millis&quot; : 0,
  &quot;requests_per_second&quot; : -1.0,
  &quot;throttled_until_millis&quot; : 0,
  &quot;failures&quot; : [ ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770Bnewbank\u4E2D\u7684\u6570\u636E</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502181432745.png" alt="image-20200502181432745"></p><h4 id="_4-\u5206\u8BCD" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u8BCD" aria-hidden="true">#</a> 4\uFF09\u5206\u8BCD</h4><p>\u4E00\u4E2Atokenizer\uFF08\u5206\u8BCD\u5668\uFF09\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u6D41\uFF0C\u5C06\u4E4B\u5206\u5272\u4E3A\u72EC\u7ACB\u7684tokens\uFF08\u8BCD\u5143\uFF0C\u901A\u5E38\u662F\u72EC\u7ACB\u7684\u5355\u8BCD\uFF09\uFF0C\u7136\u540E\u8F93\u51FAtokens\u6D41\u3002</p><p>\u4F8B\u5982\uFF1Awhitespace tokenizer\u9047\u5230\u7A7A\u767D\u5B57\u7B26\u65F6\u5206\u5272\u6587\u672C\u3002\u5B83\u4F1A\u5C06\u6587\u672C\u201CQuick brown fox!\u201D\u5206\u5272\u4E3A[Quick,brown,fox!]\u3002</p><p>\u8BE5tokenizer\uFF08\u5206\u8BCD\u5668\uFF09\u8FD8\u8D1F\u8D23\u8BB0\u5F55\u5404\u4E2Aterms(\u8BCD\u6761)\u7684\u987A\u5E8F\u6216position\u4F4D\u7F6E\uFF08\u7528\u4E8Ephrase\u77ED\u8BED\u548Cword proximity\u8BCD\u8FD1\u90BB\u67E5\u8BE2\uFF09\uFF0C\u4EE5\u53CAterm\uFF08\u8BCD\u6761\uFF09\u6240\u4EE3\u8868\u7684\u539F\u59CBword\uFF08\u5355\u8BCD\uFF09\u7684start\uFF08\u8D77\u59CB\uFF09\u548Cend\uFF08\u7ED3\u675F\uFF09\u7684character offsets\uFF08\u5B57\u7B26\u4E32\u504F\u79FB\u91CF\uFF09\uFF08\u7528\u4E8E\u9AD8\u4EAE\u663E\u793A\u641C\u7D22\u7684\u5185\u5BB9\uFF09\u3002</p><p>elasticsearch\u63D0\u4F9B\u4E86\u5F88\u591A\u5185\u7F6E\u7684\u5206\u8BCD\u5668\uFF0C\u53EF\u4EE5\u7528\u6765\u6784\u5EFAcustom analyzers\uFF08\u81EA\u5B9A\u4E49\u5206\u8BCD\u5668\uFF09\u3002</p>`,21),ee=e("\u5173\u4E8E\u5206\u8BCD\u5668\uFF1A "),se={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.6/analysis.html",target:"_blank",rel:"noopener noreferrer"},ie=e("https://www.elastic.co/guide/en/elasticsearch/reference/7.6/analysis.html"),te=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST _analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: &quot;The 2 QUICK Brown-Foxes jumped over the lazy dog&#39;s bone.&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;tokens&quot; : [
    {
      &quot;token&quot; : &quot;the&quot;,
      &quot;start_offset&quot; : 0,
      &quot;end_offset&quot; : 3,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 0
    },
    {
      &quot;token&quot; : &quot;2&quot;,
      &quot;start_offset&quot; : 4,
      &quot;end_offset&quot; : 5,
      &quot;type&quot; : &quot;&lt;NUM&gt;&quot;,
      &quot;position&quot; : 1
    },
    {
      &quot;token&quot; : &quot;quick&quot;,
      &quot;start_offset&quot; : 6,
      &quot;end_offset&quot; : 11,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 2
    },
    {
      &quot;token&quot; : &quot;brown&quot;,
      &quot;start_offset&quot; : 12,
      &quot;end_offset&quot; : 17,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 3
    },
    {
      &quot;token&quot; : &quot;foxes&quot;,
      &quot;start_offset&quot; : 18,
      &quot;end_offset&quot; : 23,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 4
    },
    {
      &quot;token&quot; : &quot;jumped&quot;,
      &quot;start_offset&quot; : 24,
      &quot;end_offset&quot; : 30,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 5
    },
    {
      &quot;token&quot; : &quot;over&quot;,
      &quot;start_offset&quot; : 31,
      &quot;end_offset&quot; : 35,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 6
    },
    {
      &quot;token&quot; : &quot;the&quot;,
      &quot;start_offset&quot; : 36,
      &quot;end_offset&quot; : 39,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 7
    },
    {
      &quot;token&quot; : &quot;lazy&quot;,
      &quot;start_offset&quot; : 40,
      &quot;end_offset&quot; : 44,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 8
    },
    {
      &quot;token&quot; : &quot;dog&#39;s&quot;,
      &quot;start_offset&quot; : 45,
      &quot;end_offset&quot; : 50,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 9
    },
    {
      &quot;token&quot; : &quot;bone&quot;,
      &quot;start_offset&quot; : 51,
      &quot;end_offset&quot; : 55,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 10
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-\u5B89\u88C5ik\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5ik\u5206\u8BCD\u5668" aria-hidden="true">#</a> \uFF081\uFF09\u5B89\u88C5ik\u5206\u8BCD\u5668</h5><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200502182929583.png" alt="image-20200502182929583"></p><p>\u6240\u6709\u7684\u8BED\u8A00\u5206\u8BCD\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u90FD\u662F\u201CStandard Analyzer\u201D\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5206\u8BCD\u5668\u9488\u5BF9\u4E8E\u4E2D\u6587\u7684\u5206\u8BCD\uFF0C\u5E76\u4E0D\u53CB\u597D\u3002\u4E3A\u6B64\u9700\u8981\u5B89\u88C5\u4E2D\u6587\u7684\u5206\u8BCD\u5668\u3002</p>`,6),ae=e("\u6CE8\u610F\uFF1A\u4E0D\u80FD\u7528\u9ED8\u8BA4elasticsearch-plugin install xxx.zip \u8FDB\u884C\u81EA\u52A8\u5B89\u88C5 "),ue={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases/download",target:"_blank",rel:"noopener noreferrer"},le=e("https://github.com/medcl/elasticsearch-analysis-ik/releases/download"),oe=e(" \u5BF9\u5E94es\u7248\u672C\u5B89\u88C5"),de=t(`<p>\u5728\u524D\u9762\u5B89\u88C5\u7684elasticsearch\u65F6\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06elasticsearch\u5BB9\u5668\u7684\u201C/usr/share/elasticsearch/plugins\u201D\u76EE\u5F55\uFF0C\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u7684\u201C /mydata/elasticsearch/plugins\u201D\u76EE\u5F55\u4E0B\uFF0C\u6240\u4EE5\u6BD4\u8F83\u65B9\u4FBF\u7684\u505A\u6CD5\u5C31\u662F\u4E0B\u8F7D\u201C/elasticsearch-analysis-ik-7.6.2.zip\u201D\u6587\u4EF6\uFF0C\u7136\u540E\u89E3\u538B\u5230\u8BE5\u6587\u4EF6\u5939\u4E0B\u5373\u53EF\u3002\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u9700\u8981\u91CD\u542Felasticsearch\u5BB9\u5668\u3002</p><p>\u5982\u679C\u4E0D\u5ACC\u9EBB\u70E6\uFF0C\u8FD8\u53EF\u4EE5\u91C7\u7528\u5982\u4E0B\u7684\u65B9\u5F0F\u3002</p><h6 id="_1-\u67E5\u770Belasticsearch\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770Belasticsearch\u7248\u672C\u53F7" aria-hidden="true">#</a> \uFF081\uFF09\u67E5\u770Belasticsearch\u7248\u672C\u53F7\uFF1A</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop-104 ~<span class="token punctuation">]</span><span class="token comment"># curl http://localhost:9200</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;0adeb7852e00&quot;</span>,
  <span class="token string">&quot;cluster_name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;elasticsearch&quot;</span>,
  <span class="token string">&quot;cluster_uuid&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;9gglpP0HTfyOTRAaSe2rIg&quot;</span>,
  <span class="token string">&quot;version&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;number&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;7.6.2&quot;</span>,      <span class="token comment">#\u7248\u672C\u53F7\u4E3A7.6.2</span>
    <span class="token string">&quot;build_flavor&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
    <span class="token string">&quot;build_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;docker&quot;</span>,
    <span class="token string">&quot;build_hash&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ef48eb35cf30adf4db14086e8aabd07ef6fb113f&quot;</span>,
    <span class="token string">&quot;build_date&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2020-03-26T06:34:37.794943Z&quot;</span>,
    <span class="token string">&quot;build_snapshot&quot;</span> <span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;lucene_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;8.4.0&quot;</span>,
    <span class="token string">&quot;minimum_wire_compatibility_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.8.0&quot;</span>,
    <span class="token string">&quot;minimum_index_compatibility_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;6.0.0-beta1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;tagline&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@hadoop-104 ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-\u8FDB\u5165es\u5BB9\u5668\u5185\u90E8plugin\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-\u8FDB\u5165es\u5BB9\u5668\u5185\u90E8plugin\u76EE\u5F55" aria-hidden="true">#</a> \uFF082\uFF09\u8FDB\u5165es\u5BB9\u5668\u5185\u90E8plugin\u76EE\u5F55</h6><ul><li>docker exec -it \u5BB9\u5668id /bin/bash</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop-104 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it elasticsearch /bin/bash</span>
<span class="token punctuation">[</span>root@0adeb7852e00 elasticsearch<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),ce=e("wget "),ve={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip",target:"_blank",rel:"noopener noreferrer"},re=e("https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip"),qe=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@0adeb7852e00 elasticsearch<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/share/elasticsearch
<span class="token comment">#\u4E0B\u8F7Dik7.6.2</span>
<span class="token punctuation">[</span>root@0adeb7852e00 elasticsearch<span class="token punctuation">]</span><span class="token comment"># wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>unzip \u4E0B\u8F7D\u7684\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@0adeb7852e00 elasticsearch<span class="token punctuation">]</span><span class="token comment"># unzip elasticsearch-analysis-ik-7.6.2.zip -d ink</span>
Archive:  elasticsearch-analysis-ik-7.6.2.zip
   creating: ik/config/
  inflating: ik/config/main.dic      
  inflating: ik/config/quantifier.dic  
  inflating: ik/config/extra_single_word_full.dic  
  inflating: ik/config/IKAnalyzer.cfg.xml  
  inflating: ik/config/surname.dic   
  inflating: ik/config/suffix.dic    
  inflating: ik/config/stopword.dic  
  inflating: ik/config/extra_main.dic  
  inflating: ik/config/extra_stopword.dic  
  inflating: ik/config/preposition.dic  
  inflating: ik/config/extra_single_word_low_freq.dic  
  inflating: ik/config/extra_single_word.dic  
  inflating: ik/elasticsearch-analysis-ik-7.6.2.jar  
  inflating: ik/httpclient-4.5.2.jar  
  inflating: ik/httpcore-4.4.4.jar   
  inflating: ik/commons-logging-1.2.jar  
  inflating: ik/commons-codec-1.9.jar  
  inflating: ik/plugin-descriptor.properties  
  inflating: ik/plugin-security.policy  
<span class="token punctuation">[</span>root@0adeb7852e00 elasticsearch<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token comment">#\u79FB\u52A8\u5230plugins\u76EE\u5F55\u4E0B</span>
<span class="token punctuation">[</span>root@0adeb7852e00 elasticsearch<span class="token punctuation">]</span><span class="token comment"># mv ik plugins/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>rm -rf *.zip</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@0adeb7852e00 elasticsearch]# rm -rf elasticsearch-analysis-ik-7.6.2.zip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u786E\u8BA4\u662F\u5426\u5B89\u88C5\u597D\u4E86\u5206\u8BCD\u5668</p><h5 id="_2-\u6D4B\u8BD5\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u6D4B\u8BD5\u5206\u8BCD\u5668" aria-hidden="true">#</a> \uFF082\uFF09\u6D4B\u8BD5\u5206\u8BCD\u5668</h5><p>\u4F7F\u7528\u9ED8\u8BA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET my_index/_analyze
{
   &quot;text&quot;:&quot;\u6211\u662F\u4E2D\u56FD\u4EBA&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u89C2\u5BDF\u6267\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;tokens&quot; : [
    {
      &quot;token&quot; : &quot;\u6211&quot;,
      &quot;start_offset&quot; : 0,
      &quot;end_offset&quot; : 1,
      &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
      &quot;position&quot; : 0
    },
    {
      &quot;token&quot; : &quot;\u662F&quot;,
      &quot;start_offset&quot; : 1,
      &quot;end_offset&quot; : 2,
      &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
      &quot;position&quot; : 1
    },
    {
      &quot;token&quot; : &quot;\u4E2D&quot;,
      &quot;start_offset&quot; : 2,
      &quot;end_offset&quot; : 3,
      &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
      &quot;position&quot; : 2
    },
    {
      &quot;token&quot; : &quot;\u56FD&quot;,
      &quot;start_offset&quot; : 3,
      &quot;end_offset&quot; : 4,
      &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
      &quot;position&quot; : 3
    },
    {
      &quot;token&quot; : &quot;\u4EBA&quot;,
      &quot;start_offset&quot; : 4,
      &quot;end_offset&quot; : 5,
      &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
      &quot;position&quot; : 4
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET my_index/_analyze
{
   &quot;analyzer&quot;: &quot;ik_smart&quot;, 
   &quot;text&quot;:&quot;\u6211\u662F\u4E2D\u56FD\u4EBA&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;tokens&quot; : [
    {
      &quot;token&quot; : &quot;\u6211&quot;,
      &quot;start_offset&quot; : 0,
      &quot;end_offset&quot; : 1,
      &quot;type&quot; : &quot;CN_CHAR&quot;,
      &quot;position&quot; : 0
    },
    {
      &quot;token&quot; : &quot;\u662F&quot;,
      &quot;start_offset&quot; : 1,
      &quot;end_offset&quot; : 2,
      &quot;type&quot; : &quot;CN_CHAR&quot;,
      &quot;position&quot; : 1
    },
    {
      &quot;token&quot; : &quot;\u4E2D\u56FD\u4EBA&quot;,
      &quot;start_offset&quot; : 2,
      &quot;end_offset&quot; : 5,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 2
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET my_index/_analyze
{
   &quot;analyzer&quot;: &quot;ik_max_word&quot;, 
   &quot;text&quot;:&quot;\u6211\u662F\u4E2D\u56FD\u4EBA&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;tokens&quot; : [
    {
      &quot;token&quot; : &quot;\u6211&quot;,
      &quot;start_offset&quot; : 0,
      &quot;end_offset&quot; : 1,
      &quot;type&quot; : &quot;CN_CHAR&quot;,
      &quot;position&quot; : 0
    },
    {
      &quot;token&quot; : &quot;\u662F&quot;,
      &quot;start_offset&quot; : 1,
      &quot;end_offset&quot; : 2,
      &quot;type&quot; : &quot;CN_CHAR&quot;,
      &quot;position&quot; : 1
    },
    {
      &quot;token&quot; : &quot;\u4E2D\u56FD\u4EBA&quot;,
      &quot;start_offset&quot; : 2,
      &quot;end_offset&quot; : 5,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 2
    },
    {
      &quot;token&quot; : &quot;\u4E2D\u56FD&quot;,
      &quot;start_offset&quot; : 2,
      &quot;end_offset&quot; : 4,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 3
    },
    {
      &quot;token&quot; : &quot;\u56FD\u4EBA&quot;,
      &quot;start_offset&quot; : 3,
      &quot;end_offset&quot; : 5,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 4
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-\u81EA\u5B9A\u4E49\u8BCD\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u5B9A\u4E49\u8BCD\u5E93" aria-hidden="true">#</a> \uFF083\uFF09\u81EA\u5B9A\u4E49\u8BCD\u5E93</h5><ul><li>\u4FEE\u6539/usr/share/elasticsearch/plugins/ik/config\u4E2D\u7684IKAnalyzer.cfg.xml /usr/share/elasticsearch/plugins/ik/config</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer \u6269\u5C55\u914D\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u6269\u5C55\u5B57\u5178 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
	 <span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u6269\u5C55\u505C\u6B62\u8BCD\u5B57\u5178--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u8FDC\u7A0B\u6269\u5C55\u5B57\u5178 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remote_ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>http://192.168.13.100/es/fenci.txt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span> 
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u8FDC\u7A0B\u6269\u5C55\u505C\u6B62\u8BCD\u5B57\u5178--&gt;</span>
	<span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u6765\u7684xml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer \u6269\u5C55\u914D\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u6269\u5C55\u5B57\u5178 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
	 <span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u6269\u5C55\u505C\u6B62\u8BCD\u5B57\u5178--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u8FDC\u7A0B\u6269\u5C55\u5B57\u5178 --&gt;</span>
	<span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_dict&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
	<span class="token comment">&lt;!--\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u8FDC\u7A0B\u6269\u5C55\u505C\u6B62\u8BCD\u5B57\u5178--&gt;</span>
	<span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u91CD\u542Felasticsearch\u5BB9\u5668\uFF0C\u5426\u5219\u4FEE\u6539\u4E0D\u751F\u6548\u3002</p><p>\u66F4\u65B0\u5B8C\u6210\u540E\uFF0Ces\u53EA\u4F1A\u5BF9\u4E8E\u65B0\u589E\u7684\u6570\u636E\u7528\u66F4\u65B0\u5206\u8BCD\u3002\u5386\u53F2\u6570\u636E\u662F\u4E0D\u4F1A\u91CD\u65B0\u5206\u8BCD\u7684\u3002\u5982\u679C\u60F3\u8981\u5386\u53F2\u6570\u636E\u91CD\u65B0\u5206\u8BCD\uFF0C\u9700\u8981\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>POST my_index/_update_by_query?conflicts<span class="token operator">=</span>proceed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),me={href:"http://192.168.13.101/es/fenci.txt%EF%BC%8C%E8%BF%99%E4%B8%AA%E6%98%AFnginx%E4%B8%8A%E8%B5%84%E6%BA%90%E7%9A%84%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84",target:"_blank",rel:"noopener noreferrer"},pe=e("http://192.168.13.101/es/fenci.txt\uFF0C\u8FD9\u4E2A\u662Fnginx\u4E0A\u8D44\u6E90\u7684\u8BBF\u95EE\u8DEF\u5F84"),be=t(`<p>\u5728\u8FD0\u884C\u4E0B\u9762\u5B9E\u4F8B\u4E4B\u524D\uFF0C\u9700\u8981\u5B89\u88C5nginx\uFF08\u5B89\u88C5\u65B9\u6CD5\u89C1\u5B89\u88C5nginx\uFF09\uFF0C\u7136\u540E\u521B\u5EFA\u201Cfenci.txt\u201D\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6A31\u6843\u8428\u5176\u9A6C\uFF0C\u5E26\u4F60\u751C\u871C\u5165\u590F&quot;</span> <span class="token operator">&gt;</span> /mydata/nginx/html/fenci.txt 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET my_index/_analyze
{
   &quot;analyzer&quot;: &quot;ik_max_word&quot;, 
   &quot;text&quot;:&quot;\u6A31\u6843\u8428\u5176\u9A6C\uFF0C\u5E26\u4F60\u751C\u871C\u5165\u590F&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;tokens&quot; : [
    {
      &quot;token&quot; : &quot;\u6A31\u6843&quot;,
      &quot;start_offset&quot; : 0,
      &quot;end_offset&quot; : 2,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 0
    },
    {
      &quot;token&quot; : &quot;\u8428\u5176\u9A6C&quot;,
      &quot;start_offset&quot; : 2,
      &quot;end_offset&quot; : 5,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 1
    },
    {
      &quot;token&quot; : &quot;\u5E26\u4F60&quot;,
      &quot;start_offset&quot; : 6,
      &quot;end_offset&quot; : 8,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 2
    },
    {
      &quot;token&quot; : &quot;\u751C\u871C&quot;,
      &quot;start_offset&quot; : 8,
      &quot;end_offset&quot; : 10,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 3
    },
    {
      &quot;token&quot; : &quot;\u5165\u590F&quot;,
      &quot;start_offset&quot; : 10,
      &quot;end_offset&quot; : 12,
      &quot;type&quot; : &quot;CN_WORD&quot;,
      &quot;position&quot; : 4
    }
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4\u3001elasticsearch-rest-client" tabindex="-1"><a class="header-anchor" href="#_4\u3001elasticsearch-rest-client" aria-hidden="true">#</a> 4\u3001elasticsearch-Rest-Client</h3><h4 id="_1-9300-tcp" tabindex="-1"><a class="header-anchor" href="#_1-9300-tcp" aria-hidden="true">#</a> 1\uFF099300: TCP</h4><ul><li>spring-data-elasticsearch:transport-api.jar; <ul><li>springboot\u7248\u672C\u4E0D\u540C\uFF0Cransport-api.jar\u4E0D\u540C\uFF0C\u4E0D\u80FD\u9002\u914Des\u7248\u672C</li><li>7.x\u5DF2\u7ECF\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C8\u4EE5\u540E\u5C31\u8981\u5E9F\u5F03</li></ul></li></ul><h4 id="_2-9200-http" tabindex="-1"><a class="header-anchor" href="#_2-9200-http" aria-hidden="true">#</a> 2\uFF099200: HTTP</h4>`,10),ge=n("li",null,[n("p",null,"jestClient: \u975E\u5B98\u65B9\uFF0C\u66F4\u65B0\u6162\uFF1B")],-1),ke=n("li",null,[n("p",null,"RestTemplate\uFF1A\u6A21\u62DFHTTP\u8BF7\u6C42\uFF0CES\u5F88\u591A\u64CD\u4F5C\u9700\u8981\u81EA\u5DF1\u5C01\u88C5\uFF0C\u9EBB\u70E6\uFF1B")],-1),he=n("li",null,[n("p",null,"HttpClient\uFF1A\u540C\u4E0A\uFF1B")],-1),_e=e("Elasticsearch-Rest-Client\uFF1A\u5B98\u65B9RestClient\uFF0C\u5C01\u88C5\u4E86ES\u64CD\u4F5C\uFF0CAPI\u5C42\u6B21\u5206\u660E\uFF0C\u4E0A\u624B\u7B80\u5355\uFF1B \u6700\u7EC8\u9009\u62E9Elasticsearch-Rest-Client\uFF08elasticsearch-rest-high-level-client\uFF09\uFF1B "),xe={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html",target:"_blank",rel:"noopener noreferrer"},fe=e("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html"),ye=n("h3",{id:"_5\u3001\u9644\u5F55-\u5B89\u88C5nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5\u3001\u9644\u5F55-\u5B89\u88C5nginx","aria-hidden":"true"},"#"),e(" 5\u3001\u9644\u5F55\uFF1A\u5B89\u88C5Nginx")],-1),we=t(`<li><p>\u968F\u4FBF\u542F\u52A8\u4E00\u4E2Anginx\u5B9E\u4F8B\uFF0C\u53EA\u662F\u4E3A\u4E86\u590D\u5236\u51FA\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">8081</span>:80 --name nginx -d nginx:1.10   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5C06\u5BB9\u5668\u5185\u7684\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230/mydata/nginx/conf/ \u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /mydata/nginx/html
<span class="token function">mkdir</span> -p /mydata/nginx/logs
<span class="token function">mkdir</span> -p /mydata/nginx/conf
<span class="token function">docker</span> container <span class="token function">cp</span> nginx:/etc/nginx <span class="token builtin class-name">.</span>  <span class="token comment">#\u62F7\u8D1D\u5230\u5F53\u524D\u6587\u4EF6\u5939</span>
<span class="token comment">#\u7531\u4E8E\u62F7\u8D1D\u5B8C\u6210\u540E\u4F1A\u5728config\u4E2D\u5B58\u5728\u4E00\u4E2Anginx\u6587\u4EF6\u5939\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u5B83\u7684\u5185\u5BB9\u79FB\u52A8\u5230conf\u4E2D</span>
<span class="token function">mv</span> /mydata/nginx/conf/nginx/* /mydata/nginx/conf/
<span class="token function">rm</span> -rf /mydata/nginx/conf/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7EC8\u6B62\u539F\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> stop nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6267\u884C\u547D\u4EE4\u5220\u9664\u539F\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFA\u65B0\u7684Nginx\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">80</span>:80 --name nginx <span class="token punctuation">\\</span>
 -v /mydata/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
 -v /mydata/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
 -v /mydata/nginx/conf/:/etc/nginx <span class="token punctuation">\\</span>
 -d nginx:1.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8nginx</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker update nginx --restart=always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,6),Ae=n("p",null,"\u521B\u5EFA\u201C/mydata/nginx/html/index.html\u201D\u6587\u4EF6\uFF0C\u6D4B\u8BD5\u662F\u5426\u80FD\u591F\u6B63\u5E38\u8BBF\u95EE",-1),Ee=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`echo '<h2>hello nginx!</h2>' >/mydata/nginx/html/index.html
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Se=e("\u8BBF\u95EE\uFF1A"),Te={href:"http://xn--ngixIP-6y7ij32djrxcmle44b:80/index.html",target:"_blank",rel:"noopener noreferrer"},Me=e("http://ngix\u6240\u5728\u4E3B\u673A\u7684IP:80/index.html"),Re=n("h2",{id:"_2-springboot\u6574\u5408elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-springboot\u6574\u5408elasticsearch","aria-hidden":"true"},"#"),e(" 2.SpringBoot\u6574\u5408ElasticSearch")],-1),Pe=n("p",null,"\u521D\u59CB\u5316\uFF1A",-1),Le={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.6/java-rest-high-getting-started-initialization.html",target:"_blank",rel:"noopener noreferrer"},Ce=e("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.6/java-rest-high-getting-started-initialization.html"),Oe=t(`<h3 id="_1\u3001\u5BFC\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5BFC\u5165\u4F9D\u8D56" aria-hidden="true">#</a> 1\u3001\u5BFC\u5165\u4F9D\u8D56</h3><p>\u8FD9\u91CC\u7684\u7248\u672C\u8981\u548C\u6240\u6309\u7167\u7684ELK\u7248\u672C\u5339\u914D\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch.client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-rest-high-level-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.6.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728spring-boot-dependencies\u4E2D\u6240\u4F9D\u8D56\u7684ELK\u7248\u672C\u4F4D6.8.7</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elasticsearch.version</span><span class="token punctuation">&gt;</span></span>6.8.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elasticsearch.version</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200511074437763.png" alt="image-20200511074437763"></p><p>\u9700\u8981\u5728\u9879\u76EE\u4E2D\u5C06\u5B83\u6539\u4E3A7.6.2</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elasticsearch.version</span><span class="token punctuation">&gt;</span></span>7.6.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elasticsearch.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u518C\u5230\u6CE8\u518C\u4E2D\u5FC3</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> gulimall<span class="token punctuation">-</span>searcch
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">12000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GulimallSearcchApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">GulimallSearcchApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u914D\u7F6E\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> hzz
 * <span class="token keyword">@create</span> 2022-07-14 15:18
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GulimallElasticSearchConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u6240\u6709\u8BF7\u6C42\u5171\u4EAB\u7684\u914D\u7F6E</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">RequestOptions</span> COMMON_OPTIONS<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">RequestOptions<span class="token punctuation">.</span>Builder</span> builder <span class="token operator">=</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span>DEFAULT<span class="token punctuation">.</span><span class="token function">toBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// builder.addHeader(&quot;Authorization&quot;, &quot;Bearer &quot; + TOKEN);</span>
        <span class="token comment">// builder.setHttpAsyncResponseConsumerFactory(</span>
        <span class="token comment">//         new HttpAsyncResponseConsumerFactory</span>
        <span class="token comment">//                 .HeapBufferedResponseConsumerFactory(30 * 1024 * 1024 * 1024));</span>
        COMMON_OPTIONS <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// es \u5BA2\u6237\u7AEF</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RestHighLevelClient</span> <span class="token function">esRestClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span>
                <span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.13.100&quot;</span><span class="token punctuation">,</span> <span class="token number">9200</span><span class="token punctuation">,</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u7F16\u5199\u6D4B\u8BD5\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u7F16\u5199\u6D4B\u8BD5\u7C7B" aria-hidden="true">#</a> 2\u3001\u7F16\u5199\u6D4B\u8BD5\u7C7B</h3><h4 id="_1-\u6D4B\u8BD5\u4FDD\u5B58\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-\u6D4B\u8BD5\u4FDD\u5B58\u6570\u636E" aria-hidden="true">#</a> 1\uFF09\u6D4B\u8BD5\u4FDD\u5B58\u6570\u636E</h4>`,16),ze={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-document-index.html",target:"_blank",rel:"noopener noreferrer"},Be=e("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-document-index.html"),He=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">GulimallSearcchApplicationTests</span> <span class="token punctuation">{</span>   
      
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">indexData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">IndexRequest</span> indexRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest</span> <span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setGender</span><span class="token punctuation">(</span><span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8BBE\u7F6E\u8981\u4FDD\u5B58\u7684\u5185\u5BB9</span>
        indexRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6267\u884C\u521B\u5EFA\u7D22\u5F15\u548C\u4FDD\u5B58\u6570\u636E</span>
        <span class="token class-name">IndexResponse</span> index <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">,</span> <span class="token class-name">GulimallElasticSearchConfig</span><span class="token punctuation">.</span>COMMON_OPTIONS<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u524D\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200511111618183.png" alt="image-20200511111618183"></p><p>\u6D4B\u8BD5\u540E\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2541/image-20200511112025327.png" alt="image-20200511112025327"></p><h4 id="_2-\u6D4B\u8BD5\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u6D4B\u8BD5\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> 2\uFF09\u6D4B\u8BD5\u83B7\u53D6\u6570\u636E</h4>`,6),Ge={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html",target:"_blank",rel:"noopener noreferrer"},Ne=e("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html"),Ie=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">GulimallSearcchApplicationTests</span> <span class="token punctuation">{</span>   
      
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">GetRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">GetResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">GulimallElasticSearchConfig</span><span class="token punctuation">.</span>COMMON_OPTIONS<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u641C\u7D22address\u4E2D\u5305\u542Bmill\u7684\u6240\u6709\u4EBA\u7684\u5E74\u9F84\u5206\u5E03\u4EE5\u53CA\u5E73\u5747\u5E74\u9F84\uFF0C\u5E73\u5747\u85AA\u8D44</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET bank/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;: &quot;Mill&quot;
    }
  },
  &quot;aggs&quot;: {
    &quot;ageAgg&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;age&quot;,
        &quot;size&quot;: 10
      }
    },
    &quot;ageAvg&quot;: {
      &quot;avg&quot;: {
        &quot;field&quot;: &quot;age&quot;
      }
    },
    &quot;balanceAvg&quot;: {
      &quot;avg&quot;: {
        &quot;field&quot;: &quot;balance&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java\u5B9E\u73B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">GulimallSearcchApplicationTests</span> <span class="token punctuation">{</span>
    
     <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
     * \u590D\u6742\u68C0\u7D22:\u5728bank\u4E2D\u641C\u7D22address\u4E2D\u5305\u542Bmill\u7684\u6240\u6709\u4EBA\u7684\u5E74\u9F84\u5206\u5E03\u4EE5\u53CA\u5E73\u5747\u5E74\u9F84\uFF0C\u5E73\u5747\u85AA\u8D44
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">searchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. \u521B\u5EFA\u68C0\u7D22\u8BF7\u6C42</span>
        <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.1\uFF09\u6307\u5B9A\u7D22\u5F15</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token string">&quot;bank&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1.2\uFF09\u6784\u9020\u68C0\u7D22\u6761\u4EF6</span>
        <span class="token class-name">SearchSourceBuilder</span> sourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Mill&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.2.1)\u6309\u7167\u5E74\u9F84\u5206\u5E03\u8FDB\u884C\u805A\u5408</span>
        <span class="token class-name">TermsAggregationBuilder</span> ageAgg<span class="token operator">=</span><span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;ageAgg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>ageAgg<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//1.2.2)\u8BA1\u7B97\u5E73\u5747\u5E74\u9F84</span>
        <span class="token class-name">AvgAggregationBuilder</span> ageAvg <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;ageAvg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>ageAvg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//1.2.3)\u8BA1\u7B97\u5E73\u5747\u85AA\u8D44</span>
        <span class="token class-name">AvgAggregationBuilder</span> balanceAvg <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;balanceAvg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;balance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>balanceAvg<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u68C0\u7D22\u6761\u4EF6\uFF1A&quot;</span><span class="token operator">+</span>sourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>sourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//2. \u6267\u884C\u68C0\u7D22</span>
        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span>DEFAULT<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u68C0\u7D22\u7ED3\u679C\uFF1A&quot;</span><span class="token operator">+</span>searchResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3. \u5C06\u68C0\u7D22\u7ED3\u679C\u5C01\u88C5\u4E3ABean</span>
        <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> searchHit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> sourceAsString <span class="token operator">=</span> searchHit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Account</span> account <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>sourceAsString<span class="token punctuation">,</span> <span class="token class-name">Account</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//4. \u83B7\u53D6\u805A\u5408\u4FE1\u606F</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Terms</span> ageAgg1 <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ageAgg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> ageAgg1<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> keyAsString <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74\u9F84\uFF1A&quot;</span><span class="token operator">+</span>keyAsString<span class="token operator">+</span><span class="token string">&quot; ==&gt; &quot;</span><span class="token operator">+</span>bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Avg</span> ageAvg1 <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ageAvg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E73\u5747\u5E74\u9F84\uFF1A&quot;</span><span class="token operator">+</span>ageAvg1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Avg</span> balanceAvg1 <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;balanceAvg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E73\u5747\u85AA\u8D44\uFF1A&quot;</span><span class="token operator">+</span>balanceAvg1<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
	<span class="token annotation punctuation">@Data</span>
    <span class="token annotation punctuation">@ToString</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> accountNumber<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> balance<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> firstname<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> lastname<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> employer<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> city<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u5C1D\u8BD5\u5BF9\u6BD4\u6253\u5370\u7684\u6761\u4EF6\u548C\u6267\u884C\u7ED3\u679C\uFF0C\u548C\u524D\u9762\u7684ElasticSearch\u7684\u68C0\u7D22\u8BED\u53E5\u548C\u68C0\u7D22\u7ED3\u679C\u8FDB\u884C\u6BD4\u8F83\uFF1B</p>`,6);function je(De,Ue){const s=o("ExternalLinkIcon");return u(),l("div",null,[c,v,r,q,m,p,n("p",null,[b,n("a",g,[k,i(s)]),h,n("a",_,[x,i(s)]),f,n("a",y,[w,i(s)]),n("a",A,[E,i(s)])]),S,n("p",null,[T,n("a",M,[R,i(s)])]),P,n("p",null,[L,n("a",C,[O,i(s)]),z]),B,n("p",null,[H,n("a",G,[N,i(s)])]),I,n("p",null,[j,n("a",D,[U,i(s)]),K]),F,W,Y,n("p",null,[Q,n("a",V,[J,i(s)])]),X,Z,$,n("p",null,[nn,n("a",en,[sn,i(s)])]),tn,an,n("p",null,[un,n("a",ln,[on,i(s)])]),dn,n("p",null,[n("a",cn,[vn,i(s)])]),rn,n("p",null,[n("a",qn,[mn,i(s)])]),pn,bn,n("p",null,[n("a",gn,[kn,i(s)])]),hn,_n,xn,n("p",null,[n("a",fn,[yn,i(s)])]),wn,An,En,n("p",null,[n("a",Sn,[Tn,i(s)])]),Mn,n("p",null,[n("a",Rn,[Pn,i(s)])]),Ln,n("p",null,[n("a",Cn,[On,i(s)]),zn]),Bn,n("p",null,[Hn,n("a",Gn,[Nn,i(s)])]),In,n("blockquote",null,[n("p",null,[jn,Dn,Un,n("a",Kn,[Fn,i(s)]),Wn]),Yn,n("p",null,[n("a",Qn,[Vn,i(s)])])]),Jn,n("p",null,[Xn,n("a",Zn,[$n,i(s)])]),ne,n("p",null,[ee,n("a",se,[ie,i(s)])]),te,n("p",null,[ae,n("a",ue,[le,i(s)]),oe]),de,n("ul",null,[n("li",null,[ce,n("a",ve,[re,i(s)])])]),qe,n("p",null,[n("a",me,[pe,i(s)])]),be,n("ul",null,[ge,ke,he,n("li",null,[n("p",null,[_e,n("a",xe,[fe,i(s)])])])]),ye,n("ul",null,[we,n("li",null,[Ae,Ee,n("p",null,[Se,n("a",Te,[Me,i(s)])])])]),Re,n("blockquote",null,[Pe,n("p",null,[n("a",Le,[Ce,i(s)])])]),Oe,n("p",null,[n("a",ze,[Be,i(s)])]),He,n("p",null,[n("a",Ge,[Ne,i(s)])]),Ie])}var We=a(d,[["render",je],["__file","ElasticSearch.html.vue"]]);export{We as default};
