<?php
	
	function create_cigarette() {
		#break out to write HTML
		?>

		<div id="cigwrapper">
			
			<div id="butt">
				<div id="butttexture">
					
				</div>

				<p class="cigname">2DJ</p>
				<hr class="cigband">

			</div><!--end of butt-->

			<div id="cig">
				<div id="cigtexture">
				</div>
			</div><!--end of cig-->

			<div id="cherry">
				<div id="cherrytexture">
				</div>
			</div><!--end of cherry-->
			
		</div><!--end of cigwrapper-->

		<?php
		#close the function
	}

	function create_endorsement() {
		$e_title = "SURGEON GENERAL'S ENDORSEMENT:";
		$endorsements = array();
		$endorsements[] = "Smoking while pregnant may result in fetal superpowers.";
		$endorsements[] = "Starting smoking now increases your sexiness.";
		$endorsements[] = "Cigarette smoke contains magical fairy dust.";
		$endorsements[] = "Smoking improves reflex speed and increases brain mass.";
		$endorsements[] = "Smoking is incredibly delicious and highly relaxing.";
		$e_message = $endorsements[mt_rand(0, count($endorsements)-1)];
		echo "<div id=\"endorsement\">\n";
		echo "<p class=\"e_message\">$e_title $e_message</p>\n";
		echo "</div><!--end of endorsement-->\n";
	}

?>