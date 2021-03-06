<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Smoking Saves Lives</title>
	<link rel="stylesheet" href="styles/base.css">
	<script src="scripts/jquery-1.11.0.min.js"></script>
	<script src="scripts/jquery.color-2.1.2.min.js"></script>
	<script src="scripts/script.js"></script>
</head>
<body>

	<?php
		include("includes/cigfunctions.php");
	?>

	<div id="cigdiv">
		<?php 
			create_cigarette();
			$n = mt_rand(1, 10);
			$second_picture = $n>7 ? "nurse.jpg" : "llama.jpg";
		?>
	</div>

	<div id="maincontent">

		<div id="header">
			
			<h1>Smoking Saves Lives</h1>

		</div><!--end of header-->

		<div id="content">

			
			<p><img src="img/maddoctor.jpg" class="doctorimg">The photo of a doctor shown here demonstrates the fact that we can Photoshop images, and happens to tie into the random statement we are making about 4 out of 5 doctors recommending young adults take up smoking to help stimulate the economy. It is also being advised that all people over the age of 60 begin smoking two packs a day. These two actions will help to generate revenue for the poor tobacco companies, and has the added benefit of alleviating the potential issue facing the Social Security Administration, as baby boomers begin draining the government honey pot.</p>

			<p>Smoking cigarettes has been proven to reduce stress in people who smoke. A "smoker" can suffer from increased tension and irritability due to the lack of toxic chemicals in their system. Upon inhaling the fumes from a cigarette the lungs begin to adsorb much need toxins into the blood stream and the body begins to balance. This effect can most often be felt during the first cigarette of the morning, or after and especially long breaks between smoking sessions. 7 out of 4 smokers reported this event reduces frustration and irritability.</p>

			<p><img src="img/<?php echo $second_picture?>" class="nurseimg">Smoking cigarettes is a universal social normalizer. Any and all smoking areas belong to the community; you may often find a vagrant socializing with a millionaire within the confines of a "designated smoking area." They share lighters and discuss current affairs. Their individual backgrounds mean little when they huddle together during winter to stay warm. This open acceptance is the standard among all smokers.  All other cultures and groups should take a page from the smoker's handbook.Groups seeking acceptance need only take up smoking and walk to any smoking area to find a warm welcome to the community. The nerds of Lamda Lamda Lamda only needed to hit the local Minute Mart, pick up a pack of camels and a Bic lighter, and the Alpha Betas would have welcomed them into the smoking shack at Adams College with open arms.</p>
			
			

		<div id="footer">
			<p>&copy; 2DJ Designs, 2014</p>
		</div><!--end of footer-->

		

		</div><!--end of content-->

		<div id="endorsement">

		<?php
			create_endorsement();
		?>

		</div><!--end of endorsement-->

		<div id="ad">

			<img class="ad" src="img/marlborocountry.jpg">

		</div>

	</div><!--end of maincontent-->


	
</body>
</html>