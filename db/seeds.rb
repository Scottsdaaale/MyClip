# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Seeding..."
scottsdaaale = User.create(
    username: "Scottsdaale",
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
    clip_url: "https://www.gifyourgame.com/GuardlessForspentKingboo",
    clip_owner: "Bamman"
)
clip2 = Clip.create(
    clip_url: "https://www.gifyourgame.com/WagelessFulgentSirweston",
    clip_owner: "xXhush_babyXx"
)
clip3 = Clip.create(
    clip_url: "https://www.gifyourgame.com/SpeedingFleetingShulk",
    clip_owner: "Ljbadge"
)
clip4 = Clip.create(
    clip_url: "https://www.gifyourgame.com/ChangelessAbscessedCardian",
    clip_owner: "Scottsdaaale"
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

puts "Seeding done"