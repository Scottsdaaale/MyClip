# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Seeding..."
scottsdaaale = User.create(
    username: "Scottsdaaale",
    password: "123"
)
tripyyytv= User.create(
    username: "TripyyyTV",
    password: "bozoL"
)
con_bot= User.create(
    username: "Con_bot3000",
    password: "idiot"
)
palpa= User.create(
    username: "Palpa",
    password: "dumb"
)
psydegoose = User.create(
    username: "Psydegoose",
    password: "poo"
)

clip1 = Clip.create(
    clip_url: "https://www.gifyourgame.com/SpeedingFleetingShulk",
    user_id: palpa.id
)
clip2 = Clip.create(
    clip_url: "https://www.gifyourgame.com/BlamefulSpringyRishfee",
    user_id: psydegoose.id

)
clip3 = Clip.create(
    clip_url: "https://www.gifyourgame.com/SeedyAskantHades",
    user_id: con_bot.id
)
clip4 = Clip.create(
    clip_url: "https://www.gifyourgame.com/TastefulHoniedRougethebat",
    user_id: scottsdaaale.id
)

rating1 = Rating.create(
    user_id: tripyyytv.id,
    clip_id: clip1.id,
    number_of_stars: 3
)
rating2 = Rating.create(
    user_id: scottsdaaale.id,
    clip_id: clip2.id,
    number_of_stars: 5
)
rating3 = Rating.create(
    user_id: con_bot.id,
    clip_id: clip3.id,
    number_of_stars: 2
)
rating4 = Rating.create(
    user_id: psydegoose.id,
    clip_id: clip4.id,
    number_of_stars: 4
)
rating5 = Rating.create(
    user_id: palpa.id,
    clip_id: clip4.id,
    number_of_stars: 1
)

comment1_1 = Comment.create(
    user_id: con_bot.id,
    clip_id: clip1.id,
    comment: "Nice shot!"
)
comment2_1 = Comment.create(
    user_id: palpa.id,
    clip_id: clip1.id,
    comment: "SHEEEEEESH"
)
comment1_2 = Comment.create(
    user_id: tripyyytv.id,
    clip_id: clip2.id,
    comment: "nice!"
)
comment2_2 = Comment.create(
    user_id: psydegoose.id,
    clip_id: clip2.id,
    comment: "woooooo!"
)
comment3_2 = Comment.create(
    user_id: psydegoose.id,
    clip_id: clip2.id,
    comment: "yeeeah!"
)
comment1_3 = Comment.create(
    user_id: con_bot.id,
    clip_id: clip3.id,
    comment: "daaang"
)
comment2_3 = Comment.create(
    user_id: palpa.id,
    clip_id: clip3.id,
    comment: "🔥🔥🔥"
)
comment1_4 = Comment.create(
    user_id: palpa.id,
    clip_id: clip4.id,
    comment: "You suck!"
)
comment2_4 = Comment.create(
    user_id: psydegoose.id,
    clip_id: clip4.id,
    comment: "Kael stinks!"
)
Clip.update_amount_of_comments_seeds

puts "Seeding done"