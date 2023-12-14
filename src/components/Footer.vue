<script>



</script>
<template>
  <footer>
			<div class="wrapper">
				<div class="footer-box">
					<div class="company-footer">
						<h2>Johnfreela</h2>
						<p>A maneira muito fácil de criar seu website.</p>
					</div>
				</div>
				<div class="footer-box">

				</div>
				<div class="footer-box">
					<h2>Redes sociais</h2>
					<ul class="footer-list">
						<li>
							<a href="#">
								<span>Git</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
</template>



<style>
footer {
	background-color: #111;
	padding: 5em 0;
	padding-bottom: 40px;
	border-top: 5px solid #3381f3;
}

footer h2, footer p, footer a, footer span {
	color: #fff;
}

footer h2 {
	font-weight: 400;
}

footer a {
	text-decoration: none;
}

footer ul {
	padding: 0;
}

footer li {
	list-style: none;
}

.footer-box {
	width: 31%;
	padding: 1%;
	float: left;
}

footer .wrapper:after {
	clear: both;
	content: "";
	display: block;
}

.company-footer {
	width: 80%;
}

.company-footer h2 {
	margin-top: 0px;
}

.company-footer h2, .company-footer p {
	margin-bottom: 20px;
}

.footer-list li {
	margin-bottom: 15px;
}

.footer-list a {
	transition: 0.5s;
}

.footer-list a:hover {
	color: #FFF;
}

.footer-list li:after {
	clear: both;
	content: "";
	display: block;
}

.articles-footer {
	width: 80%;
}

.footer-list.footer-article-list span {
	display: block;
	float: none;
}

.fab {
	font-size: 30px;
	margin-right: 10px;
	float: left;
}

.footer-list li span {
	float: left;
	height: 30px;
	line-height: 30px;
}


.footer-bottom p {
	font-weight: 600;
	margin-top: 30px;
}

/* find jobs page */
#findjobs #search-form {
	padding-top: 2em;
	padding-bottom: 2em;
	width: 100%;
	background-color: #3381f3;
	border-top: 5px solid #0000e6;
}

#findjobs #lastjobs-container {
	margin-top: 3em;
}

#search-form input, #search-form select {
	width: 20%;
}

#findjobs #search-form input[type=submit] {
	background-color: #FFF;
	color: #3381f3;
}

#findjobs #lastjobs-container ul {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	margin-top: 0;
}

#type-filter {
	text-align: left;
}

#findjobs #type-filter ul {
	margin: 0;
	border-radius: 0;
	border: none;
	background-color: #FFF;
	border-right: 1px solid #CCC;
}

#findjobs #type-filter ul li {
	display: inline-block;
	width: 20%;
	height: 50px;
	line-height: 50px;
	border-bottom: none;
	border-left: 1px solid #CCC;
	border-right: 1px solid #CCC;
	padding-left: 1em;
}

#findjobs #type-filter ul li:nth-child(1), #findjobs #type-filter ul li:nth-child(2), #findjobs #type-filter ul li:nth-child(3) {
	border-right: none;
}

#findjobs #type-filter label {
	text-transform: uppercase;
	color: #666;
	font-weight: bold;
	margin-left: .5em;
}

/* send jobs page */
#sendjobs #sendjobs-container {
	margin-top: 100px;
	background: none;
	padding: 5em 0;
}

#sendjobs h1 {
	font-size: 36px;
	margin-bottom: 50px;
	text-align: center;
}

.input-box {
	margin-bottom: 2em;
	width: 50%;
	position: relative;
	margin-left: auto;
	margin-right: auto;
}

#sendjobs label {
	text-transform: uppercase;
	color: #666;
	font-weight: bold;
	display: block;
	margin-bottom: 1em;
}

#sendjobs input {
	border-radius: 5px;
	border: solid 1px #CCC;
	margin: 0;
	width: 100%;
	box-sizing: border-box;
}

#sendjobs textarea, #sendjobs select {
	border: 1px solid #CCC;
	font-family: 'Open Sans', sans-serif;
	margin: 0;
	width: 100%;
	box-sizing: border-box;
}

#sendjobs input[type=submit] {
	width: 200px;
	float: right;
}

.input-box:after {
	clear: both;
	content: "";
	display: block;
}

@media (max-width: 1200px){
footer{
	height: 30vw;
}
}

@media (max-width: 800px){
footer{
	height: 40vw;
}
}

@media (max-width: 570px){
footer{
	height: 60vw;
}
}
@media (max-width: 440px){
footer{
	height: 80vw;
}
}
@media (max-width: 360px){
footer{
	height: 100vw;
}
}
</style>