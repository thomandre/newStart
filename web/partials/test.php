<html>
	<body>
		<form>
			<p><label for="p1">plop</label> : <input type="text" name="k1[]" /></p>
			<p><label for="p2">klop</label> : <input type="text" name="k1[]" /></p>
			<p><input type="submit" value="ok" /></p>
		</form>
		<?php

			var_dump($_GET);

		?>
	</body>
</html>