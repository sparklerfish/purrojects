# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('steps')
ApplicationRecord.connection.reset_pk_sequence!('projects')


# USERS
# ##############################################################################

10.times do 
    User.create(username: Faker::Games::Pokemon.name, email: Faker::Internet.email, password: 'password')
end

guest = User.create(
    username: 'guest', 
    email: 'guest@guest.com',
    password: 'password'
)


# PROJECT 1
# ##############################################################################

p1 = Project.create!(
    title: 'Cat Tree',
    body: "Several years ago when my son was in scouts for his eagle project he made a couple dozen cat trees to donate to the local shelter to give to folks who adopt a cat. Since he had such a large number to make we came up with some techniques to help production.  For this 'ible I scavenged some plywood, a 2x4, some carpet remnants, and some sisal rope.",
    author: User.order('RANDOM()').first,
    picture_url: 'cat_tree.jpg',
)

p1steps = Step.create!([
    {
        title: "Raw Materials - and Cutting",
        body: "Found a couple scraps of plywood, cut them down to an attractive size. The base is about 15in by 18in. The top platform is about 12x16 (the first picture shows the top piece before I cut it down a bit.

        The 2x4 I cut to about 30in or so.

        Obviously - you can feel free to adjust these dimensions however you see fit. We have a couple cats in the house, and they tend to like the top platform being around 30-35 inches off the ground. In order to keep stability the base needs to be a bit larger than the top platform.

        I cut the carpet by marking the carpet with about a 4in overhang over from the carpet (I used a 2x4 on either side as a gauge. This allows ample room to wrap the plywood.

        Once you have the carpet cut to size, need to cut the ears off each corner. This step allows the carpet to be wrapped around and not have a ton of material to contend with. I used a scrap of plywood and eyeballed about a 45 degree angle - and used a pencil to mark where to cut the carpet.

        The last carpet cutting step is to cut a notch at each corner. Again, this allows the carpet to be wrapped around the platform and stapled providing a nice clean look.

        The last picture shows the top and bottom platforms with the carpet cut and notched..",
        project_id: p1.id
    },
    {
        title: "Marking the Middles",
        body: "I used a straight edge to make a 'X' in the middle of each rectangle - and drilled a pilot hole in each piece. This will help align all the parts in future steps.",
        project_id: p1.id
    },
    {
        title: "The Carpeting Jig - Cool Part 1",
        body: "We tried a couple approaches to carpet the plywood when working on some prototypes for his project, all were rather difficult to align and hold while we applied some staples. Then hit on a cool solution - a carpeting jig....

        I took a piece of scrap plywood and screwed a scrap 2x4 on edge into the plywood. I used 3in screws through the plywood into the 2x4 to hold it secure - there will be some stress put on this piece, don't want it sliding about..

        Then screwed a scrap 1x into the plywood.

        The difference in heights on the jig allows the carpet to wrap around the plywood - and stay put while you put a couple staples in it.

        To set the gap between the 2x and 1x I used a piece of plywood and ONE piece of carpet. This forces the carpet to be very tight in the jig.

        I carpeted the BOTTOM piece only at this time. Put a couple staples to secure the carpet to the top of the bottom chunk of plywood. This keeps everything aligned while you staple the carpet wrapped around the plywood.

        Put the top of the panel against the 2x4, then push the piece between the 2x and 1x - the carpet will nicely conform to the plywood allowing you to put a couple staples to hold the carpet in place.

        When we were doing this with the scouts they seemed to enjoy this part - some of the younger scouts didn't quite have the power to push things together but the older ones didn't have any issues.",
        project_id: p1.id
    },
    {
        title: "Assembly Step - Getting Ready to Wrap the Rope",
        body: "I decided to add some carpet to the top and bottom of the 2x4 - mainly because I wasn't sure if I had enough rope.

        The assembly steps here require driving a lag bold from the BOTTOM of the bottom piece (that has already been carpeted into the 2x4 stand. At this point the bolt should be snug, but loose enough to allow you to turn the post.

        The TOP piece is screwed into the top of the 2x4. I used 3 screws, they were about 2in long. The middle screw goes through the middle of the plywood into the middle pilot hole on the top. The other 2 screws add additional security. This piece is tightly secured.",
        project_id: p1.id
    },
    {
        title: "Wrapping the Rope - Cool Bit Number 2",
        body: "Put some staples into the rope where you want to start. I wrapped from top to bottom, but don't see any issues going from bottom to top.

        Once the rope is secure use the TOP of the piece to turn the entire top piece and 2x4, your partner will hold the rope and you will wind the rope around the 2x4.

        The second picture shows my son guiding the winding rope as I turned the top piece. This approach seems to be a lot easier than wrapping the rope around the wood. Also, it is easy to get everything nice and snug.

        When you get to the bottom finish it off with a couple staples and cut the remaining rope. In my case I only had a couple inches of rope left over - glad I added some carpet to the top and bottom.",
        project_id: p1.id
    },
    {
        title: "Finishing It Up",
        body: "We are done spinning around now, so line everything up and drive the lag bolt tight. I added a couple more screws to make sure things don't loosen up.

        Now all that remains is to carpet the top piece. This is just like the bottom piece, but you have the whole cat tree to deal with when pushing things into the carpeting jig.

        Conclusion - Using these techniques my son was able to explain the assembly instruction to a bunch of middle school boys (and a few high school age) and they were able to assemble about 25 of these cat trees in several hours.",
        project_id: p1.id
    }
])


# PROJECT 2
# ##############################################################################

p2 = Project.create!(
    title: 'Cat Treats',
    body: "Ingredients:
    • 3/4 cup white flour
    • 3/4 cup shredded cheddar cheese
    • 5 tablespoons grated parmesan cheese
    • 1/4 cup plain yogurt or sour cream
    • 1/4 cup cornmeal",
    author: User.order('RANDOM()').first,
    picture_url: 'cat_treats.jpg',
)

p2steps = Step.create!([
    {
        title: "Preheat",
        body: 'Preheat the oven to 350 degrees Fahrenheit.',
        project_id: p2.id
    },
    {
        title: "Mix",
        body: 'Combine cheeses and yogurt. Add flour and cornmeal. If needed, add a small amount of water to create a nice dough.',
        project_id: p2.id
    },
    {
        title: "Form Treats",
        body: 'Knead dough into a ball and roll to 1/4 inch. Cut into one inch sized pieces and place on greased cookie sheet.',
        project_id: p2.id
    },
    {
        title: "Bake",
        body: 'Bake for 25 minutes. Makes 2 dozen.',
        project_id: p2.id
    }
])

# PROJECT 3
# ##############################################################################

p3 = Project.create!(
    title: 'Stuffed Cat Bed',
    body: 'Cats love these easy to make, stuffed cat beds. We also sell them for $15 each for the local cat shelter.',
    author: User.order('RANDOM()').first,
    picture_url: 'stuffed_cat_bed.jpg',
)


p3steps = Step.create!([
    {
        title: "Cut the Fabric",
        body: 'Cut a 17" round of fabric. I made a circle on a brown kraft paper shopping bag to use as a pattern, so I can use it over and over. Pick a center spot and measure out 8.5" and then continue till you have made a circle. Join all the marks and cut it out. Lay on doubled fabric and cut your round.',
        project_id: p3.id
    },
    {
        title: "Cut the Batting",
        body: 'Cut a 16" round of fiberfill or any type of batting. If you have old quilted mattress covers, these work well also. This piece is going to go in between the two pieces of the 17" round fabric you just cut. I sew an X across this fabric. I fold it in half to make a mark, pin and then sew. Go opposite and do the same so you have sewn an x across all 3 layers. This keeps the batting from shifting when the bed is washed.',
        project_id: p3.id
    },
    {
        title: "Cut a Rectangle",
        body: 'Cut a 14" rectangle the outside measurement of your circle. This is usually about 60" So 14" wide by 60" long. Sew the end together and double the fabric, wrong sides together, right side facing out.',
        project_id: p3.id
    },
    {
        title: "Sew",
        body: 'sew this rectangle to your circle, leaving an opening to stuff it with.',
        project_id: p3.id
    },
    {
        title: "Stuff",
        body: 'Stuff the outer ring to the desired fullness (I like them real full) of loose fiberfill. I save old stuffed pillows and take the stuffing out, to again save money. Once it is stuffed to the desired fullness, back under the machine to close the hole.',
        project_id: p3.id
    },
    {
        title: "Finishing Up",
        body: 'Turn the bed inside out so the seams on the edges disappear under the stuffed ring.',
        project_id: p3.id
    },
])

# PROJECT 4
# ##############################################################################

p4 = Project.create!(
    title: 'Hidden Litter Box',
    body: 'Since we have cats, and we also foster kittens, we needed to add litter boxes around the house. We didn\'t just want the boxes out in the open so we wanted to hide them in plain sight. We saw enclosures at Petco but they ran about $70 to $200 for just one. So we decided to make some ourselves..

    This will be my very first Instructable, so please bear with me..
    
    I purchased two double drawer nightstands for $30 at a thrift shop. ($15 a piece)
    
    Tools used:
    
    mitre saw or mitre box and saw (for the trim moulding)
    drill+bits
    screwdrivers
    jigsaw (for cutting the openings and the mdf)
    Spray paint
    scuff pad
    sand paper or electric sander
    
    
    Materials/ hardware:
    
    Spray paint
    small screws
    MDF
    small outside corner trim (moulding) "L" trim : Kelleher 3/4 in. x 3/4 in. Oak Outside Corner Moulding 98¢ lf
    Double Roller Catch with Spear Strike
    square corner door hinges x2
    Metal vent grill',
    author: User.order('RANDOM()').first,
    picture_url: 'hidden_litter_box.jpg',
)


p4steps = Step.create!([
    {
        title: "Disassembly",
        body: "I started with double drawer nightstands. I took the drawers apart, and the drawer supports were removed from the inside. We will only be needing the drawer faces (fronts). Then the faces were screwed on to MDF in the original configuration as they would be when they were working drawers.",
        project_id: p4.id
    },
    {
        title: "Entrance and Vent Openings",
        body: "I cut out the opening for the entrance and trimmed it with \"L\" shaped moulding for aesthetic purposes. If you don't want to use trim, make sure to sand the edges to prevent injuries to the cats. I also cut out an opening on the back for ventilation, we will attach a vent grill over this opening with heavy duty double sided tape.


        *trim for opening used: Kelleher 3/4 in. x 3/4 in. Oak Outside Corner Moulding",
        project_id: p4.id
    },
    {
        title: "Assembly",
        body: "Once the \"false\' drawers are assembled, I attached them to the nightstand using regular square corner door hinges. The door will open downward. A friend gave me some carpet so I could line the floor. I stapled the carpet in. I used a Double Roller Catch with Spear Strike to hold the door closed.

        *NOTE: because the MDF adds width to the drawer face thickness the screws for the handles are too short now. I used drill bit that was alrger than the screw\'s head diameter and added tape so it would only drill the depth of the MDF.",
        project_id: p4.id
    },
    {
        title: "Tweaks",
        body: "Because I used regular hinges, the drawer face touches the trim at the bottom of the nightstand and prevents the door from opening all the way. This can and will be resolved by eliminating the gap between the drawer faces by moving the bottom face up against the top one. Now the gap will be on the bottom giving you that space needed for the door to open fully.",
        project_id: p4.id
    },
    {
        title: "Final Product",
        body: "The \"shabby chic\" look was sorta accomplished by spraying it blue first, and then a white top coat was added. Then it was gone over with a scuff pad.(This was my partner in crime Heather's idea, she watches and reads way too much HGTV stuff. okay, so do I) She also wanted the handles to look \"old\" so I prayed them gold, (that didn't work, so I sprayed them gold) let the paint dry, sprayed black over them and quickly wiped it off. (my idea)                                                                     

            Total cost for two of these enclosures = about $70. Compared to $70-$200 for one at Petco..
            
            
            (make sure you have a drop cloth to cover your working surface when you paint to protect from overspray, my lovely assistant didn't, so now we have blue stripes on our driveway) MY fault really, I should have done the work in my workshop(garage) but I live in CA and it was way too HOT in there during the summer..  ",
        project_id: p4.id
    }
])


# PROJECT 5
# ##############################################################################

p5 = Project.create!(
    title: 'DIY Cat Tent',
    body: "I kept seeing photos of cat tents on Pinterest and being shared on Facebook, but none of them had good instructions! I decided to make a cat tent for Luna and document it so you guys could make one too. :D

    This cat tent is super easy to make - you really just need a t-shirt, some wire hangers and a piece of cardboard. As a bonus, it really only takes five minutes, so if your cat ignores it you didn't put too much effort in. ;)",
    author: User.order('RANDOM()').first,
    picture_url: "diy_cat_tent.jpg"
)


p5steps = Step.create!([
    {
        title: "What You'll Need",
        body: 'a cat
        a medium t-shirt
        a 15 x 15 inch piece of cardboard (mine was 13x15 and a little wonky)
        two wire hangers
        tape
        safety pins
        something to cut the hangers with and help bend them - I used a large pair of pliers. :)',
        project_id: p5.id
    },
    {
        title: "Cut the Hangers",
        body: 'Cut off both squiggly ends. I untwisted mine and then cut, but that\'s not really necessary. (though it was kinda fun!)',
        project_id: p5.id
    },
    {
        title: "Shape the Hangers + Reinforce the Cardboard If Needed",
        body: 'Shape the hangers so they look like the above - try to make them smooth and pretty uniform. You want two graceful curves that will go from corner to corner of your piece of cardboard.

        (Lu did an excellent job of this.)

        I also took this time to tape on a couple supports to the cardboard and tape all around the edges for a little more stability. This is really only necessary if you\'re using a piece of cardboard with a crease in it.',
        project_id: p5.id
    },
    {
        title: "Poke a Hole in Each Corner",
        body: 'You should be able to use the end of the hanger to do this!

        Make sure it\'s at least a half inch in from each edge and not too large.',
        project_id: p5.id
    },
    {
        title: "Tape the Two Hangers Together",
        body: 'Cross the two hangers in the middle and make sure all the ends touch the surface you\'re working on. Tape them together really well so they don\'t shift.

        Push the ends through the holes you just made in the corners.',
        project_id: p5.id
    },
    {
        title: "Bend the Ends and Tape Them Down",
        body: 'Bend at least an inch on the bottom of each hanger so it sits against the bottom of the cardboard. Tape the ends down flat against the cardboard - make sure you tape it well so it\'s nice and smooth and won\'t snag the shirt when you pull it over!',
        project_id: p5.id
    },
    {
        title: "Check and Make Sure Everything's Lined Up",
        body: 'At this point you can bend the wire so that it looks nicer - fiddle around with it and use the pliers if you need to straighten it out a bit. :)',
        project_id: p5.id
    },
    {
        title: "Create the Tent!",
        body: 'Pull the shirt over the tent frame and position it so the neck hole is in the front middle and the bottom of the shirt is trailing behind the tent frame.

        Flip the whole thing up so the bottom is facing you and the hole is pointing upwards.

        Fold up the excess from the bottom of the shirt and tighten it up so the neck hole is taut and safety pin the bottom in place. Then pull the sleeves tight and safety pin them in place too.

        As you can see in the last image, it should be pretty tight over the frame. Keep tucking and safety pinning until it\'s ready!

        (Yes, I know it would make sense to cut it, but I decided to leave it whole and safety pin it instead so it would be easy to remove and wash. :D)',
        project_id: p5.id
    },
    {
        title: "Give It to Your Cat!",
        body: 'I put a paper bag inside as a floor since it\'s been pretty hot here and a blanket would be waaaaay too warm. I also put a little catnip inside as a bonus.

        As you can see, she was pretty stoked. :D',
        project_id: p5.id
    }
])



# PROJECT 6
# ##############################################################################

p6 = Project.create!(
    title: 'Simple Cat Hammock',
    body: "I wanted to make a simple hammock for my cat, so here is my design",
    author: User.order('RANDOM()').first,
    picture_url: "simple_cat_hammock.jpg"
)

p6steps = Step.create!([
    {
        title: "Materials",
        body: 'Materials:
        A 24x14 piece of fabric (must be thin enough to fit through coat hanger)
        2 plastic coat hangers
        1 shower curtain rod

        Tools:
        Sewing Machine',
        project_id: p6.id
    },
    {
        title: "Assembly",
        body: '1. Lay the fabric flat on the ground
        2. Lay both coat hangers on either side of the sheet, leaving about 3-4 inches of room to loop the fabric over the hangers so you can sew.',
        project_id: p6.id
    },
    {
        title: "Sewing",
        body: 'Sew the top part that you looped through to the bottom part so it looks like the pictures.
        This is the body of the hammock',
        project_id: p6.id
    },
    {
        title: "Find Somewhere to Hang It",
        body: 'Hang the shower curtain rod between any two upright surfaces and place the coat hangers on the shower rod. You can hang your cat hammock in tons of places. Under a bench, in a stairway, etc. Make sure your cat can get to it easily. I hung it under a piano bench, and that worked really well for me because I could use two beams under the bench to keep the coat hangers far enough apart to avoid it folding up on the cat (see picture). Be creative and have fun',
        project_id: p6.id
    }
])


# PROJECT 7
# ##############################################################################

p7 = Project.create!(
    title: "Catnip Cat Toys",
    body: "These cat toys are easy to make and my cats go crazy over them.",
    author: User.order('RANDOM()').first,
    picture_url: "catnip_cat_toys.jpg"
)

p7steps = Step.create!([
    {
        title: "You Will Need",
        body: 'Fleece Fabric (Remnants are perfect)
        Polyester Fiber
        A Sewing Needle
        Embroidery Floss
        Catnip
        Scissors',
        project_id: p7.id
    },
    {
        title: "Cut the Fleece",
        body: 'Cut the fleece in a square (doesn\'t have to be perfect) to twice the size you want to make the cat toy. You need to cut it twice the size because you will have to fold it (see step 3).',
        project_id: p7.id
    },
    {
        title: "Fold and Start Sewing",
        body: 'Fold your fleece vertically. Make sure the edges line up, but it doesn\'t have to be perfect. Cut a long portion of the embroidery floss. Thread it through the needle and tie a knot at the end of the floss. Push the needle into the corner of the folded long end of the fleece. Sew running stitches starting at the closest short non-folded opening, since the folded long end does not need to be sewn. The stitches should be no bigger than 5 mm. Continue stitching until you have one short opening left.',
        project_id: p7.id
    },
    {
        title: "The Stuffing",
        body: 'Grab a chunk of polyester fiber and a couple pinches of catnip. Mix the catnip into the polyester fiber. (I recommend doing this over a garbage, because it can get messy.) After you\'ve mixed the catnip into the fiber, stuff it into the fleece case. The fiber should be half an inch from the opening. If what you mixed is not enough, repeat.',
        project_id: p7.id
    },
    {
        title: "Finish and Give to Your Cats",
        body: 'Finish the cat toy by sewing the opening with a running stitch. Be sure all of the polyester fiber stays inside the  fleece case. Tie a knot at the end of the floss and cut it. Trim up string from the knots and give to your cats.',
        project_id: p7.id
    }
])


# PROJECT 8
# ##############################################################################

p8 = Project.create!(
    title: "Cardboard Cat Scratcher",
    body: "Ever get sick of spending your hard earned money on cat crap for your cat(s)?

    Yea..you know, like that stupid $10 \"Cat Scratcher\"...yea...you know the one, the block of cut down and glued cardboard strips?

    Every time I'd buy one, I'd shake my head. Might as well give my cats $10 to play with and eat.

    This is a great solution for you. As it's been for me.",
    author: User.order('RANDOM()').first,
    picture_url: "cardboard_cat_scratcher.jpg"
)

p8steps = Step.create!([
    {
        title: "What You'll Need",
        body: 'You\'ll need the following:

        1. A cat (in my case Three).
        2. A piece of Card Board - 32x24 (I used 3 due to the amount of cats).
        3. A razor for cutting.
        4. A 36 Inch ruler (I like the metal ones).
        5. Some glue.
        6. Optional Cat Marijuana.',
        project_id: p8.id
    },
    {
        title: "Prepping",
        body: 'Lay down the card board onto a cutting table (any table you don\'t mind ruining...or perhaps put something under it)

        Measure two inch lines for each cut. This allows a good depth. Not to mention that once one side is shredded to nothing, it can simply be flipped over.

        Once your lines are plotted, use your rule and blade to cut out the pieces.',
        project_id: p8.id
    },
    {
        title: "Final Steps",
        body: 'Next you\'re going to apply glue to each strip. Start placing them together, one on-top of another. Continue until done.

        With the Optional Cat Marijuana, you can sprinkle some along with the glue, every other strip. Though, this isn\'t needed. Cats will scratch regardless to sharpen their claws. This was merely for some added enjoyment on my part. It\'s always fun to see your cats go mental.

        Find something heavy to place on-top of the strips while the glue dries. I used a couple of bricks.',
        project_id: p8.id
    },
    {
        title: "Now Let the Cats Enjoy!",
        body: 'Now it\'s time to let the cats enjoy their new scratcher.

        Put it on the floor or next to something those little bastards scratch...and magic...they\'ll love it!!!! Add some Cat Marijuana...and enjoy the chaos.',
        project_id: p8.id
    }
])


# PROJECT 9
# ##############################################################################

p9 = Project.create!(
    title: "Feather-on-a-Stick Cat Toy",
    body: "Cats love to be entertained, and they love feathers. But the claw factor makes it dangerous to simply hold a feather in front of a cat.
    The solution is to separate yourself from the sharp end of the kitty by putting the feather, or feathers, on a string on a stick.

    Yes, it's been done before and you can buy such things anywhere, but it's super simple and it costs next to nothing to build one yourself!

    Plus if you want a healthier feather toy for your cat, this is the way to do it.

    This project started for me while we were kayaking down a river in BC (Canada), and the local geese had left us lots of little feathers scattered all over the river. I knew that the kitty would be upset at me if I didn't fetch him a few.

    So if you have a few minutes to spare, let's go build a cat toy!

    The usual disclaimer applies: Be safe and keep your kitty safe. I'll happily take credit for things going well, but I'm not responsible if anything goes wrong :)",
    author: User.order('RANDOM()').first,
    picture_url: "feather_on_a_stick.jpg"
)

p9steps = Step.create!([
    {
        title: "Parts",
        body: "You don't need much to make a cat toy like this.

        For this instructable, I used the following:
        - 20\" piece of 1/4\" dowel
        - 1\" piece of clear tubing, 3/8\" outside, 1/4\" inside dimension.
        - 18\" piece of strong cord.
        - feathers
        - a pen cap
        - a stick of glue gun glue

        Tools:
        - Glue gun
        - scissors

        I already had all the parts lying around, but you can buy most of the pieces inexpensively or free.
        For the dowel you could use any stick (plastic or wood) that you might already have.
        For the tubing, mine was from a wine-making place, usually used for moving wine or filling bottles. It needs to fit snugly on the stick.
        I used a kind of string/cord often used for roman blinds. Any strong string should do.
        The feathers were donated by the local geese (in a peaceful manner, I think they were preening themselves). The blue feathers in this instructable were from the dollar store. Obviously the blue ones are not as environmentally or bird friendly, and the blue colour isn't as good for the kitty as natural feathers (but no worse from store-bought toys).
        The pen cap was easy - it's from those cheap stick pens that you get at any hotel or conference. It's nice in that the plastic is strong but handles chewing well. Make sure you use one that won't shatter, as the kitty will be chewing on it.",
        project_id: p9.id
    },
    {
        title: "Assemble the Stick-Cord-Cap",
        body: "To assemble the stick, cord, and cap:

        1. put a knot in one end of the string/cord
        2. using the scissors (or any suitable pokey-device), trim the tab (if any) off the pen cap, then poke a hole into the top of the pen cap that is big enough for the string/cord to go through, but not so big as to let the knot through.
        3. thread the string through the hole in the cap, so that the knot ends up on the inside of the cap. For me I just pushed the string through and then pull it out the hole. You might need to use a needle or skewer to help it through.
        4. put the other (non-knot) side of the string through the tubing piece
        5. push the tubing onto the end of the stick, so that it holds the string in place.

        In my case, the string was held on so tight by the tubing that I didn't need anything else there. If it's loose, you could add a knot to that end of the string/cord, or add a drop of hot glue.

        Add Tip",
        project_id: p9.id
    },
    {
        title: "Just Add Feathers",
        body: "The final step is to add the feathers into the pen cap:

        1. select a bunch of feathers and align them with the pin ends all pointing one way
        2. test fit the feathers into the cap (pin ends into cap) - add more if needed, or remove some if you had too many. Take them out before the next step.
        3. squeeze some hot glue into the cap. Fill it maybe halfway.
        4. before the hot glue sets, push the bunch of feathers into it. Pin ends go into the cap, into the glue. Some hot glue will likely ooze out the end of the pen cap - keep fingers clear!
        5. remove excess hot glue from the end of the pen cap (wipe it onto some paper or cardboard).
        6. let the hot glue cool and set
        7. remove any loose feathers

        I'm actually quite impressed by how well the hot glue holds the feathers in place.",
        project_id: p9.id
    },
    {
        title: "Finished!",
        body: "That's it! The cat toy is complete and ready to be beta tested!",
        project_id: p9.id
    }
])

# PROJECT N
# ##############################################################################

p10 = Project.create!(
    title: "Cardboard Mouse",
    body: "On occasion, you may find yourself under the constant gaze of your kitty who, at a moment's notice would be ready to jump up and have some fun, except you have nothing to offer.

    This instructable will show you how to jazz up a lazy Sunday afternoon for your lovable little feline in just a few minutes with a simple piece of cardboard!!!",
    author: User.order('RANDOM()').first,
    picture_url: "cardboard_mouse.jpg"
)

p10steps = Step.create!([
    {
        title: "Supplies",
        body: "1) A clean piece of kraft cardboard;
        2) Printed or hand drawn template;
        3) Tape (to secure template);
        4) A sharp X-acto Blade and handle;
        5) Cutting mat; (or another sheet of cardboard to cut on);
        6) Elmer's non-toxic glue

        The basic concept behind this toy is to create a 3-dimension form by juxtaposing (2), 2-dimensional planes on to one another.

        Or in classic 'breakfast cereal box' language: by inserting \"slot-A into slot-B\".

        These toys can be made in any form you can conjure up! But for the purposes of this instructable, we will be using the 'mouse' cat toy template (available in the following link in step 7).",
        project_id: p10.id
    },
    {
        title: "Secure Template to Cardboard",
        body: "The pre-designed template assumes you are using a 3/16\" thick piece of cardboard. If you are using a thinner or thicker piece of cardboard, adjust the width of the slots accordingly.

        Tape the (computer printed or hand sketched) paper template to your piece of cardboard.

        Pay particular attention to the direction of the corrugated flutes: to retain enough structure, the flutes should run perpendicular to the tail.",
        project_id: p10.id
    },
    {
        title: "Cutting Out the Cardboard Mouse",
        body: "Using an X-acto blade, carefully score the cardboard along the lines of the template shapes.

        First trace the image with your blade, cutting through the paper and just scoring the cardboard underneath, (this is easier than cutting through the paper and cardboard all at once).

        Remove the paper template and completely cut out the pieces using the score lines as a guide.",
        project_id: p10.id
    },
    {
        title: "A Dot of Glue",
        body: "A dot of Elmer's non-toxic glue is sufficient to hold the pieces firmly in place when in use!",
        project_id: p10.id
    },
    {
        title: "Assembly",
        body: "Assemble the pieces by \"Inserting slot A into slot B.\"",
        project_id: p10.id
    },
    {
        title: "Even More Shapes!",
        body: "As mentioned earlier, you can create these toys in any shape you can imagine! Once you have gained a basic understanding of the toy's construction, create new shapes by sketching them on a piece of scrap paper, or even directly on the cardboard using a non-toxic pen or pencil.",
        project_id: p10.id
    }
])

# PROJECT 11
# ##############################################################################

p11 = Project.create!(
    title: "Cat Scratching Post",
    body: 'My friend said she wants to buy a scratching post for her cat, and I said "I can do it for you, you don\'t need to buy."',
    author: User.order('RANDOM()').first,
    picture_url: "cat_scratching_post.jpg"
)

p11steps = Step.create!([
    {
        title: "Materials and Tools",
        body: "Materials,

        A cardboard tube, 500 mm length

        10 m rope, (I chose jute rope, which is not synthetic)

        Adjustable cabinet foot (I cut mine so that it can fit inside the tube),

        500x500x10 mm MDF,

        screws, suitable to cabinet foot and MDF

        piece of fabric,

        a thick cardboard, same dimensions as MDF,

        A jar lid, same diameter of cardboard tube.

        Tools,

        Hot glue Gun,

        Screwdriver,

        Scissors.",
        project_id: p11.id
    },
    {
        title: "Base",
        body: "1. Assemble the foot to the center of MDF board.

        2.cut a hole to the center of cardboard with the same diameter of tube.

        3. using hot glue, fix the cardboard to the MDF. hole in the cardboard should face the cabinet foot.

        4. Cover it with fabric using hot glue. Make a hole in the center.",
        project_id: p11.id
    },
    {
        title: "Post",
        body: "1. Fit the other part of cabinet foot inside the tube and fix it using hot glue.

        2. Wrap the rope around the tube. Hot glue can be used to fix the rope at some points.

        3. Cover the jar lid with the fabric.

        4. Place the lid to the top of the post using hot glue.",
        project_id: p11.id
    },
    {
        title: "Assembly",
        body: "Put together the base and post. Since an adjustable foot is used, post and base can be separated for easy transport and/or storage.",
        project_id: p11.id
    }
])

# PROJECT 12
# ##############################################################################

p12 = Project.create!(
    title: "Glass Mounted Hanging Cat Bed",
    body: "If you have some cats, you'll know that one of their favorite sports is sleeping. Some cats sleep around 16 hours a day, and they love to vary the place where they lie down to sleep.

    For this project my wife and I made a hanging cat bet, so our cats would have their own comfy furniture for sleeping all night (and all day) long! It's easy to make, using materials one can find in local hardware stores, and hand tools only.",
    author: User.order('RANDOM()').first,
    picture_url: "hanging_cat_bed.jpg"
)

p12steps = Step.create!([
    {
        title: "Tools and Materials",
        body: "We used the following tools for the construction of our hanging cat bed:

        - A Hacksaw. We had to cut the PVC pipes in smaller pieces;
        - A Drilling machine. We attached some of the suction cups to the pipes using some screws. The drilling machine was ussed for drilling the pipes;
        - A Measuring tape (or a Ruler) for measuring the length of the pipes and the fabric;
        - A Screwdriver for attaching the suction cups with some screws;
        - A pair of scissors for cutting the fabric;
        - Sewing needles. When the frame was ready, we had to sew the fabric around the frame;
        - A cutter, for cutting the steel cables.

        The following materials were used:

        - 1'' PVC pipes (1,4m)*
        - 1'' 90° bend (L shape)* (x2)
        - 1'' tee (x2)*
        - 25mm screws (x2)
        - Suction cups (for glass) 90 mm in diameter (x2)
        - Suction cups (for glass) 40 mm in diameter (x2)
        - Woven fabric (70 x 70cm)
        - Sewing thread
        - 1,5mm steel cabe (1,5m)**
        - * 1/2'' pipes might be used as well.

        ** we used a cloathesline steel cable. It's coated with a plastic layer, and it's very resistent. We tried other types of cables, but the cats would easilly bite and cut them.",
        project_id: p12.id
    },
    {
        title: "Measuring and Cutting the Pipes",
        body: "First we had to cut the pipes in suitable sizes. For our hanging bed project, we cut the pipes in four pieces with approximatelly 35 cm each.

        We used a tape for measuring the lenght of the pieces of pipe, and cut them with a hacksaw. A sandpaper might be used for a better finishing.",
        project_id: p12.id
    },
    {
        title: "Preparing the Smaller Suction Cups",
        body: "The smaller suction cups (40 mm ones) were attached to the tee fittings using some screws. For that, we had to drill a pair of holes.

        The center position of the holes were marked with a pen, and then drilling machine was used. It will be easier if a small hole is created first (with a nail, for instance) and later enlarge with the drilling machine. The position of the hole will depend on the model of your suction cup.

        A 25 mm screw as used for attaching the suction cup to the tee fitting, as it's shown in the pictures.",
        project_id: p12.id
    },
    {
        title: "Preparing the Larger Suction Cups",
        body: "The larger suction cups (90 mm) support most of the weight of the the cat and the hanging bed structure. We tried to use smaller ones (40 mm) here, but they would easilly dettach from the glass.

        First we had to cut the steel cable with the desired lenght (two cables of approx. 70 cm each) using a pair of cutters. We tied one end of the cable to the suction cup center bolt, and firmly tightened it with a nut. The other end was tied to the pipes, as it will be shown later.",
        project_id: p12.id
    },
    {
        title: "Measure, Cut and Sew the Fabric",
        body: "We measured and cut the fabric to be used in the bed with a pair of scissor. In the picture I suggest some dimensions, based on the pipe sizes we used. If you want to create a larger or smaller cat bed, remember to resize these measurements too.

        We sew the fabric out of the pipes, and only then assembled the structure. But one might assemble the stucture first and sew the cloth latter.

        Sew the fabric arround the pipes. You can also sew the fabric out of the pipes, and only then assemble the structure.",
        project_id: p12.id
    },
    {
        title: "Mounting the Frame",
        body: "We mounted the frame as shown in the pictures.

        1. We attached both tee fittings (with the smaller suction cups already installed) at the end of two pipes;
        2. Those two pipes passed through the fabric;
        3. A 90º bend was attached at the end of each pipe;
        4. A third pipe was connected to both tee fittings, passing through the fabric;
        5. The fourth pipe connected both 90º bends. Before attaching them, we tied the steel cable.
        6. The connection between pipes and fitting is quite tight, so you won't probably need to glue the pipes. This way it's also easier to disassemble the structure if you need to wash the cloth, for instance.

        At this point your cats will already be curious and wondering what are you doing!",
        project_id: p12.id
    },
    {
        title: "Installation",
        body: "The instalation of the hanging bed is very easy. Attach the smaller suction cups to the glass horizontally. Then attach the larger suction cups, so that the cables are stretched and the bed is leveled. Make sure the cups and the glass are clear, for maximum adherence.

        The bed shouldn't be installed at high places, so that the cats won't get hurt if they accidentally fall (or if any of the succion cups dettach from the glass). It's recommended to test first how",
        project_id: p12.id
    },
    {
        title: "Usage",
        body: "Install the bed on a glass window or door. They'll love to see the movement outside while they get to sleep.

        At first the cats will find it strange, but they will quickly become accustomed to the idea and begin to divide the space. Put a blanket on the bed, and they'll love it even more.

        Make sure there is a surface from which cats can jump to access the bed.

        Now, let them sleep, and have fun!",
        project_id: p12.id
    }
])

# # PROJECT N
# # ##############################################################################

# pN = Project.create!(
#     title: "",
#     body: "",
#     author: User.order('RANDOM()').first,
#     picture_url: "simple_cat_hammock.jpg"
# )

# pNsteps = Step.create!([
#     {
#         title: "",
#         body: "",
#         project_id: pN.id
#     },
#     {
#         title: "",
#         body: "",
#         project_id: pN.id
#     },
#     {
#         title: "",
#         body: "",
#         project_id: pN.id
#     },
#     {
#         title: "",
#         body: "",
#         project_id: pN.id
#     }
# ])