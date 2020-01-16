# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

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
    picture_url: 'http://placekitten.com/g/306/255',
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
    picture_url: 'http://placekitten.com/g/306/255',
)

p3 = Project.create!(
    title: 'stuffed cat bed',
    body: 'Cats love these easy to make, stuffed cat beds. We also sell them for $15 each for the local cat shelter.',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/306/255',
)


p5 = Project.create!(
    title: 'DIY Cat Tent',
    body: "I kept seeing photos of cat tents on Pinterest and being shared on Facebook, but none of them had good instructions! I decided to make a cat tent for Luna and document it so you guys could make one too. :D

    This cat tent is super easy to make - you really just need a t-shirt, some wire hangers and a piece of cardboard. As a bonus, it really only takes five minutes, so if your cat ignores it you didn't put too much effort in. ;)",
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/306/255',
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
        project_id: Project.find_by(title: 'Cat Tree').id
    },
    {
        title: "Marking the Middles",
        body: "I used a straight edge to make a 'X' in the middle of each rectangle - and drilled a pilot hole in each piece. This will help align all the parts in future steps.",
        project_id: Project.find_by(title: 'Cat Tree').id
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
        project_id: Project.find_by(title: 'Cat Tree').id
    },
    {
        title: "Assembly Step - Getting Ready to Wrap the Rope",
        body: "I decided to add some carpet to the top and bottom of the 2x4 - mainly because I wasn't sure if I had enough rope.

        The assembly steps here require driving a lag bold from the BOTTOM of the bottom piece (that has already been carpeted into the 2x4 stand. At this point the bolt should be snug, but loose enough to allow you to turn the post.

        The TOP piece is screwed into the top of the 2x4. I used 3 screws, they were about 2in long. The middle screw goes through the middle of the plywood into the middle pilot hole on the top. The other 2 screws add additional security. This piece is tightly secured.",
        project_id: Project.find_by(title: 'Cat Tree').id
    },
    {
        title: "Wrapping the Rope - Cool Bit Number 2",
        body: "Put some staples into the rope where you want to start. I wrapped from top to bottom, but don't see any issues going from bottom to top.

        Once the rope is secure use the TOP of the piece to turn the entire top piece and 2x4, your partner will hold the rope and you will wind the rope around the 2x4.

        The second picture shows my son guiding the winding rope as I turned the top piece. This approach seems to be a lot easier than wrapping the rope around the wood. Also, it is easy to get everything nice and snug.

        When you get to the bottom finish it off with a couple staples and cut the remaining rope. In my case I only had a couple inches of rope left over - glad I added some carpet to the top and bottom.",
        project_id: Project.find_by(title: 'Cat Tree').id
    },
    {
        title: "Finishing It Up",
        body: "We are done spinning around now, so line everything up and drive the lag bolt tight. I added a couple more screws to make sure things don't loosen up.

        Now all that remains is to carpet the top piece. This is just like the bottom piece, but you have the whole cat tree to deal with when pushing things into the carpeting jig.

        Conclusion - Using these techniques my son was able to explain the assembly instruction to a bunch of middle school boys (and a few high school age) and they were able to assemble about 25 of these cat trees in several hours.",
        project_id: Project.find_by(title: 'Cat Tree').id
    }
])


p2steps = Step.create!([
    {
        title: "Preheat",
        body: 'Preheat the oven to 350 degrees Fahrenheit.',
        project_id: Project.find_by(title: 'Cat Treats').id
    },
    {
        title: "Mix",
        body: 'Combine cheeses and yogurt. Add flour and cornmeal. If needed, add a small amount of water to create a nice dough.',
        project_id: Project.find_by(title: 'Cat Treats').id
    },
    {
        title: "Form Treats",
        body: 'Knead dough into a ball and roll to 1/4 inch. Cut into one inch sized pieces and place on greased cookie sheet.',
        project_id: Project.find_by(title: 'Cat Treats').id
    },
    {
        title: "Bake",
        body: 'Bake for 25 minutes. Makes 2 dozen.',
        project_id: Project.find_by(title: 'Cat Treats').id
    }
])

p3steps = Step.create!([
    {
        title: "Cut the Fabric",
        body: 'Cut a 17" round of fabric. I made a circle on a brown kraft paper shopping bag to use as a pattern, so I can use it over and over. Pick a center spot and measure out 8.5" and then continue till you have made a circle. Join all the marks and cut it out. Lay on doubled fabric and cut your round.',
        project_id: Project.find_by(title: 'stuffed cat bed').id
    },
    {
        title: "Cut the Batting",
        body: 'Cut a 16" round of fiberfill or any type of batting. If you have old quilted mattress covers, these work well also. This piece is going to go in between the two pieces of the 17" round fabric you just cut. I sew an X across this fabric. I fold it in half to make a mark, pin and then sew. Go opposite and do the same so you have sewn an x across all 3 layers. This keeps the batting from shifting when the bed is washed.',
        project_id: Project.find_by(title: 'stuffed cat bed').id
    },
    {
        title: "Cut a Rectangle",
        body: 'Cut a 14" rectangle the outside measurement of your circle. This is usually about 60" So 14" wide by 60" long. Sew the end together and double the fabric, wrong sides together, right side facing out.',
        project_id: Project.find_by(title: 'stuffed cat bed').id
    },
    {
        title: "Sew",
        body: 'sew this rectangle to your circle, leaving an opening to stuff it with.',
        project_id: Project.find_by(title: 'stuffed cat bed').id
    },
    {
        title: "Stuff",
        body: 'Stuff the outer ring to the desired fullness (I like them real full) of loose fiberfill. I save old stuffed pillows and take the stuffing out, to again save money. Once it is stuffed to the desired fullness, back under the machine to close the hole.',
        project_id: Project.find_by(title: 'stuffed cat bed').id
    },
    {
        title: "Finishing Up",
        body: 'Turn the bed inside out so the seams on the edges disappear under the stuffed ring.',
        project_id: Project.find_by(title: 'stuffed cat bed').id
    },
])