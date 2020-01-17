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

10.times do 
    User.create(username: Faker::Games::Pokemon.name, email: Faker::Internet.email, password: 'password')
end

guest = User.create(
    username: 'guest', 
    email: 'guest@guest.com',
    password: 'password'
)

p1 = Project.create!(
    title: 'Cat Tree',
    body: "Several years ago when my son was in scouts for his eagle project he made a couple dozen cat trees to donate to the local shelter to give to folks who adopt a cat. Since he had such a large number to make we came up with some techniques to help production.  For this 'ible I scavenged some plywood, a 2x4, some carpet remnants, and some sisal rope.",
    author: User.order('RANDOM()').first,
    picture_url: 'cat_tree.jpg',
)

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

p3 = Project.create!(
    title: 'Stuffed Cat Bed',
    body: 'Cats love these easy to make, stuffed cat beds. We also sell them for $15 each for the local cat shelter.',
    author: User.order('RANDOM()').first,
    picture_url: 'stuffed_cat_bed.jpg',
)

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


p5 = Project.create!(
    title: 'DIY Cat Tent',
    body: "I kept seeing photos of cat tents on Pinterest and being shared on Facebook, but none of them had good instructions! I decided to make a cat tent for Luna and document it so you guys could make one too. :D

    This cat tent is super easy to make - you really just need a t-shirt, some wire hangers and a piece of cardboard. As a bonus, it really only takes five minutes, so if your cat ignores it you didn't put too much effort in. ;)",
    author: User.order('RANDOM()').first,
    picture_url: "diy_cat_tent.jpg"
)


# p4 = Project.create!(
#     title: 'Sock',
#     body: 'Just a sock on the floor.',
#     author: User.order('RANDOM()').first,
#     picture_url: 'http://placekitten.com/g/306/255',
# )
# p5 = Project.create!(
#     title: 'Cardboard Cat House',
#     body: 'A palace for your kitty',
#     author: User.order('RANDOM()').first,
#     picture_url: 'http://placekitten.com/g/306/255',
# )

# p6 = Project.create!(
#     title: 'Play Tunnel',
#     body: 'Run and play in this fun tunnel',
#     author: User.order('RANDOM()').first,
#     picture_url: 'http://placekitten.com/g/306/255',
# )

# projects = Project.all
# projects.each do |project|
#     5.times do
#         Step.create!(
#         title: Faker::Lorem.sentence(word_count: 3, supplemental: false, random_words_to_add: 4),
#         body: Faker::Lorem.paragraph(sentence_count: 1, supplemental: true, random_sentences_to_add: 3),
#         project_id: project.id
#     )
#     end
# end

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