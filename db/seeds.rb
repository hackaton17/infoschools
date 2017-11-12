# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This data can be loaded with the rails db:seed command (or created
# alongside the database with db:setup).

# data = YAML
#       .load(File.read("#{Rails.root}/db/data.yml"))
#       .with_indifferent_access

# data['schools'].each do |school_data|
#   School.create(
#     identifier: school_data[:identifier],
#     longitude: school_data[:longitude],
#     latitude: school_data[:latitude],
#     code: school_data[:code],
#     nomeesc: school_data[:nomeesc]
    
#   )
# end



Qualification.destroy_all
i=0
Schoolb.all.each do |sc|
  i+=1
  if i % 10 == 0
      10.times do |index|
          Qualification.create(schoolb: sc, user: 1, user_type: Random.rand(3), 
          value: Random.rand(5), comment:"comment #{index}")
      end
  end
end


# schools.each do |school|
#   Qualification.create!(:school, 1, Random.rand(3), Random.rand(5),"comment")

# end