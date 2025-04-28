<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="URL_Shortener_0"></a>URL Shortener</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="_A_Simple_and_Efficient_URL_Shortening_Service__1"></a><em>A Simple and Efficient URL Shortening Service</em></h2>
<p class="has-line-data" data-line-start="3" data-line-end="5">URL Shortener is a server-side rendered web application that allows users to create short URLs easily.<br>
It also tracks the number of clicks on each shortened link.</p>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7">Shorten long URLs</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">Track the number of clicks</li>
<li class="has-line-data" data-line-start="8" data-line-end="10">✨Future-Proof Features Incoming ✨</li>
</ul>
<h2 class="code-line" data-line-start=10 data-line-end=11 ><a id="Features_10"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="12" data-line-end="13">Generate unique short URLs using NanoID</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">Click analytics for each short URL</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">Server-side rendering using EJS</li>
<li class="has-line-data" data-line-start="15" data-line-end="16">MongoDB database for storing original and short URLs</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">Postman used for API testing</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">Environment variables managed with dotenv</li>
<li class="has-line-data" data-line-start="18" data-line-end="25">Future updates:
<ul>
<li class="has-line-data" data-line-start="19" data-line-end="20">IP address tracking</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">User authentication</li>
<li class="has-line-data" data-line-start="21" data-line-end="22">QR code generation for URLs</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">Custom short URL aliases</li>
<li class="has-line-data" data-line-start="23" data-line-end="25">Frontend redesign with React.js</li>
</ul>
</li>
</ul>
<h2 class="code-line" data-line-start=25 data-line-end=26 ><a id="Tech_25"></a>Tech</h2>
<p class="has-line-data" data-line-start="27" data-line-end="28">URL Shortener uses a number of open source projects and tools to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="29" data-line-end="30"><a href="https://nodejs.org/">Node.js</a> - evented I/O for the backend</li>
<li class="has-line-data" data-line-start="30" data-line-end="31"><a href="https://expressjs.com/">Express</a> - fast web framework for Node.js</li>
<li class="has-line-data" data-line-start="31" data-line-end="32"><a href="https://www.mongodb.com/">MongoDB</a> - NoSQL database for storing URL data</li>
<li class="has-line-data" data-line-start="32" data-line-end="33"><a href="https://mongoosejs.com/">Mongoose</a> - elegant MongoDB object modeling for Node.js</li>
<li class="has-line-data" data-line-start="33" data-line-end="34"><a href="https://ejs.co/">EJS</a> - simple templating language that lets you generate HTML markup</li>
<li class="has-line-data" data-line-start="34" data-line-end="35"><a href="https://github.com/ai/nanoid">nanoid</a> - secure, URL-friendly unique ID generator</li>
<li class="has-line-data" data-line-start="35" data-line-end="36"><a href="https://github.com/motdotla/dotenv">dotenv</a> - loads environment variables</li>
<li class="has-line-data" data-line-start="36" data-line-end="37"><a href="https://www.postman.com/">Postman</a> - API testing and development tool</li>
<li class="has-line-data" data-line-start="37" data-line-end="39"><a href="https://nodemon.io/">nodemon</a> - for live reloading during development</li>
</ul>
<h2 class="code-line" data-line-start=39 data-line-end=40 ><a id="Screenshots_39"></a>Screenshots</h2>
<p class="has-line-data" data-line-start="41" data-line-end="42"><em>Add some screenshots here showcasing the app interface, shortened URL, and analytics!</em></p>
<p class="has-line-data" data-line-start="43" data-line-end="45"><img src="YOUR_IMAGE_LINK_HERE" alt="Homepage Screenshot"><br>
<img src="YOUR_IMAGE_LINK_HERE" alt="Analytics Screenshot"></p>
<h2 class="code-line" data-line-start=46 data-line-end=47 ><a id="Installation_46"></a>Installation</h2>
<p class="has-line-data" data-line-start="48" data-line-end="49">URL Shortener requires <a href="https://nodejs.org/">Node.js</a> and <a href="https://www.mongodb.com/">MongoDB</a> installed.</p>
<p class="has-line-data" data-line-start="50" data-line-end="51">Clone the repository and install the dependencies.</p>
<pre><code class="has-line-data" data-line-start="53" data-line-end="57" class="language-sh">git <span class="hljs-built_in">clone</span> YOUR_REPO_URL
<span class="hljs-built_in">cd</span> YOUR_PROJECT_FOLDER
npm install
</code></pre>
<p class="has-line-data" data-line-start="58" data-line-end="59">Create a .env file in the root directory and add your environment variables.</p>
<pre><code class="has-line-data" data-line-start="61" data-line-end="64">MONGO_URL=your_mongodb_connection_string
PORT=your_desired_port
</code></pre>
<p class="has-line-data" data-line-start="65" data-line-end="66">Start the development server.</p>
<pre><code class="has-line-data" data-line-start="67" data-line-end="69">npm run dev
</code></pre>
<p class="has-line-data" data-line-start="69" data-line-end="70">Or for production.</p>
<pre><code class="has-line-data" data-line-start="71" data-line-end="73">npm start
</code></pre>
<p class="has-line-data" data-line-start="73" data-line-end="74">The app will be running at</p>
<pre><code class="has-line-data" data-line-start="75" data-line-end="77">http://localhost:PORT
</code></pre>
<h2 class="code-line" data-line-start=78 data-line-end=79 ><a id="API_Endpoints_78"></a>API Endpoints</h2>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Descripttion</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>/url/</td>
<td>Create a new short URL</td>
</tr>
<tr>
<td>GET</td>
<td>/url/:shortId</td>
<td>Get the redirect URL</td>
</tr>
<tr>
<td>GET</td>
<td>/url/analytics/:shortId</td>
<td>Get the link analytics</td>
</tr>
<tr>
<td>GET</td>
<td>/</td>
<td>Home page</td>
</tr>
</tbody>
</table>
<blockquote>
<p class="has-line-data" data-line-start="89" data-line-end="90">You can test these endpoints easily using Postman.</p>
</blockquote>
<h2 class="code-line" data-line-start=91 data-line-end=92 ><a id="Future_Plans_91"></a>Future Plans</h2>
<ul>
<li class="has-line-data" data-line-start="92" data-line-end="94">
<p class="has-line-data" data-line-start="92" data-line-end="93">IP address tracking for analytics</p>
</li>
<li class="has-line-data" data-line-start="94" data-line-end="96">
<p class="has-line-data" data-line-start="94" data-line-end="95">User authentication and dashboard</p>
</li>
<li class="has-line-data" data-line-start="96" data-line-end="98">
<p class="has-line-data" data-line-start="96" data-line-end="97">QR code generation for every short URL</p>
</li>
<li class="has-line-data" data-line-start="98" data-line-end="100">
<p class="has-line-data" data-line-start="98" data-line-end="99">Allow users to create custom aliases</p>
</li>
<li class="has-line-data" data-line-start="100" data-line-end="101">
<p class="has-line-data" data-line-start="100" data-line-end="101">Full frontend redesign using React</p>
</li>
</ul>
