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

p1 = Project.create!(
    title: 'Giant Cat Tree',
    body: 'A thing for your cat to climb on',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/255/306',
)

p2 = Project.create!(
    title: 'Freeze Dried Shrimp Treats',
    body: 'Delicious!',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/255/306'
)

p3 = Project.create!(
    title: 'fluffy cat bed',
    body: 'It is SUPER comfy',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/255/306'
)

p4 = Project.create!(
    title: 'Sock',
    body: 'Just a sock on the floor.',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/255/306'
)

p5 = Project.create!(
    title: 'Cardboard Cat House',
    body: 'A palace for your kitty',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/255/306'
)

p6 = Project.create!(
    title: 'Play Tunnel',
    body: 'Run and play in this fun tunnel',
    author: User.order('RANDOM()').first,
    picture_url: 'http://placekitten.com/g/255/306'
)