$(document).ready(function(){

var fact = [];
fact[0] = 'Dinosaurs lived during a period of Earth’s history called the Mesozoic (“middle life”) Era.';
fact[1] = 'No one knows exactly how long a dinosaur’s lifespan was.';
fact[2] = 'The first ever Stegosaurus skeleton was found near Morrison, Colorado.';
fact[3] = 'Dinosaur skulls had large holes or “windows” that made their skulls lighter.';
fact[4] = 'Scientists estimate that there were over 1,000 different species of non-avian dinosaurs and over 500 distinct genera.';
fact[5] = 'Dinosaurs lived on all the continents, including Antarctica.';
fact[6] = 'Colorado’s nickname is the Stegosaurus State.';
fact[7] = 'Most dinosaurs had long tails that helped them to keep their balance when running.';
fact[8] = 'While many people think dinosaurs were massive, dinosaurs were usually human sized or smaller.';
fact[9] = 'Some dinosaurs’ tails were over 45 feet long.';
fact[10] = 'The word “dinosaur” was coined by British paleontologist Richard Owen in 1842.';
fact[11] = 'All dinosaurs laid eggs. About 40 kinds of dinosaur eggs have been discovered.';
fact[12] = 'The first dinosaurs that appeared during the Triassic Period 230 million years ago were small and lightweight.';
fact[13] = 'The earliest named dinosaur found so far is the Eoraptor ("dawn stealer").';
fact[14] = 'The dinosaur with the longest name is Micropachycephalosaurus ("small thick-headed lizard").';
fact[15] = 'Dinosaurs dominated Earth for over 165 million years. Humans have been around for only 2 million years.';
fact[16] = 'Dinosaurs are divided into two groups by the structure of their hipbones.';
fact[17] = 'Many scientists believe that a massive meteorite hit the Yucatan Peninsula of Mexico 65.5 million years ago.';
fact[18] = 'The mass extinction of the dinosaurs and other animals that took place 65.5 million years ago is known as the Cretaceous-Tertiary extinction event.';
fact[19] = 'Mary Anning (1799-1847) was one of the most famous of all fossil hunters.';
fact[20] = 'Most meat eaters walked on two feet. This made them faster and left their hands free to grab their prey.';
fact[21] = 'Scientists believe that some dinosaurs were cold blooded, others warm blooded, and still others not fully one or the other.';
fact[22] = 'Explorer Roy Chapman Andrews found the first dinosaur nest known to science in 1923 in the Gobi Desert of Mongolia.';
fact[23] = 'The largest dinosaur eggs were as large as basketballs. The bigger the egg, the thicker the shell.';
fact[24] = 'The first dinosaurs were carnivores, or meat eaters.';
fact[25] = 'Most dinosaurs were vegetarians.';
fact[26] = 'Some of the biggest plant eaters had to eat as much as a ton of food a day.';
fact[27] = 'The Stegosaurus has the smallest brain for its body size of any known dinosaur.';
fact[28] = 'Englishmen 300 hundred years ago believed dinosaur bones came from an elephant or even giant humans.';
fact[29] = 'The first recorded description of a possible dinosaur bone discovery dates back to 3,500 years ago in China.';
fact[30] = 'Measuring 50 feet, Liopleurodon was the biggest aquatic reptile, half the size of the blue whale.';
fact[31] = 'The blue whale is bigger than any dinosaur at 108 feet (33 m).';
fact[32] = 'Most meat-eating dinosaurs had bones filled with air.';
fact[33] = 'Baby Mussaurus (“mouse lizard”) are the smallest dinosaur skeletons ever found.';
fact[34] = 'Small meat eaters were most likely the smartest type of dinosaurs.';
fact[35] = 'The term “dinosaur” refers to just land-dwelling reptiles that have a specific hip structure, among other traits.';
fact[36] = 'Triceratops had the biggest skull with a solid shield than any other dinosaur.';
fact[37] = 'A newborn human baby has a bigger brain than most adult dinosaurs had.';
fact[38] = 'Some dinosaurs may have had colorful skin, but scientists don’t know for sure.';
fact[39] = 'Snakes and lizards shed their skin when they grow. Researchers believe that dinosaurs may have done the same.';
fact[40] = 'Tyrannosaurus rex had huge back legs, but its tiny front legs were not much longer than human arms.';
fact[41] = 'While dinosaurs had the same set of leg bones, some had feet like a rhinoceros, elephant, bird, or a pig.';
fact[42] = 'Dinosaurs often swallowed large rocks. These rocks stayed in the stomach and helped them grind up food.';
fact[43] = 'Tyrannosaurus rex ate up to 22 tons of meat a year.';
fact[44] = 'Sauropods were the tallest animals that ever lived.';
fact[45] = 'Deinosuchus was a huge prehistoric crocodile.';
fact[46] = 'Corythosaurus had a big, hollow crest connected to its nose.';
fact[47] = 'Struthiomimus ("ostrich mimic"), as well as other small hunters, made high-pitched, screechy noises similar to an ostrich.';
fact[48] = 'Parasaurolophus had a crest that looked like half of a trombone.';
fact[49] = 'Some scientists believe that Tyrannosaurus rex may have been able to run as fast as 18 mph (28 km/h).';
fact[50] = 'Dinosaurs are cute';


    var randomfact = Math.floor(Math.random()*(fact.length));

    function getDino(){
        $("p").append(fact[randomfact]);
        $('a[data-text]').each(function(){
		  $(this).attr('data-text', fact[randomfact]);
		});
    }

    getDino();

});